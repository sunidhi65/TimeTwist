import React from 'react';
import { PeerReviewArenaProps, PeerSolution, View } from '../../types';
import Button from '../ui/Button';
import Card from '../ui/Card';

const PeerReviewArena: React.FC<PeerReviewArenaProps> = ({ onNavigate, solutions }) => {

    return (
        <div>
            <Button onClick={() => onNavigate(View.DASHBOARD)} className="mb-8">
                &larr; Back to Dashboard
            </Button>

            <div className="text-center mb-10">
                <h1 className="text-5xl font-bold font-pixel text-rune-gold">Peer-Review Arena</h1>
                <p className="text-purple-300/80 mt-2">Study the grimoires of other powerful wizards.</p>
            </div>

            <div className="solution-list">
                {solutions.length > 0 ? (
                    solutions.map(solution => (
                        <Card key={solution.id} className="solution-card animate-fade-in">
                            <div className="solution-card-header">
                                <div className="solution-author">
                                    <p className="from-text">From the grimoire of:</p>
                                    <div className="author-info">
                                        <img src={solution.authorAvatar} alt={solution.author} />
                                        <span className="author-name">{solution.author}</span>
                                    </div>
                                </div>
                                <div className="solution-rating">
                                    <div className="rating-value">{solution.rating.toFixed(1)} ★</div>
                                    <div className="comments-count">{solution.comments} Comments</div>
                                </div>
                            </div>

                            <hr className="solution-divider" />

                            <div className="solution-content">
                                <p className="label">Paradox Solved:</p>
                                <p className="answer">"{solution.challengeAnswer}"</p>
                                
                                <p className="label">Explanation Weaved:</p>
                                <p className="explanation font-sans">{solution.explanation}</p>
                            </div>
                            
                            <div className="solution-actions">
                                <Button onClick={() => alert('Rating functionality coming soon!')} variant="secondary">Rate This Logic</Button>
                            </div>
                        </Card>
                    ))
                ) : (
                    <Card className="p-8 text-center">
                        <h2 className="text-2xl font-bold text-rune-gold">The Arena is Silent</h2>
                        <p className="mt-4 text-purple-200/90 leading-relaxed">
                            No solutions have been submitted for review yet. <br/>
                            Complete a challenge in Time Warp Mode and share your logic to be judged by your peers!
                        </p>
                    </Card>
                )}
            </div>
        </div>
    );
};

export default PeerReviewArena;