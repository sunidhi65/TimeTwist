import React from 'react';
import { ProfilePageProps, View } from '../../types';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ProfilePage: React.FC<ProfilePageProps> = ({ user, onNavigate, onChangeBranch }) => {
    const wizardLevelProgress = (user.wizardPoints % 1000) / 10;

    return (
        <div>
            <Button onClick={() => onNavigate(View.DASHBOARD)} className="mb-8">
                &larr; Back to Dashboard
            </Button>
            <div className="text-center mb-10">
                <h1 className="text-5xl font-bold font-pixel text-rune-gold">Your Profile</h1>
                <p className="text-purple-300/80 mt-2">Your academic legend, etched in the records.</p>
            </div>

            <div className="profile-grid">
                {/* Main Profile Card */}
                <Card className="profile-main-card">
                    <div className="profile-avatar-wrapper">
                        <img src={user.avatar} alt="User Avatar" className="profile-avatar" />
                    </div>
                    <div className="profile-details">
                        <div className="profile-username-wrapper">
                            <h2 className="font-fantasy">{user.username}</h2>
                        </div>
                        <p className="level-text">Level {user.level} Engineer</p>
                        <p className="stream-text">{user.college}</p>
                        <p className="stream-text">{user.branch} Branch</p>
                    </div>
                </Card>

                {/* Stats & Actions Card */}
                <Card className="profile-stats-card">
                    <h3>Academic Stats</h3>
                    <div className="profile-stat-item">
                        <span className="label">Points (WP)</span>
                        <span className="value">{user.wizardPoints}</span>
                    </div>
                    <div className="profile-stat-item">
                        <span className="label">Problems Solved</span>
                        <span className="value">{user.completedChallengeIds.length}</span>
                    </div>
                    <div className="mt-4">
                        <p className="label mb-1">Progress to Level {user.level + 1}</p>
                        <div className="progress-bar-container">
                            <div
                                className="progress-bar-fill"
                                style={{ width: `${wizardLevelProgress}%` }}
                            ></div>
                        </div>
                    </div>

                    <div className="profile-actions">
                        <Button onClick={onChangeBranch} variant="secondary">
                            Change Branch
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ProfilePage;