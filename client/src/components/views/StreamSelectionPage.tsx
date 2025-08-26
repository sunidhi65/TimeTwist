import React from 'react';
import { Branch, BranchSelectionPageProps } from '../../types';
import Card from '../ui/Card';
import SpellBookIcon from '../icons/SpellBookIcon'; // Reused for CSE (coding)
import RerollIcon from '../icons/RerollIcon'; // Reused for Mechanical (gears)
import LibraryIcon from '../icons/LibraryIcon'; // Reused for Civil (structures)
import CrystalBallIcon from '../icons/CrystalBallIcon'; // Reused for ECE (signals/waves)

const branchOptions: { branch: Branch; icon: React.ReactNode; description: string }[] = [
    {
        branch: 'CSE',
        icon: <SpellBookIcon />,
        description: 'Master algorithms, data structures, and the art of computation.'
    },
    {
        branch: 'ECE',
        icon: <CrystalBallIcon />,
        description: 'Delve into circuits, signals, and communication systems.'
    },
    {
        branch: 'Mechanical',
        icon: <RerollIcon />,
        description: 'Command the principles of thermodynamics, fluids, and machine design.'
    },
    {
        branch: 'Civil',
        icon: <LibraryIcon />,
        description: 'Explore the foundations of structural analysis and infrastructure.'
    },
];

const BranchSelectionPage: React.FC<BranchSelectionPageProps> = ({ onSelectBranch }) => {
    return (
        <div className="auth-page-container">
            <div className="auth-content">
                <h1 className="auth-title font-pixel">TimeTwist</h1>
                <h2 className="auth-subtitle font-fantasy mb-10">
                    Choose Your Engineering Branch
                </h2>
                <div className="dashboard-modes-grid md:grid-cols-2">
                    {branchOptions.map(({ branch, icon, description }) => (
                         <Card 
                            key={branch}
                            className="mode-card card-hover-glow-purple"
                            onClick={() => onSelectBranch(branch)}
                        >
                            <div className="icon">{icon}</div>
                            <h3 className="font-pixel">{branch}</h3>
                            <p>{description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BranchSelectionPage;