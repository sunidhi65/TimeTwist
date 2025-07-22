
import React from 'react';
import { LeaderboardPageProps, View } from '../../types';
import Button from '../ui/Button';
import Card from '../ui/Card';

const LeaderboardPage: React.FC<LeaderboardPageProps> = ({ currentUser, allUsers, onNavigate }) => {

    return (
        <div>
            <Button onClick={() => onNavigate(View.DASHBOARD)} className="mb-8">
                &larr; Back to Dashboard
            </Button>

            <div className="text-center mb-10">
                <h1 className="font-pixel" style={{fontSize: '3rem', color: 'var(--rune-gold)'}}>Leaderboard</h1>
                <p style={{color: 'rgba(216, 180, 254, 0.8)', marginTop: '0.5rem'}}>The most powerful wizards in the realm.</p>
            </div>

            <Card style={{padding: '0.5rem'}}>
                <div className="leaderboard-list">
                    {allUsers.map((user, index) => {
                        const isCurrentUser = user.id === currentUser.id;
                        return (
                             <div 
                                key={user.id} 
                                className={`leaderboard-list-item ${isCurrentUser ? 'current-user' : ''}`}
                            >
                                <div className="leaderboard-user-info">
                                    <span className="leaderboard-rank">{index + 1}</span>
                                    <img src={user.avatar} alt={user.username}/>
                                    <div>
                                        <p className="username">{user.username}</p>
                                        <p className="level">Level {user.level}</p>
                                    </div>
                                </div>
                                <div className="leaderboard-points">
                                    <p className="points">{user.wizardPoints} WP</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Card>
        </div>
    );
};

export default LeaderboardPage;