import React, { useState } from 'react';
import { ProfilePageProps, View } from '../../types';
import Card from '../ui/Card';
import Button from '../ui/Button';
import RerollIcon from '../icons/RerollIcon';

const ProfilePage: React.FC<ProfilePageProps> = ({ user, onNavigate, onUpdateUser, onChangeBranch }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newUsername, setNewUsername] = useState(user.username);
    const [avatarSeed, setAvatarSeed] = useState(user.avatar.split('seed=')[1] || user.username);

    const newAvatarUrl = `https://api.dicebear.com/8.x/pixel-art/svg?seed=${avatarSeed}`;
    const wizardLevelProgress = (user.wizardPoints % 1000) / 10;

    const currentSeed = user.avatar.split('seed=')[1] || user.username;

    // ✅ Detect if username OR avatar actually changed
    const hasChanges =
        isEditing &&
        (newUsername.trim() !== user.username || avatarSeed !== currentSeed);

    const handleRerollAvatar = () => {
        setAvatarSeed(Math.random().toString(36).substring(7));
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setNewUsername(user.username);
        setAvatarSeed(user.avatar.split('seed=')[1] || user.username);
        setIsEditing(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const finalUsername = newUsername.trim();
        if (finalUsername && hasChanges) {
            onUpdateUser(finalUsername, newAvatarUrl);
            setIsEditing(false);
        }
    };

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
                    <form onSubmit={handleSubmit}>
                        <div className="profile-avatar-wrapper">
                            <img
                                src={isEditing ? newAvatarUrl : user.avatar}
                                alt="User Avatar"
                                className="profile-avatar"
                            />
                            {isEditing && (
                                <Button
                                    type="button"
                                    onClick={handleRerollAvatar}
                                    variant="secondary"
                                    className="reroll-btn btn-icon"
                                >
                                    <RerollIcon />
                                </Button>
                            )}
                        </div>

                        <div className="profile-details">
                            <div className="profile-username-wrapper">
                                {isEditing ? (
                                    <input
                                        id="username"
                                        type="text"
                                        value={newUsername}
                                        onChange={(e) => setNewUsername(e.target.value)}
                                        className="form-input username-input"
                                    />
                                ) : (
                                    <h2 className="font-fantasy">{user.username}</h2>
                                )}
                            </div>
                            <p className="level-text">Level {user.level} Engineer</p>
                            <p className="stream-text">{user.college}</p>
                            <p className="stream-text">{user.branch} Branch</p>
                        </div>

                        {isEditing && (
                            <div className="profile-edit-actions">
                                <Button type="button" onClick={handleCancel} variant="secondary">
                                    Cancel
                                </Button>
                                <Button type="submit" disabled={!newUsername.trim() || !hasChanges}>
                                    Save Changes
                                </Button>
                            </div>
                        )}
                    </form>
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
                        {!isEditing ? (
                            <>
                                <button onClick={handleEdit} className="edit-profile-button-large">
                                    <span className="edit-profile-button-text">
                                        Edit
                                        <br />
                                        Profile
                                    </span>
                                </button>
                                <Button onClick={onChangeBranch} variant="secondary">
                                    Change Branch
                                </Button>
                            </>
                        ) : (
                            <div className="text-center mt-8 p-4 bg-deep-scroll/50 rounded-lg">
                                <p className="font-bold text-white">Editing Mode</p>
                                <p className="text-sm text-purple-300/80 mt-1">
                                    Update your avatar and name in the main panel. Don&apos;t forget
                                    to save your changes!
                                </p>
                            </div>
                        )}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ProfilePage;
