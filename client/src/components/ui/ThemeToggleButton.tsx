import React from 'react';
import SunIcon from '../icons/SunIcon';
import MoonIcon from '../icons/MoonIcon';

interface ThemeToggleButtonProps {
    currentTheme: 'dark' | 'light';
    onToggle: () => void;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ currentTheme, onToggle }) => {
    return (
        <button
            onClick={onToggle}
            className="theme-toggle-btn"
            aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {currentTheme === 'dark' ? (
                <SunIcon style={{width: '1.5rem', height: '1.5rem'}} />
            ) : (
                <MoonIcon style={{width: '1.5rem', height: '1.5rem'}} />
            )}
        </button>
    );
};

export default ThemeToggleButton;