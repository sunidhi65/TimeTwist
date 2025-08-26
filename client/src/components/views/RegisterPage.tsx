import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { View } from '../../types';

interface RegisterPageProps {
    onRegister: (username: string, college: string) => void;
    onNavigate: (view: View) => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ onRegister, onNavigate }) => {
    const [username, setUsername] = useState('');
    const [college, setCollege] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username.trim() && college.trim()) {
            onRegister(username.trim(), college.trim());
        }
    };

    return (
        <div className="auth-page-container">
            <div className="auth-content">
                <h1 className="auth-title font-pixel" onClick={() => onNavigate(View.HOME)}>
                    TimeTwist
                </h1>
                <h2 className="auth-subtitle font-fantasy">
                    The Engineer's Paradox
                </h2>
                <Card className="auth-card">
                    <form onSubmit={handleSubmit}>
                        <h3>
                            Enroll in the Academy
                        </h3>
                        <div className="auth-form-group">
                            <label htmlFor="username" className="form-label">
                                Your Name
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="e.g., Ada Lovelace"
                                className="form-input"
                                required
                            />
                        </div>
                         <div className="auth-form-group">
                            <label htmlFor="college" className="form-label">
                                College Name
                            </label>
                            <input
                                id="college"
                                type="text"
                                value={college}
                                onChange={(e) => setCollege(e.target.value)}
                                placeholder="e.g., BITS Pilani"
                                className="form-input"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full" disabled={!username.trim() || !college.trim()}>
                            Begin Your B.Tech Journey
                        </Button>
                    </form>
                     <p className="auth-switch-text">
                        Already Enrolled?{' '}
                        <button onClick={() => onNavigate(View.LOGIN)}>
                            Enter the Campus
                        </button>
                    </p>
                </Card>
                 <p className="auth-return-link font-fantasy">
                    <button onClick={() => onNavigate(View.HOME)}>&larr; Return to Portal</button>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;