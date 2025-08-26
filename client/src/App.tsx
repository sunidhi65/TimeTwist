import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { View, User, ChatMessage, Branch, PeerSolution } from './types';
import { AIFeedback } from './../services/geminiService';
import HomePage from './components/views/Homepage';
import LoginPage from './components/views/LoginPage';
import RegisterPage from './components/views/RegisterPage';
import Dashboard from './components/views/Dashboard';
import TimeWarpMode from './components/views/TimeWarpMode';
import TimeTrialsMode from './components/views/TimeTrialsMode';
import LevelUpModal from './components/ui/LevelUpModal';
import LeaderboardPage from './components/views/LeaderboardPage';
import ProfilePage from './components/views/ProfilePage';
import CommunityPage from './components/views/CommunityPage';
import ResourcesPage from './components/views/ResourcesPage';
import SparkleBackground from './components/ui/SparkleBackground';
import BranchSelectionPage from './components/views/StreamSelectionPage';
import DuelOfWitsPage from './components/views/DuelOfWitsPage';
import ThemeToggleButton from './components/ui/ThemeToggleButton';
import MagicAnalysisPage from './components/views/MagicAnalysisPage';
import PeerReviewArena from './components/views/PeerReviewArena';
import { MOCK_USERS } from './data/mockUsers';
import { MOCK_MESSAGES } from './data/mockMessages';
import { MOCK_SOLUTIONS } from './data/mockSolutions';

