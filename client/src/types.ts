import { AIFeedback } from "./../services/geminiService";

export enum View {
  HOME,
  LOGIN,
  REGISTER,
  DASHBOARD,
  TIME_WARP,
  TIME_TRIALS,
  LEADERBOARD,
  PROFILE,
  COMMUNITY,
  RESOURCES,
  DUEL_OF_WITS,
  PEER_REVIEW_ARENA,
  MAGIC_ANALYSIS,
}

export type Branch = 'CSE' | 'ECE' | 'Mechanical' | 'Civil';

export type Subject = 
    | 'Engineering Mathematics' 
    | 'Engineering Physics' 
    | 'Engineering Chemistry' 
    | 'Programming for Problem Solving' 
    | 'Data Structures & Algorithms' 
    | 'Operating Systems' 
    | 'DBMS' 
    | 'Digital Logic Design' 
    | 'Thermodynamics' 
    | 'Fluid Mechanics' 
    | 'Strength of Materials' 
    | 'Structural Analysis' 
    | 'Surveying';

export interface User {
  id: string; // Unique ID for each user
  username: string;
  college: string;
  avatar: string;
  wizardPoints: number;
  level: number;
  completedChallengeIds: string[];
  branch: Branch | null;
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

export interface SamplePaper {
    id: string;
    title: string;
    year: number;
    url: string;
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

// Props for views that can award points and submit solutions
export interface TimeWarpModeProps {
    user: User;
    onNavigate: (view: View) => void;
    onFeedbackReceived: (points: number, feedback: AIFeedback, challengeId: string) => void;
}

export interface DashboardProps {
    user: User;
    allUsers: User[];
    onNavigate: (view: View) => void;
    onLogout: () => void;
}

export interface LeaderboardPageProps {
    currentUser: User;
    allUsers: User[];
    onNavigate: (view: View) => void;
}

export interface ProfilePageProps {
    user: User;
    onNavigate: (view: View) => void;
    onChangeBranch: () => void;
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

export interface BranchSelectionPageProps {
    onSelectBranch: (branch: Branch) => void;
}

export interface DuelOfWitsPageProps {
    user: User;
    allUsers: User[];
    onNavigate: (view: View) => void;
    onDuelEnd: (points: number) => void;
}

export interface PeerReviewArenaProps {
    onNavigate: (view: View) => void;
    solutions: PeerSolution[];
}

export interface MagicAnalysisPageProps {
    onNavigate: (view: View) => void;
    feedbackHistory: AIFeedback[];
}