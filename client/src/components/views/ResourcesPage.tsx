import React, { useState } from 'react';
import { ResourcesPageProps, Subject, View, Resource } from '../../types';
import { BRANCH_SUBJECTS } from '../../data/challenges';
import { RESOURCES_DATA } from '../../data/resources';
import Button from '../ui/Button';
import Card from '../ui/Card';
import VideoIcon from '../icons/VideoIcon';
import ArticleIcon from '../icons/ArticleIcon';
import BookIcon from '../icons/BookIcon';
import InteractiveIcon from '../icons/InteractiveIcon';


const ResourceTypeIcon: React.FC<{ type: Resource['type'] }> = ({ type }) => {
    switch (type) {
        case 'video': return <VideoIcon />;
        case 'article': return <ArticleIcon />;
        case 'book': return <BookIcon />;
        case 'interactive': return <InteractiveIcon />;
        default: return null;
    }
}


const ResourcesPage: React.FC<ResourcesPageProps> = ({ user, onNavigate }) => {
    const availableSubjects = BRANCH_SUBJECTS[user.branch!];
    const [selectedSubject, setSelectedSubject] = useState<Subject>(availableSubjects[0]);

    const resourcesForSubject = RESOURCES_DATA[selectedSubject];

    return (
        <div>
            <Button onClick={() => onNavigate(View.DASHBOARD)} className="mb-8">
                &larr; Back to Dashboard
            </Button>
            <div className="text-center mb-10">
                <h1 className="text-5xl font-bold font-pixel text-rune-gold">The Digital Library</h1>
                <p className="text-purple-300/80 mt-2">Curated resources for your branch: {user.branch}.</p>
            </div>

            <Card className="p-4 sm:p-6">
                <nav className="resources-nav">
                    {availableSubjects.map(subject => (
                        <button
                            key={subject}
                            onClick={() => setSelectedSubject(subject)}
                            className={`resources-nav-btn ${selectedSubject === subject ? 'active' : ''}`}
                        >
                            {subject}
                        </button>
                    ))}
                </nav>

                <div className="library-grid">
                    {resourcesForSubject && resourcesForSubject.length > 0 ? resourcesForSubject.map(category => (
                        <Card key={category.name} className="tome-card">
                            <h3>{category.name}</h3>
                            <div className="resource-list">
                                {category.resources.map(resource => (
                                    <div key={resource.title} className="resource-item">
                                        <div className="icon">
                                           <ResourceTypeIcon type={resource.type} />
                                        </div>
                                        <div className="resource-info">
                                            <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                                {resource.title}
                                            </a>
                                            <p>{resource.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    )) : (
                         <div className="text-center col-span-full py-8">
                            <p className="text-purple-200/90">The archives for this subject are currently being transcribed by our scribes.</p>
                         </div>
                     )}
                </div>
            </Card>
        </div>
    );
};

export default ResourcesPage;