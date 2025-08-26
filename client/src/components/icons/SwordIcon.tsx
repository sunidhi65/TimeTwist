import React from 'react';

const SwordsIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m14.5 17.5 5-5" />
        <path d="m9.5 12.5-5-5" />
        <path d="M15 3 3 15" />
        <path d="m21 9-6 6" />
    </svg>
);
export default SwordsIcon;