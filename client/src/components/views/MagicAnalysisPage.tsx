import React, { useState } from 'react';
import { MagicAnalysisPageProps, View } from '../../types';
import { MagicAnalysisReport, analyzeMistakes } from '../../../services/geminiService';
import Button from '../ui/Button';
import Card from '../ui/Card';
import CrystalBallIcon from '../icons/CrystalBallIcon';

const MagicAnalysisPage: React.FC<MagicAnalysisPageProps> = ({ onNavigate, feedbackHistory }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [report, setReport] = useState<MagicAnalysisReport | null>(null);

    const handleAnalysis = async () => {
        setIsLoading(true);
        setReport(null);
        const result = await analyzeMistakes(feedbackHistory);
        setReport(result);
        setIsLoading(false);
    };

    return (
        <div>
            <Button onClick={() => onNavigate(View.DASHBOARD)} className="mb-8">
                &larr; Back to Dashboard
            </Button>
            <div className="text-center mb-10">
                <h1 className="text-5xl font-bold font-pixel text-rune-gold">Magic Analysis</h1>
                <p className="text-purple-300/80 mt-2">Gaze into the Oracle's crystal ball to see the patterns in your magic.</p>
            </div>

            <Card className="p-8">
                {!report && !isLoading && (
                    <div className="max-w-xl mx-auto text-center">
                        <CrystalBallIcon className="w-24 h-24 mx-auto mb-6 text-spell-blue"/>
                        <h2 className="text-2xl font-bold text-white mb-4">The Oracle Awaits Your Query</h2>
                        <p className="text-purple-200/90 mb-6">
                            The Oracle can analyze the magical traces you've left behind (your last {feedbackHistory.length} challenges) to reveal hidden truths about your methods. Are you ready to seek its wisdom?
                        </p>
                        <Button onClick={handleAnalysis} disabled={feedbackHistory.length === 0}>
                            {feedbackHistory.length > 0 ? "Consult the Oracle" : "No Traces Found"}
                        </Button>
                    </div>
                )}
                
                {isLoading && (
                     <div className="text-center">
                        <h2 className="text-2xl font-bold text-spell-blue animate-pulse">The Oracle is gazing into the threads of fate...</h2>
                        <p className="mt-4 text-purple-200/80">This may take a moment.</p>
                    </div>
                )}

                {report && (
                    <div className="text-left animate-fade-in">
                        <h2 className="text-3xl font-bold text-rune-gold text-center mb-8">{report.title}</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold font-pixel text-glow-pink mb-3">Patterns Revealed</h3>
                                <ul className="list-disc list-inside space-y-2 text-purple-200/90 bg-deep-scroll/50 p-4 rounded-md">
                                    {report.patterns.map((item, index) => <li key={index}>{item}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-pixel text-mana-green mb-3">Wisdom for Your Path</h3>
                                <ul className="list-disc list-inside space-y-2 text-purple-200/90 bg-deep-scroll/50 p-4 rounded-md">
                                    {report.recommendations.map((item, index) => <li key={index}>{item}</li>)}
                                </ul>
                            </div>
                        </div>
                         <div className="text-center mt-8">
                            <Button onClick={() => setReport(null)} variant="secondary">Consult Again</Button>
                        </div>
                    </div>
                )}
            </Card>
        </div>
    );
};

export default MagicAnalysisPage;