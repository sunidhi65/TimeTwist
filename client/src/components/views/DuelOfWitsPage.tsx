import React, { useState, useEffect, useCallback } from 'react';
import { DuelOfWitsPageProps, View, User, Challenge } from '../../types';
import { challengesBySubject, COMMON_SUBJECTS } from '../../data/challenges';
import { evaluateExplanation, AIFeedback } from '../../../services/geminiService';
import Button from '../ui/Button';
import Card from '../ui/Card';
import SwordsIcon from '../icons/SwordIcon';

type DuelState = 'lobby' | 'matching' | 'active' | 'evaluating' | 'results';
const DUEL_TIME_LIMIT = 90; // 90 seconds
const WIN_POINTS = 100;
const LOSS_POINTS = 20;

const DuelOfWitsPage: React.FC<DuelOfWitsPageProps> = ({ user, allUsers, onNavigate, onDuelEnd }) => {
    const [duelState, setDuelState] = useState<DuelState>('lobby');
    const [opponent, setOpponent] = useState<User | null>(null);
    const [challenge, setChallenge] = useState<Challenge | null>(null);
    const [timeLeft, setTimeLeft] = useState(DUEL_TIME_LIMIT);
    const [myExplanation, setMyExplanation] = useState('');
    const [myFeedback, setMyFeedback] = useState<AIFeedback | null>(null);
    const [opponentFeedback, setOpponentFeedback] = useState<AIFeedback | null>(null);
    const [winner, setWinner] = useState<'user' | 'opponent' | 'draw' | null>(null);
    const [isOpponentRevealed, setIsOpponentRevealed] = useState(false);

    // Matchmaking logic
    const handleFindDuel = () => {
        setDuelState('matching');
        setIsOpponentRevealed(false);
        setTimeout(() => {
            // Find a random opponent that is not the current user
            const potentialOpponents = allUsers.filter(u => u.id !== user.id);
            const randomOpponent = potentialOpponents[Math.floor(Math.random() * potentialOpponents.length)];
            setOpponent(randomOpponent);
            
            // Find a random challenge from subjects common to all branches to ensure fairness.
            const randomSubject = COMMON_SUBJECTS[Math.floor(Math.random() * COMMON_SUBJECTS.length)];
            const subjectChallenges = challengesBySubject[randomSubject];
            const randomChallenge = subjectChallenges[Math.floor(Math.random() * subjectChallenges.length)];
            setChallenge(randomChallenge);
            
            // Trigger the reveal animation, then switch to active
            setTimeout(() => {
                setIsOpponentRevealed(true);
                setTimeout(() => setDuelState('active'), 1200);
            }, 500)

        }, 2000 + Math.random() * 1000); // Simulate network delay
    };
    
    // Timer logic
    useEffect(() => {
        if (duelState !== 'active') {
            setTimeLeft(DUEL_TIME_LIMIT);
            return;
        }
        
        if (timeLeft <= 0) {
            handleSubmit();
            return;
        }

        const timerId = setInterval(() => {
            setTimeLeft(t => t - 1);
        }, 1000);
        
        return () => clearInterval(timerId);
    }, [duelState, timeLeft]);

    const handleSubmit = useCallback(async () => {
        if (!challenge || duelState !== 'active') return;
        setDuelState('evaluating');
        
        // Simulate opponent's explanation
        const opponentExplanation = `My logic dictates that the result "${challenge.answer}" comes from a fundamental principle. By applying the core concepts related to this topic, the answer becomes self-evident.`;
        
        try {
            const [userEval, opponentEval] = await Promise.all([
                evaluateExplanation(challenge.answer, myExplanation || "I could not provide an explanation in time."),
                evaluateExplanation(challenge.answer, opponentExplanation)
            ]);
            
            setMyFeedback(userEval);
            setOpponentFeedback(opponentEval);

            let duelWinner: 'user' | 'opponent' | 'draw' = 'draw';
            if (userEval.score > opponentEval.score) {
                duelWinner = 'user';
                onDuelEnd(WIN_POINTS);
            } else if (opponentEval.score > userEval.score) {
                duelWinner = 'opponent';
                onDuelEnd(LOSS_POINTS);
            } else {
                // Tie in score, could add tie-breaker logic later
                onDuelEnd(LOSS_POINTS);
            }
            setWinner(duelWinner);

        } catch (error) {
            console.error("Error during duel evaluation:", error);
            // Handle error case, maybe declare a draw
            setMyFeedback({ score: 0, title: "Error", strengths: "", improvements: ["Evaluation failed."] });
            setOpponentFeedback({ score: 0, title: "Error", strengths: "", improvements: ["Evaluation failed."] });
            setWinner('draw');
            onDuelEnd(0);
        } finally {
            setDuelState('results');
        }
    }, [challenge, myExplanation, onDuelEnd, duelState]);

    const handlePlayAgain = () => {
        setDuelState('lobby');
        setOpponent(null);
        setChallenge(null);
        setTimeLeft(DUEL_TIME_LIMIT);
        setMyExplanation('');
        setMyFeedback(null);
        setOpponentFeedback(null);
        setWinner(null);
        setIsOpponentRevealed(false);
    };

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timerColor = timeLeft < 15 ? 'text-glow-pink' : timeLeft < 45 ? 'text-rune-gold' : 'text-spell-blue';

    // RENDER FUNCTIONS
    const renderLobby = () => (
        <Card className="duel-lobby-card">
            <div className="icon">
                <SwordsIcon />
            </div>
            <h1 className="font-pixel text-rune-gold">Duel of Wits</h1>
            <p>
                The arena calls! Do you possess the wit and speed to best another apprentice?
                <br/>
                Face a random paradox, weave your logic faster and stronger than your opponent, and claim eternal glory (and Wizard Points).
            </p>
            <Button onClick={handleFindDuel} variant="primary">
                Find a Worthy Opponent
            </Button>
        </Card>
    );

    const renderMatching = () => (
        <div className="duel-matching-container">
            <div className="duel-player-card user">
                <img src={user.avatar} alt={user.username} />
                <h3>{user.username}</h3>
                <p className="level-text">Level {user.level}</p>
            </div>
            <div className="duel-vs-text">VS</div>
            <div className={`duel-player-card opponent ${isOpponentRevealed ? 'revealed' : ''}`}>
                <div className="placeholder">
                   <p>?</p>
                </div>
                {opponent && <img src={opponent.avatar} alt={opponent.username} style={{display: isOpponentRevealed ? 'block' : 'none'}} />}
                <h3>{isOpponentRevealed ? opponent?.username : 'Searching...'}</h3>
                <p className="level-text">{isOpponentRevealed ? `Level ${opponent?.level}` : 'Awaiting Challenger'}</p>
            </div>
        </div>
    );

    const renderActiveDuel = () => (
        <div className="duel-active-container">
            <div className="duel-active-hud">
                <div className="hud-player-card user">
                    <img src={user.avatar} alt={user.username} />
                    <p className="username">{user.username}</p>
                </div>
                 <div className="hud-player-card opponent">
                    <p className="username">{opponent!.username}</p>
                    <img src={opponent!.avatar} alt={opponent!.username} />
                </div>
            </div>
            <div className={`timer ${timerColor}`}>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </div>
             <Card className="challenge-card">
                <p className="topic-name">A Duel of Wits</p>
                <h1 className="answer font-pixel">{challenge?.answer}</h1>
                <p className="description">{challenge?.description}</p>
            </Card>
            <Card className="explanation-card mt-8">
                <h2>Weave Your Explanation, Quickly!</h2>
                <textarea
                    value={myExplanation}
                    onChange={(e) => setMyExplanation(e.target.value)}
                    placeholder="The sands of time are flowing..."
                    className="explanation-textarea font-sans"
                />
                <div className="actions">
                    <Button onClick={handleSubmit} disabled={!myExplanation.trim()}>
                        Lock In Your Logic
                    </Button>
                </div>
            </Card>
        </div>
    );
    
    const renderEvaluating = () => (
         <div className="text-center">
            <h2 className="text-3xl font-bold text-spell-blue animate-pulse">The Sages are Judging the Duel...</h2>
            <p className="mt-4 text-purple-200/80 text-lg">Comparing your logic against your opponent's.</p>
        </div>
    );

    const renderResults = () => (
        <div>
            <div className="text-center mb-8">
                 <h1 className="text-5xl font-bold font-pixel text-rune-gold">
                    {winner === 'user' ? 'VICTORY!' : winner === 'opponent' ? 'DEFEAT' : 'A DRAW!'}
                 </h1>
                 <p className="text-xl text-purple-200/90 mt-2">
                    {winner === 'user' ? `You earned ${WIN_POINTS} WP!` : `You were awarded ${LOSS_POINTS} WP for your efforts.`}
                 </p>
            </div>

            <div className="duel-results-grid">
                {/* User Panel */}
                <Card className={`duel-result-panel ${winner === 'user' ? 'winner' : 'loser'}`}>
                    <div className="duel-result-header">
                        <img src={user.avatar} alt={user.username} />
                        <div>
                            <p className="username">{user.username}</p>
                            <p className="level-text">Level {user.level}</p>
                        </div>
                    </div>
                    <div className="duel-result-score">
                        <p className="score-label">Oracle's Score</p>
                        <p className="score-value">{myFeedback?.score ?? '?'}/10</p>
                    </div>
                    <p className="font-bold mb-2">Your Explanation:</p>
                    <div className="duel-result-explanation">{myExplanation || '(No explanation provided)'}</div>
                </Card>
                {/* Opponent Panel */}
                <Card className={`duel-result-panel ${winner === 'opponent' ? 'winner' : 'loser'}`}>
                     <div className="duel-result-header">
                        <img src={opponent!.avatar} alt={opponent!.username} />
                        <div>
                            <p className="username">{opponent!.username}</p>
                            <p className="level-text">Level {opponent!.level}</p>
                        </div>
                    </div>
                    <div className="duel-result-score">
                        <p className="score-label">Oracle's Score</p>
                        <p className="score-value">{opponentFeedback?.score ?? '?'}/10</p>
                    </div>
                    <p className="font-bold mb-2">Opponent's Explanation:</p>
                    <div className="duel-result-explanation">My logic dictates that the result "{challenge?.answer}" comes from a fundamental principle. By applying the core concepts related to this topic, the answer becomes self-evident.</div>
                </Card>
            </div>
             <div className="text-center mt-8 flex justify-center gap-4">
                <Button onClick={handlePlayAgain} variant="primary">Duel Again</Button>
                <Button onClick={() => onNavigate(View.DASHBOARD)} variant="secondary">Back to Dashboard</Button>
            </div>
        </div>
    );
    
    return (
        <div>
            {(duelState === 'lobby' || duelState === 'results') && (
                <Button onClick={() => onNavigate(View.DASHBOARD)} className="mb-8">
                    &larr; Back to Dashboard
                </Button>
            )}
            <div className="animate-fade-in">
                {duelState === 'lobby' && renderLobby()}
                {duelState === 'matching' && renderMatching()}
                {duelState === 'active' && challenge && renderActiveDuel()}
                {duelState === 'evaluating' && renderEvaluating()}
                {duelState === 'results' && opponent && renderResults()}
            </div>
        </div>
    );
};

export default DuelOfWitsPage;