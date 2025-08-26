import React, { useState, useEffect, useCallback } from 'react';
import { View, User, Challenge, Subject } from '../../types';
import { challengesBySubject, BRANCH_SUBJECTS } from '../../data/challenges';
import Button from '../ui/Button';
import Card from '../ui/Card';
import SpellBookIcon from '../icons/SpellBookIcon';
import HourglassIcon from '../icons/HourglassIcon';

interface TimeTrialsModeProps {
    user: User;
    onNavigate: (view: View) => void;
}

const TIME_LIMIT = 120; // 2 minutes

const TimeTrialsMode: React.FC<TimeTrialsModeProps> = ({ user, onNavigate }) => {
    const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
    const [isActive, setIsActive] = useState(false);
    const [explanation, setExplanation] = useState('');
    const [isTimeUp, setIsTimeUp] = useState(false);
    const [score, setScore] = useState<number | null>(null);
    const [currentChallenge, setCurrentChallenge] = useState<Challenge | null>(null);
    const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);


    useEffect(() => {
        // Fix: Use ReturnType<typeof setInterval> for portable timer ID type
        let interval: ReturnType<typeof setInterval> | null = null;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(t => t - 1);
            }, 1000);
        } else if (timeLeft === 0 && isActive) {
            setIsActive(false);
            setIsTimeUp(true);
            handleSubmit(true); // Auto-submit when time is up
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isActive, timeLeft]);
    
    const handleStart = useCallback((subject: Subject) => {
        const subjectChallenges = challengesBySubject[subject];
        if (subjectChallenges.length === 0) {
            alert(`No challenges available for ${subject} yet.`);
            return;
        }
        const randomChallenge = subjectChallenges[Math.floor(Math.random() * subjectChallenges.length)];
        
        setCurrentChallenge(randomChallenge);
        setSelectedSubject(subject);
        setTimeLeft(TIME_LIMIT);
        setExplanation('');
        setIsTimeUp(false);
        setScore(null);
        setIsActive(true);
    }, []);

    const handleSubmit = (autoSubmitted = false) => {
        setIsActive(false);
        const timeBonus = autoSubmitted ? 0 : timeLeft * 10;
        const lengthBonus = explanation.length * 2;
        setScore(timeBonus + lengthBonus);
    };

    const resetTrial = () => {
        setIsActive(false);
        setScore(null);
        setSelectedSubject(null);
        setCurrentChallenge(null);
    }

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timerColor = timeLeft < 30 ? 'text-glow-pink' : timeLeft < 60 ? 'text-rune-gold' : 'text-spell-blue';

    // Subject Selection View
    if (!selectedSubject) {
        const availableSubjects = BRANCH_SUBJECTS[user.branch!];
        return (
            <div>
                <Button onClick={() => onNavigate(View.DASHBOARD)} className="mb-8">
                    &larr; Back to Dashboard
                </Button>
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold font-pixel text-rune-gold">Select a Trial</h1>
                    <p className="text-purple-300/80 mt-2">Choose a subject from your {user.branch} branch to test your speed and wit.</p>
                </div>
                <div className="selection-grid">
                    {availableSubjects.map(subject => (
                         <Card key={subject} className="mode-card card-clickable card-hover-glow-purple" onClick={() => handleStart(subject)}>
                            <div className="icon text-spell-blue"><SpellBookIcon/></div>
                            <h3 className="font-pixel">{subject} Trial</h3>
                        </Card>
                    ))}
                </div>
            </div>
        );
    }

    // Trial Finished View
    if (isTimeUp || score !== null) {
        return (
            <div>
                 <Button onClick={() => onNavigate(View.DASHBOARD)} className="mb-8">
                    &larr; Back to Dashboard
                </Button>
                <Card className="trial-results-card">
                     <div className="result-icon text-spell-blue"><HourglassIcon/></div>
                     <h2 className="result-title font-fantasy">{isTimeUp ? "Time's Up!" : "Trial Complete!"}</h2>
                     <p className="result-score-label">You scored:</p>
                     <p className="result-score">{score ?? 0}</p>
                     <p className="result-message">Well done, engineer. Quick thinking is a sign of a true master.</p>
                     <div className="result-actions">
                        <Button onClick={() => handleStart(selectedSubject)} variant="primary">Try Again</Button>
                        <Button onClick={resetTrial} variant="secondary">Change Subject</Button>
                     </div>
                </Card>
            </div>
        )
    }

    // Active Trial View
    return (
        <div>
            <div className="trial-header">
                <Button onClick={() => onNavigate(View.DASHBOARD)} variant="secondary">&larr; Quit Trial</Button>
                <div className={`trial-timer ${timerColor} ${timeLeft < 30 ? 'low-time' : ''}`}>
                    {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </div>
            </div>
            
            <div className="trial-active-grid">
                <div>
                    <Card className="challenge-card mb-0">
                        <p className="topic-name">A Problem in {selectedSubject}</p>
                        <h1 className="answer font-pixel">{currentChallenge?.answer}</h1>
                        <p className="description">{currentChallenge?.description}</p>
                    </Card>
                </div>

                <Card className="explanation-card">
                    <h2>Construct Your Explanation</h2>
                    <textarea
                        value={explanation}
                        onChange={(e) => setExplanation(e.target.value)}
                        placeholder="The clock is ticking..."
                        className="explanation-textarea font-sans"
                        disabled={!isActive}
                    />
                    <div className="actions">
                        <Button onClick={() => handleSubmit(false)} disabled={!isActive || !explanation.trim()}>
                            Submit Before Time Runs Out
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default TimeTrialsMode;