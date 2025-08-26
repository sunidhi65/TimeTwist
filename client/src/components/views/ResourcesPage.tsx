import React, { useState } from 'react';
import { ResourcesPageProps, Subject, View, Resource } from '../../types';
import { BRANCH_SUBJECTS } from '../../data/challenges';
import { RESOURCES_DATA } from '../../data/resources';
import { SAMPLE_PAPERS_DATA } from '../../data/samplePapers';
import Button from '../ui/Button';
import Card from '../ui/Card';
import VideoIcon from '../icons/VideoIcon';
import ArticleIcon from '../icons/ArticleIcon';
import BookIcon from '../icons/BookIcon';
import InteractiveIcon from '../icons/InteractiveIcon';
import LibraryIcon from '../icons/LibraryIcon';


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
    const learningResourcesContent = resourcesForSubject?.flatMap(category => category.resources) || [];
    
    const papersForCollege = SAMPLE_PAPERS_DATA[user.college] || {};
    const papersForSubject = papersForCollege[selectedSubject] || [];

    return (
        <div>
            <Button onClick={() => onNavigate(View.DASHBOARD)} className="mb-8">
                &larr; Back to Dashboard
            </Button>
            <div className="text-center mb-10">
                <h1 className="text-5xl font-bold font-pixel text-rune-gold">The Digital Library</h1>
                <p className="text-purple-300/80 mt-2">Curated resources for your branch: {user.branch}.</p>
            </div>
            
            <div className="resources-layout">
                {/* Sidebar Navigation */}
                <aside className="resources-sidebar">
                    <Card className="p-4">
                        <h2 className="font-fantasy">Subjects</h2>
                        <div className="resources-sidebar-list">
                            {availableSubjects.map(subject => (
                                <button
                                    key={subject}
                                    onClick={() => setSelectedSubject(subject)}
                                    className={`sidebar-btn ${selectedSubject === subject ? 'active' : ''}`}
                                >
                                    {subject}
                                </button>
                            ))}
                        </div>
                    </Card>
                </aside>

                {/* Main Content */}
                <main>
                    <Card className="resources-content">
                        {/* Learning Resources Section */}
                        <section>
                            <h3 className="resources-section-title">Learning Resources</h3>
                            {learningResourcesContent.length > 0 ? (
                                <div className="resource-list">
                                    {learningResourcesContent.map(resource => (
                                        <a key={resource.title} href={resource.url} target="_blank" rel="noopener noreferrer" className="resource-item">
                                            <div className="icon">
                                                <ResourceTypeIcon type={resource.type} />
                                            </div>
                                            <div className="resource-info">
                                                <span className="resource-title">{resource.title}</span>
                                                <p>{resource.description}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            ) : (
                                <div className="empty-state-container" style={{ border: 'none', padding: '1rem 0' }}>
                                    <LibraryIcon className="empty-state-icon" />
                                    <h3 className="empty-state-title">Archives Are Empty</h3>
                                    <p>Our scribes are currently transcribing resources for this subject.</p>
                                </div>
                            )}
                        </section>

                        {/* Sample Papers Section */}
                        <section>
                            <h3 className="resources-section-title">Sample Papers from {user.college}</h3>
                             {papersForSubject.length > 0 ? (
                                <div className="resource-list">
                                    {papersForSubject.map(paper => (
                                        <a key={paper.id} href={paper.url} target="_blank" rel="noopener noreferrer" className="resource-item">
                                            <div className="icon">
                                                <ArticleIcon />
                                            </div>
                                            <div className="resource-info">
                                                <span className="resource-title">{paper.title} - {paper.year}</span>
                                                <p>Click to view the paper. Opens in a new tab.</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-4 text-center text-purple-300/80">
                                    <p>No sample papers found for this subject at your college in our archives.</p>
                                </div>
                            )}
                        </section>
                    </Card>
                </main>
            </div>
        </div>
    );
};

export default ResourcesPage;