import React from 'react';
import { View } from '../../types';
import Button from '../ui/Button';

interface HomePageProps {
  onNavigate: (view: View) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title font-pixel animate-fade-in">
          TimeTwist
        </h1>
        <h2 className="home-subtitle font-fantasy animate-fade-in" style={{ animationDelay: '0.2s' }}>
          The Wizard's Paradox
        </h2>
        <p className="home-description animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Welcome, apprentice, to a realm where the end is just the beginning.
          You are given the answer—your quest is to unravel the logic, discover the original question, and prove your mastery of the arcane arts.
        </p>
        <div className="home-actions animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button onClick={() => onNavigate(View.LOGIN)} variant="primary" className="text-lg">
            Enter the Realm (Login)
          </Button>
          <Button onClick={() => onNavigate(View.REGISTER)} variant="secondary" className="text-lg">
            Forge a New Legend (Register)
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;