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

const Dashboard: React.FC<DashboardProps> = ({ user, allUsers, onNavigate, onLogout }) => {
    const wizardLevelProgress = (user.wizardPoints % 1000) / 10;
    const topWizards = allUsers.slice(0, 3);

    return (
        <div className="p-6">
            {/* Header */}
            <header className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <img src={user.avatar} alt="User Avatar" className="w-12 h-12 rounded-full border-2 border-rune-gold" />
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-bold text-white">{user.username}</h1>
                            <button onClick={() => onNavigate(View.PROFILE)} className="p-1 hover:text-rune-gold">
                                <EditIcon />
                            </button>
                        </div>
                        <p className="text-purple-300">Level {user.level} Sorcerer</p>
                    </div>
                </div>
                <Button onClick={onLogout} variant="secondary">Logout</Button>
            </header>

            {/* Stats + Leaderboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {/* Stats Card */}
                <Card>
                    <h2 className="text-xl font-bold text-rune-gold mb-4">Wizarding Stats</h2>
                    <div className="space-y-4">
                        <div>
                           <p>Wizard Points (WP): <span className="font-bold">{user.wizardPoints}</span></p>
                        </div>
                        <div>
                            <p>Progress to Level {user.level + 1}</p>
                            <div className="w-full h-3 bg-purple-900 rounded-md overflow-hidden mt-1">
                                <div
                                    className="h-full bg-rune-gold transition-all"
                                    style={{ width: `${wizardLevelProgress}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </Card>
                
                {/* Leaderboard Preview */}
                <Card>
                     <h2 className="text-xl font-bold text-rune-gold mb-4">Hall of Fame</h2>
                     <div className="space-y-3">
                        {topWizards.map((wizard, index) => (
                             <div key={wizard.id} className="flex justify-between items-center">
                                 <div className="flex items-center gap-2">
                                     <span className="font-bold">{index + 1}.</span>
                                     <img src={wizard.avatar} alt={wizard.username} className="w-8 h-8 rounded-full" />
                                     <span>{wizard.username}</span>
                                 </div>
                                 <div className="text-right">
                                     <p className="font-semibold">{wizard.wizardPoints} WP</p>
                                     <p className="text-sm text-purple-300">Level {wizard.level}</p>
                                 </div>
                             </div>
                        ))}
                     </div>
                     <div className="text-center mt-4">
                        <Button onClick={() => onNavigate(View.LEADERBOARD)} variant="secondary">View Full Leaderboard</Button>
                     </div>
                </Card>
            </div>

            {/* Modes Title */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold font-pixel text-rune-gold">Choose Your Path</h2>
                <p className="text-purple-300/80 mt-2">The threads of fate await your command.</p>
            </div>
            
            {/* Modes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        className={`flex flex-col items-center text-center p-6 cursor-pointer hover:shadow-xl transition-transform transform hover:scale-105 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={!disabled ? onClick : undefined}
    >
        <div className="mb-4">{icon}</div>
        <h3 className="font-pixel text-lg text-rune-gold mb-2">{title}</h3>
        <p className="text-sm text-purple-200">{description}</p>
        {disabled && <p className="mt-2 text-xs text-purple-400">(Complete Time Warp challenges to unlock)</p>}
    </Card>
);

export default Dashboard;
