import React from 'react';
import { DashboardProps, View } from '../../types';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SpellBookIcon from '../icons/SpellBookIcon';
import HourglassIcon from '../icons/HourglassIcon';
import EditIcon from '../icons/EditIcon';
import CommunityIcon from '../icons/CommunityIcon';
import LibraryIcon from '../icons/LibraryIcon';
import SwordsIcon from '../icons/SwordIcon';
import ThemeToggleButton from '../ui/ThemeToggleButton';

const Dashboard: React.FC<DashboardProps> = ({ user, allUsers, onNavigate, onLogout, theme, onThemeToggle }) => {
    const wizardLevelProgress = (user.wizardPoints % 1000) / 10;
    const topWizards = allUsers.slice(0, 3);

    return (
        <div>
            <header className="dashboard-header">
                <div className="dashboard-user-info">
                    <img src={user.avatar} alt="User Avatar" />
                    <div>
                        <div className="flex items-center gap-2">
                            <h1>{user.username}</h1>
                            <button onClick={() => onNavigate(View.PROFILE)} className="edit-btn">
                                <EditIcon />
                            </button>
                        </div>
                        <p className="level-text">Level {user.level} Sorcerer</p>
                    </div>
                </div>
                <div className="dashboard-header-actions">
                    <Button onClick={onLogout} variant="secondary">Logout</Button>
                    <ThemeToggleButton currentTheme={theme} onToggle={onThemeToggle} />
                </div>
            </header>

            <div className="dashboard-grid">
                {/* Stats Card */}
                <Card className="dashboard-stats-card">
                    <h2 className="text-xl">Wizarding Stats</h2>
                    <div>
                        <div className="stat-item">
                           <p>Wizard Points (WP): <span>{user.wizardPoints}</span></p>
                        </div>
                        <div className="stat-item">
                            <p>Progress to Level {user.level + 1}</p>
                            <div className="progress-bar-container">
                                <div
                                    className="progress-bar-fill"
                                    style={{ width: `${wizardLevelProgress}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </Card>
                
                {/* Leaderboard Preview Card */}
                <Card className="dashboard-leaderboard-card">
                     <h2 className="text-xl">Hall of Fame</h2>
                     <div>
                        {topWizards.map((wizard, index) => (
                             <div key={wizard.id} className="leaderboard-item">
                                 <div className="user-details">
                                     <span className="rank">{index + 1}.</span>
                                     <img src={wizard.avatar} alt={wizard.username}/>
                                     <span className="username">{wizard.username}</span>
                                 </div>
                                 <div className="user-stats">
                                     <p className="points">{wizard.wizardPoints} WP</p>
                                     <p className="level">Level {wizard.level}</p>
                                 </div>
                             </div>
                        ))}
                     </div>
                     <div className="text-center mt-4">
                        <Button onClick={() => onNavigate(View.LEADERBOARD)} variant="secondary">View Full Leaderboard</Button>
                     </div>
                </Card>
            </div>


            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold">Choose Your Path</h2>
                <p className="text-purple-300/80 mt-2">The threads of fate await your command.</p>
            </div>
            
            <div className="dashboard-modes-grid">
                <ModeCard
                    icon={<SpellBookIcon />}
                    title="Time Warp Mode"
                    description="Unravel the past. Explain how the conclusion came to be."
                    onClick={() => onNavigate(View.TIME_WARP)}
                />
                <ModeCard
                    icon={<HourglassIcon />}
                    title="Time Trials"
                    description="Race against the clock to forge your explanation under pressure."
                    onClick={() => onNavigate(View.TIME_TRIALS)}
                />
                 <ModeCard
                    icon={<SwordsIcon />}
                    title="Duel of Wits"
                    description="Challenge another wizard to a real-time battle of logic and speed."
                    onClick={() => onNavigate(View.DUEL_OF_WITS)}
                />
                <ModeCard
                    icon={<CommunityIcon />}
                    title="Community Hall"
                    description="Consult with peers, discuss paradoxes, and form study groups."
                    onClick={() => onNavigate(View.COMMUNITY)}
                />
                <ModeCard
                    icon={<LibraryIcon />}
                    title="Wizard's Library"
                    description="Consult ancient texts, formulas, and guides for your studies."
                    onClick={() => onNavigate(View.RESOURCES)}
                />
            </div>
        </div>
    );
};

interface ModeCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    onClick: () => void;
    disabled?: boolean;
}

const ModeCard: React.FC<ModeCardProps> = ({ icon, title, description, onClick, disabled = false }) => (
    <Card 
        className={`mode-card card-hover-glow-purple ${disabled ? 'disabled' : ''}`}
        onClick={!disabled ? onClick : undefined}
    >
        <div className="icon">{icon}</div>
        <h3 className="font-pixel">{title}</h3>
        <p>{description}</p>
        {disabled && <p className="unlock-text">(Complete Time Warp challenges to unlock)</p>}
    </Card>
);

export default Dashboard;