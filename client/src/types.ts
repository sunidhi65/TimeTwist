
import type { AIFeedback } from "./services/geminiService.ts";
export type { AIFeedback };

export enum View {
  HOME,
  LOGIN,
  REGISTER,
  STREAM_SELECTION,
  DASHBOARD,
  TIME_WARP,
  PEER_REVIEW,
  TIME_TRIALS,
  LEADERBOARD,
  PROFILE,
  MAGIC_ANALYSIS,
  COMMUNITY,
  RESOURCES,
  DUEL_ARENA
}

export type Stream = 'Non-Medical' | 'Medical' | 'Commerce' | 'Arts';

export type Subject = 'Math' | 'Physics' | 'Chemistry' | 'CS' | 'Biology' | 'Economics' | 'Business Studies' | 'Accountancy' | 'History' | 'Geography' | 'Political Science';

export interface User {
  id: string; // Unique ID for each user
  username: string;
  avatar: string;
  wizardPoints: number;
  level: number;
  completedChallengeIds: string[];
  stream: Stream | null;
}

export interface Challenge {
  id:string;
  answer: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface Topic {
    id: string;
    name: string;
    description: string;
    challenges: Challenge[];
}

export interface PeerSolution {
  id: string;
  author: string;
  authorAvatar: string;
  challengeId: string;
  challengeAnswer: string;
  explanation: string;
  rating: number;
  comments: number;
}

export interface ChatMessage {
    id: string;
    channel: string;
    authorId: string;
    authorName: string;
    authorAvatar: string;
    text: string;
    timestamp: string;
}

export interface Resource {
    title: string;
    description: string;
    url: string;
    type: 'video' | 'article' | 'book' | 'interactive';
}

export interface ResourceCategory {
    name: string;
    resources: Resource[];
}

// Props for views that can award points and submit solutions
export interface TimeWarpModeProps {
    user: User;
    onNavigate: (view: View) => void;
    onFeedbackReceived: (points: number, feedback: AIFeedback, challengeId: string) => void;
    onSolutionSubmit: (solution: Omit<PeerSolution, 'id' | 'rating' | 'comments'>) => void;
}

export interface TimeTrialsModeProps {
    user: User;
    onNavigate: (view: View) => void;
}

export interface StreamSelectionPageProps {
    onSelectStream: (stream: Stream) => void;
}

// Props for the new Duel Arena mode
export interface DuelArenaModeProps {
    user: User;
    allUsers: User[];
    onNavigate: (view: View) => void;
    onDuelWon: (points: number) => void;
}


// Props for peer review to display solutions
export interface PeerReviewArenaProps {
    user: User;
    onNavigate: (view: View) => void;
    solutions: PeerSolution[];
}

export interface DashboardProps {
    user: User;
    allUsers: User[];
    onNavigate: (view: View) => void;
    onLogout: () => void;
    hasFeedbackHistory: boolean;
    theme: 'dark' | 'light';
    onToggleTheme: () => void;
}

export interface LeaderboardPageProps {
    currentUser: User;
    allUsers: User[];
    onNavigate: (view: View) => void;
}

export interface ProfilePageProps {
    user: User;
    onNavigate: (view: View) => void;
    onUpdateUser: (newUsername: string, newAvatar: string) => void;
}

export interface MagicAnalysisPageProps {
    user: User;
    onNavigate: (view: View) => void;
    feedbackHistory: AIFeedback[];
}

export interface CommunityPageProps {
    user: User;
    allUsers: User[];
    messages: ChatMessage[];
    onNavigate: (view: View) => void;
    onSendMessage: (channel: string, text: string) => void;
}

export interface ResourcesPageProps {
    user: User;
    onNavigate: (view: View) => void;
}