const App: React.FC = () => {
    const [currentView, setCurrentView] = useState<View>(View.HOME);
    const [user, setUser] = useState<User | null>(null);
    const [allUsers, setAllUsers] = useState<User[]>(MOCK_USERS);
    const [messages, setMessages] = useState<ChatMessage[]>(MOCK_MESSAGES);
    const [solutions, setSolutions] = useState<PeerSolution[]>(MOCK_SOLUTIONS);
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
    const [feedbackHistory, setFeedbackHistory] = useState<AIFeedback[]>([]);
    const [theme, setTheme] = useState<'dark' | 'light'>(
        () => (localStorage.getItem('theme') as 'dark' | 'light') || 'dark'
    );

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleThemeToggle = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    const handleNavigate = useCallback((view: View) => {
        setCurrentView(view);
        window.scrollTo(0, 0);
    }, []);

    const handleLogin = useCallback((username: string) => {
        const existingUser = allUsers.find(u => u.username.toLowerCase() === username.toLowerCase());
        if (existingUser) {
            setUser(existingUser);
            if (existingUser.branch) {
                handleNavigate(View.DASHBOARD);
            }
        } else {
            alert("Wizard not found. Please register your Grimoire first.");
        }
    }, [allUsers, handleNavigate]);

    const handleRegister = useCallback((username: string, college: string) => {
        const existingUser = allUsers.find(u => u.username.toLowerCase() === username.toLowerCase());
        if (existingUser) {
            alert("A wizard with this name already exists. Please choose another name or login.");
            return;
        }

        const newUser: User = {
            id: `user-${Date.now()}`,
            username,
            college,
            avatar: `https://api.dicebear.com/8.x/pixel-art/svg?seed=${encodeURIComponent(username)}`,
            wizardPoints: 0,
            level: 1,
            completedChallengeIds: [],
            branch: null,
        };
        setAllUsers(prev => [...prev, newUser]);
        setUser(newUser);
    }, [allUsers]);

    const handleLogout = useCallback(() => {
        setUser(null);
        handleNavigate(View.HOME);
    }, [handleNavigate]);

    const handleSelectBranch = useCallback((branch: Branch) => {
        if (user) {
            setUser(prevUser => prevUser ? { ...prevUser, branch } : null);
            handleNavigate(View.DASHBOARD);
        }
    }, [user, handleNavigate]);

    const handleChangeBranch = useCallback(() => {
        if (user) {
            setUser(prevUser => prevUser ? { ...prevUser, branch: null } : null);
        }
    }, [user]);

    const handleFeedbackReceived = useCallback((points: number, feedback: AIFeedback, challengeId: string) => {
        if (!user) return;

        setFeedbackHistory(prev => [feedback, ...prev].slice(0, 10));

        const newPoints = user.wizardPoints + points;
        const oldLevel = user.level;
        const newLevel = Math.floor(newPoints / 1000) + 1;

        setUser(prevUser => {
            if (!prevUser) return null;
            return {
                ...prevUser,
                wizardPoints: newPoints,
                level: newLevel,
                completedChallengeIds: [...new Set([...prevUser.completedChallengeIds, challengeId])]
            };
        });

        if (newLevel > oldLevel) {
            setIsLevelUpModalOpen(true);
        }
    }, [user]);

    const handleSendMessage = useCallback((channel: string, text: string) => {
        if (!user) return;
        const newMessage: ChatMessage = {
            id: `msg-${Date.now()}`,
            channel,
            authorId: user.id,
            authorName: user.username,
            authorAvatar: user.avatar,
            text,
            timestamp: new Date().toISOString(),
        };
        setMessages(prev => [...prev, newMessage]);
    }, [user]);

    const handleDuelEnd = useCallback((points: number) => {
        if (!user) return;
        const newPoints = user.wizardPoints + points;
        const oldLevel = user.level;
        const newLevel = Math.floor(newPoints / 1000) + 1;
        
        setUser(prevUser => {
            if (!prevUser) return null;
            return {
                ...prevUser,
                wizardPoints: newPoints,
                level: newLevel,
            };
        });
        
        if (newLevel > oldLevel) {
            setIsLevelUpModalOpen(true);
        }
    }, [user]);

    const sortedUsers = useMemo(() => {
        return [...allUsers].sort((a, b) => b.wizardPoints - a.wizardPoints);
    }, [allUsers]);

    const renderContent = () => {
        if (!user) {
            switch (currentView) {
                case View.LOGIN:
                    return <LoginPage onLogin={handleLogin} onNavigate={handleNavigate} />;
                case View.REGISTER:
                    return <RegisterPage onRegister={handleRegister} onNavigate={handleNavigate} />;
                default:
                    return <HomePage onNavigate={handleNavigate} />;
            }
        }

        if (!user.branch) {
            return <BranchSelectionPage onSelectBranch={handleSelectBranch} />;
        }

        switch (currentView) {
            case View.DASHBOARD:
                return <Dashboard user={user} allUsers={sortedUsers} onNavigate={handleNavigate} onLogout={handleLogout} />;
            case View.TIME_WARP:
                return <TimeWarpMode user={user} onNavigate={handleNavigate} onFeedbackReceived={handleFeedbackReceived} />;
            case View.TIME_TRIALS:
                return <TimeTrialsMode user={user} onNavigate={handleNavigate} />;
            case View.LEADERBOARD:
                return <LeaderboardPage currentUser={user} allUsers={sortedUsers} onNavigate={handleNavigate} />;
            case View.PROFILE:
                return <ProfilePage user={user} onNavigate={handleNavigate} onChangeBranch={handleChangeBranch} />;
            case View.COMMUNITY:
                return <CommunityPage user={user} allUsers={sortedUsers} messages={messages} onNavigate={handleNavigate} onSendMessage={handleSendMessage} />;
            case View.RESOURCES:
                return <ResourcesPage user={user} onNavigate={handleNavigate} />;
            case View.DUEL_OF_WITS:
                return <DuelOfWitsPage user={user} allUsers={allUsers} onNavigate={handleNavigate} onDuelEnd={handleDuelEnd} />;
            case View.PEER_REVIEW_ARENA:
                return <PeerReviewArena onNavigate={handleNavigate} solutions={solutions} />;
            case View.MAGIC_ANALYSIS:
                return <MagicAnalysisPage onNavigate={handleNavigate} feedbackHistory={feedbackHistory} />;
            default:
                setCurrentView(View.DASHBOARD); // Fallback to dashboard
                return <Dashboard user={user} allUsers={sortedUsers} onNavigate={handleNavigate} onLogout={handleLogout} />;
        }
    };

    return (
        <div className="app-container">
            <SparkleBackground />
            <div className="theme-toggle-container">
                <ThemeToggleButton currentTheme={theme} onToggle={handleThemeToggle} />
            </div>
            <main className="main-content">
                {renderContent()}
            </main>
            {user && (
                <LevelUpModal
                    isOpen={isLevelUpModalOpen}
                    onClose={() => setIsLevelUpModalOpen(false)}
                    level={user.level}
                />
            )}
        </div>
    );
};

export default App;
