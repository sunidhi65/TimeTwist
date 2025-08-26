import React, { useState, useCallback } from 'react';
import { Challenge, Subject, TimeWarpModeProps, View, Topic } from '../../types';
import { AIFeedback, evaluateExplanation } from '../../../services/geminiService';
import { SUBJECT_TOPICS, BRANCH_SUBJECTS } from '../../data/challenges';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import SpellBookIcon from '../icons/SpellBookIcon';

const TimeWarpMode: React.FC<TimeWarpModeProps> = ({ user, onNavigate, onFeedbackReceived }) => {
    const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
    const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
    const [currentChallenge, setCurrentChallenge] = useState<Challenge | null>(null);
    const [explanation, setExplanation] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [feedback, setFeedback] = useState<AIFeedback | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSelectSubject = (subject: Subject) => {
        setSelectedSubject(subject);
        setSelectedTopic(null);
        setCurrentChallenge(null);
    };

    const handleSelectTopic = (topic: Topic) => {
        const nextChallenge = topic.challenges.find(c => !user.completedChallengeIds.includes(c.id));
        if (nextChallenge) {
            setSelectedTopic(topic);
            setCurrentChallenge(nextChallenge);
            setExplanation('');
            setFeedback(null);
        } else {
            console.log("Topic mastered! No new challenges to select.");
        }
    };

    const resetToSubjectSelection = () => {
        setSelectedSubject(null);
        setSelectedTopic(null);
        setCurrentChallenge(null);
    };

    const resetToTopicSelection = () => {
        setSelectedTopic(null);
        setCurrentChallenge(null);
    };


    const handleSubmit = async () => {
        if (!currentChallenge || !explanation.trim()) return;
        setIsLoading(true);
        const result = await evaluateExplanation(currentChallenge.answer, explanation);
        setFeedback(result);
        setIsLoading(false);
        setIsModalOpen(true);
    };
    
    const handleContinue = useCallback(() => {
        if (feedback && currentChallenge) {
            onFeedbackReceived(feedback.score * 10, feedback, currentChallenge.id);
        }
        setIsModalOpen(false);
        resetToTopicSelection();
    }, [feedback, onFeedbackReceived, currentChallenge]);

    if (!selectedSubject) {
        const availableSubjects = BRANCH_SUBJECTS[user.branch!];
        return (
            <div>
                 <Button onClick={() => onNavigate(View.DASHBOARD)} className="mb-8">
                    &larr; Back to Dashboard
                </Button>
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold font-pixel text-rune-gold">Select a Subject</h1>
                    <p className="text-purple-300/80 mt-2">Choose a subject from your {user.branch} branch to begin.</p>
                </div>
                <div className="selection-grid">
                    {availableSubjects.map(subject => (
                         <Card key={subject} className="mode-card card-clickable card-hover-glow-purple" onClick={() => handleSelectSubject(subject)}>
                            <div className="icon text-spell-blue">
                               <SpellBookIcon/>
                            </div>
                            <h3 className="font-pixel">{subject}</h3>
                        </Card>
                    ))}
                </div>
            </div>
        );
    }

    if (!selectedTopic) {
        const topics = SUBJECT_TOPICS[selectedSubject];
        return (
            <div>
                 <Button onClick={resetToSubjectSelection} className="mb-8">
                    &larr; Back to Subject Selection
                </Button>
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold font-pixel text-rune-gold">Select a Chapter</h1>
                    <p className="text-purple-300/80 mt-2">Choose a topic from the {selectedSubject} syllabus.</p>
                </div>
                <div className="topic-list">
                    {topics.map(topic => {
                        const completedCount = topic.challenges.filter(c => user.completedChallengeIds.includes(c.id)).length;
                        const totalCount = topic.challenges.length;
                        const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
                        const isMastered = totalCount > 0 && completedCount === totalCount;
                        return (
                            <Card 
                                key={topic.id} 
                                className={`topic-card ${isMastered ? 'mastered' : 'card-clickable card-hover-glow-purple'}`} 
                                onClick={!isMastered ? () => handleSelectTopic(topic) : undefined}
                            >
                                <div className="topic-header">
                                    <div>
                                        <h3 className={`topic-title ${isMastered ? 'mastered' : ''}`}>{topic.name} {isMastered && '★'}</h3>
                                        <p className="topic-description">{topic.description}</p>
                                    </div>
                                    <div className="topic-progress-text">
                                        <p className="counts">{completedCount} / {totalCount}</p>
                                        <p className="label">Completed</p>
                                    </div>
                                </div>
                                <div className="topic-progress-bar">
                                    <div
                                        className={`topic-progress-fill ${isMastered ? 'mastered' : ''}`}
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </div>
        )
    }

    if(currentChallenge) {
        return (
            <div>
                <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
                    <Button onClick={resetToTopicSelection}>&larr; Back to Topics</Button>
                </div>
                
                <Card className="challenge-card">
                    <p className="topic-name">A Problem in {selectedTopic.name}</p>
                    <h1 className="answer font-pixel">{currentChallenge.answer}</h1>
                    <p className="description">{currentChallenge.description}</p>
                </Card>

                <Card className="explanation-card">
                    <h2>Construct Your Explanation</h2>
                    <textarea
                        value={explanation}
                        onChange={(e) => setExplanation(e.target.value)}
                        placeholder="Begin your reverse chronological explanation here..."
                        className="explanation-textarea font-sans"
                        disabled={isLoading}
                    />
                    <div className="actions">
                        <Button onClick={handleSubmit} disabled={isLoading || !explanation.trim()}>
                            {isLoading ? 'The AI is thinking...' : 'Submit for Evaluation'}
                        </Button>
                    </div>
                </Card>

                <Modal isOpen={isModalOpen} onClose={handleContinue} title="AI Feedback">
                    {feedback && (
                        <div className="feedback-modal-content">
                            <div className="text-center">
                                <p className="verdict-title">{feedback.title}</p>
                                <div className="score">{feedback.score}<span>/10</span></div>
                            </div>
                            <div className="strengths">
                                <h3>Strengths of Your Explanation</h3>
                                <p>{feedback.strengths}</p>
                            </div>
                             <div className="improvements">
                                <h3>Areas for Improvement</h3>
                                <ul>
                                    {feedback.improvements.map((item, index) => <li key={index}>{item}</li>)}
                                </ul>
                            </div>
                            <div className="feedback-modal-actions">
                                <Button onClick={handleContinue} variant="secondary">Back to Topics</Button>
                            </div>
                        </div>
                    )}
                </Modal>
            </div>
        );
    }

    return (
        <div>
            <Button onClick={resetToTopicSelection} className="mb-8">
                &larr; Back to Topics
            </Button>
            <Card className="p-8 text-center">
                <h2 className="text-2xl font-bold text-rune-gold">Chapter Mastered! ★</h2>
                <p className="mt-4 text-purple-200/90 leading-relaxed">
                    You have solved every problem in this chapter. Your knowledge grows.
                    <br/>
                    Select another chapter to continue your journey.
                </p>
            </Card>
        </div>
    );
};

export default TimeWarpMode;