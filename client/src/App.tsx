import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { View, User, ChatMessage, Branch } from './types';
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
import ChatbotPage from './components/views/ChatbotPage';
import { MOCK_USERS } from './data/mockUsers';
import { MOCK_MESSAGES } from './data/mockMessages';

const App: React.FC = () => {
    const [currentView, setCurrentView] = useState<View>(View.HOME);
    const [user, setUser] = useState<User | null>(null);
    const [allUsers, setAllUsers] = useState<User[]>(MOCK_USERS);
    const [messages, setMessages] = useState<ChatMessage[]>(MOCK_MESSAGES);
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

    const handleLogin = useCallback((username: string) => {
        const existingUser = allUsers.find(u => u.username.toLowerCase() === username.toLowerCase());
        if (existingUser) {
            setUser(existingUser);
        } else {
            // Create a new user if they don't exist, even on the login page
            setUser({
                id: `user-${Date.now()}`,
                username,
                college: 'TimeTwist University', // Default college
                avatar: `https://api.dicebear.com/8.x/pixel-art/svg?seed=${username}`,
                wizardPoints: 50,
                level: 1,
                completedChallengeIds: [],
                branch: null,
            });
        }
        setCurrentView(View.DASHBOARD);
    }, [allUsers]);

    const handleRegister = useCallback((username: string, college: string) => {
        const newUser: User = {
            id: `user-${Date.now()}`,
            username,
            college,
            avatar: `https://api.dicebear.com/8.x/pixel-art/svg?seed=${username}`,
            wizardPoints: 0,
            level: 1,
            completedChallengeIds: [],
            branch: null,
        };
        setUser(newUser);
        setAllUsers(prev => [...prev, newUser].sort((a,b) => b.wizardPoints - a.wizardPoints));
        setCurrentView(View.DASHBOARD);
    }, []);
    
    const handleUpdateUser = useCallback((newUsername: string, newAvatar: string) => {
        if (!user) return;

        const updatedUser: User = {
            ...user,
            username: newUsername,
            avatar: newAvatar,
        };
        setUser(updatedUser);

        setAllUsers(prevUsers => {
            const newUsers = prevUsers.map(u => u.id === user.id ? updatedUser : u);
            return newUsers.sort((a, b) => b.wizardPoints - a.wizardPoints);
        });

        navigateTo(View.DASHBOARD);
    }, [user]);

    const handleFeedback = useCallback((points: number, feedback: AIFeedback, challengeId: string) => {
        if (!user) return;

        const oldPoints = user.wizardPoints;
        const newPoints = oldPoints + points;
        const oldLevel = user.level;
        const newLevel = Math.floor(newPoints / 1000) + 1;

        const updatedCompletedIds = (feedback.score > 6 && !user.completedChallengeIds.includes(challengeId))
            ? [...user.completedChallengeIds, challengeId]
            : user.completedChallengeIds;

        const updatedUser: User = { 
            ...user, 
            wizardPoints: newPoints, 
            level: newLevel,
            completedChallengeIds: updatedCompletedIds,
        };
        
        setUser(updatedUser);
        
        setAllUsers(prev => prev.map(u => u.id === user.id ? updatedUser : u).sort((a, b) => b.wizardPoints - a.wizardPoints));
        
        if (newLevel > oldLevel) {
            setIsLevelUpModalOpen(true);
        }

        if (feedback.score > 0) {
            setFeedbackHistory(prev => [feedback, ...prev].slice(0, 10));
        }
    }, [user]);

    const handleDuelEnd = useCallback((points: number) => {
        if (!user) return;
        
        const oldPoints = user.wizardPoints;
        const newPoints = oldPoints + points;
        const oldLevel = user.level;
        const newLevel = Math.floor(newPoints / 1000) + 1;

        const updatedUser: User = { 
            ...user, 
            wizardPoints: newPoints, 
            level: newLevel,
        };
        
        setUser(updatedUser);
        
        setAllUsers(prev => prev.map(u => u.id === user.id ? updatedUser : u).sort((a, b) => b.wizardPoints - a.wizardPoints));
        
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

    const handleLogout = useCallback(() => {
        setUser(null);
        setCurrentView(View.HOME);
    }, []);

    const navigateTo = useCallback((view: View) => {
        setCurrentView(view);
    }, []);
    
    const handleSetBranch = useCallback((branch: Branch) => {
        if (!user) return;
        const updatedUser = { ...user, branch };
        setUser(updatedUser);
        setAllUsers(prev => prev.map(u => u.id === user.id ? updatedUser : u));
    }, [user]);
    
    const handleChangeBranch = useCallback(() => {
        if (!user) return;
        setUser({ ...user, branch: null });
    }, [user]);

    const renderView = () => {
        if (!user) {
             switch (currentView) {
                case View.LOGIN:
                    return <LoginPage onLogin={handleLogin} onNavigate={navigateTo} />;
                case View.REGISTER:
                    return <RegisterPage onRegister={handleRegister} onNavigate={navigateTo} />;
                default:
                    return <HomePage onNavigate={navigateTo} />;
            }
        }
        
        if (!user.branch) {
            return <BranchSelectionPage onSelectBranch={handleSetBranch} />;
        }

        switch (currentView) {
            case View.DASHBOARD:
                return <Dashboard user={user} allUsers={allUsers} onNavigate={navigateTo} onLogout={handleLogout} theme={theme} onThemeToggle={handleThemeToggle} />;
            case View.TIME_WARP:
                return <TimeWarpMode user={user} onNavigate={navigateTo} onFeedbackReceived={handleFeedback} />;
            case View.TIME_TRIALS:
                return <TimeTrialsMode user={user} onNavigate={navigateTo} />;
            case View.DUEL_OF_WITS:
                return <DuelOfWitsPage user={user} allUsers={allUsers} onNavigate={navigateTo} onDuelEnd={handleDuelEnd} />;
            case View.LEADERBOARD:
                return <LeaderboardPage currentUser={user} allUsers={allUsers} onNavigate={navigateTo} />;
            case View.PROFILE:
                return <ProfilePage user={user} onNavigate={navigateTo} onUpdateUser={handleUpdateUser} onChangeBranch={handleChangeBranch} />;
            case View.COMMUNITY:
                return <CommunityPage user={user} allUsers={allUsers} messages={messages} onNavigate={navigateTo} onSendMessage={handleSendMessage} />;
            case View.RESOURCES:
                return <ResourcesPage user={user} onNavigate={navigateTo} />;
            case View.CHATBOT:
                return <ChatbotPage user={user} onNavigate={navigateTo} />;
            default:
                return <Dashboard user={user} allUsers={allUsers} onNavigate={navigateTo} onLogout={handleLogout} theme={theme} onThemeToggle={handleThemeToggle} />;
        }
    };

    const sortedUsers = useMemo(() => {
        return [...allUsers].sort((a, b) => b.wizardPoints - a.wizardPoints);
    }, [allUsers]);

    return (
        <main>
            <SparkleBackground />
            <div className="container">
                {renderView()}
                 {user && (
                    <LevelUpModal 
                        isOpen={isLevelUpModalOpen}
                        onClose={() => setIsLevelUpModalOpen(false)}
                        level={user.level}
                    />
                )}
            </div>
        </main>
    );
};

export default App;
