import React, { useState, useRef, useEffect } from 'react';
import { CommunityPageProps, View, Subject } from '../../types';
import { BRANCH_SUBJECTS } from '../../data/challenges';
import Button from '../ui/Button';
import Card from '../ui/Card';
import CrystalBallIcon from '../icons/CrystalBallIcon';

const CommunityPage: React.FC<CommunityPageProps> = ({ user, messages, onNavigate, onSendMessage }) => {
    const subjectToChannelMap: Record<Subject, { id: string, name: string }> = {
        'Engineering Mathematics': { id: '#math-engineers', name: 'Math Engineers' },
        'Engineering Physics': { id: '#physics-phorum', name: 'Physics Phorum' },
        'Engineering Chemistry': { id: '#chemistry-corner', name: 'Chemistry Corner' },
        'Programming for Problem Solving': { id: '#c-programming', name: 'C Programming' },
        'Data Structures & Algorithms': { id: '#dsa-devs', name: 'DSA Devs' },
        'Operating Systems': { id: '#os-wizards', name: 'OS Wizards' },
        'DBMS': { id: '#database-gurus', name: 'Database Gurus' },
        'Digital Logic Design': { id: '#dld-discussion', name: 'DLD Discussion' },
        'Thermodynamics': { id: '#thermo-talk', name: 'Thermo Talk' },
        'Fluid Mechanics': { id: '#fluid-squad', name: 'Fluid Squad' },
        'Strength of Materials': { id: '#som-squad', name: 'SOM Squad' },
        'Structural Analysis': { id: '#structures-hub', name: 'Structures Hub' },
        'Surveying': { id: '#survey-squad', name: 'Survey Squad' },
    };

    const availableSubjects = BRANCH_SUBJECTS[user.branch!];
    const streamChannels = availableSubjects
        .map(subject => subjectToChannelMap[subject])
        .filter(Boolean);

    const CHANNELS = [
        { id: '#general-discussion', name: 'General Discussion' },
        ...streamChannels
    ];

    const [activeChannel, setActiveChannel] = useState(CHANNELS[0].id);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const filteredMessages = messages.filter(m => m.channel === activeChannel);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [filteredMessages]);
    
    // Switch channel if the active one is no longer available (e.g., after branch change)
    useEffect(() => {
        const isChannelAvailable = CHANNELS.some(c => c.id === activeChannel);
        if (!isChannelAvailable) {
            setActiveChannel(CHANNELS[0].id);
        }
    }, [CHANNELS, activeChannel]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (newMessage.trim()) {
            onSendMessage(activeChannel, newMessage.trim());
            setNewMessage('');
        }
    };

    return (
        <div>
            <Button onClick={() => onNavigate(View.DASHBOARD)} className="mb-8">
                &larr; Back to Dashboard
            </Button>
            <div className="text-center mb-10">
                <h1 className="text-5xl font-bold font-pixel text-rune-gold">Student Concord</h1>
                <p className="text-purple-300/80 mt-2">Share wisdom and seek council with your peers.</p>
            </div>

            <div className="community-grid">
                {/* Channels List */}
                <Card className="channels-panel">
                    <h2>Channels</h2>
                    <ul className="channels-list">
                        {CHANNELS.map(channel => (
                            <li key={channel.id}>
                                <button
                                    onClick={() => setActiveChannel(channel.id)}
                                    className={`channel-btn ${activeChannel === channel.id ? 'active' : ''}`}
                                >
                                    <CrystalBallIcon/>
                                    {channel.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </Card>

                {/* Chat Area */}
                <Card className="chat-panel">
                    <div className="message-list">
                        {filteredMessages.map(msg => (
                             <div key={msg.id} className={`message-item ${msg.authorId === user.id ? 'is-user' : ''}`}>
                                {msg.authorId !== user.id && (
                                     <img src={msg.authorAvatar} alt={msg.authorName} />
                                )}
                                <div className="message-bubble-container">
                                    <p className="message-author">{msg.authorName}</p>
                                    <div className="message-bubble">
                                        <p className="font-sans">{msg.text}</p>
                                    </div>
                                </div>
                                 {msg.authorId === user.id && (
                                     <img src={msg.authorAvatar} alt={msg.authorName} />
                                )}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="message-form-container">
                        <form onSubmit={handleSend} className="message-form">
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder={`Message in ${activeChannel}...`}
                                className="message-input form-input font-sans"
                            />
                            <Button type="submit" disabled={!newMessage.trim()}>Send</Button>
                        </form>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default CommunityPage;