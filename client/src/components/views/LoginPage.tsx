import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { View } from '../../types';

interface LoginPageProps {
    onLogin: (username: string) => void;
    onNavigate: (view: View) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onNavigate }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username.trim()) {
            onLogin(username.trim());
        }
    };

    return (
        <div className="auth-page-container">
            <div className="auth-content">
                <h1 className="auth-title font-pixel" onClick={() => onNavigate(View.HOME)}>
                    TimeTwist
                </h1>
                <h2 className="auth-subtitle font-fantasy">
                    The Wizard's Paradox
                </h2>
                <Card className="auth-card">
                    <form onSubmit={handleSubmit}>
                        <h3>
                            Enter the Realm
                        </h3>
                        <div className="auth-form-group">
                            <label htmlFor="username" className="form-label">
                                Wizard's Name
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="e.g., Albus"
                                className="form-input"
                            />
                        </div>
                        <Button type="submit" className="w-full" disabled={!username.trim()}>
                            Begin Quest
                        </Button>
                    </form>
                     <p className="auth-switch-text">
                        New apprentice?{' '}
                        <button onClick={() => onNavigate(View.REGISTER)}>
                            Register your Grimoire
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

export default LoginPage;