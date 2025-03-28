import React from 'react';
import { FaGithub, FaLinux } from 'react-icons/fa';
import { Contribution } from '../types';
import { PullRequestStatus } from './PullRequestStatus';
import { SkillBadge } from './SkillBadge';

interface ContributionCardProps {
    contribution: Contribution;
}

export const ContributionCard: React.FC<ContributionCardProps> = ({ contribution }) => {
    const isArchLinux = contribution.project.includes('ttf-') || 
                       contribution.description.includes('Arch Linux User Repository');
    
    return (
        <div className="bg-secondary-800 rounded-lg p-6 space-y-4 hover:bg-secondary-700 transition-colors">
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        {isArchLinux ? <FaLinux /> : <FaGithub />}
                        {contribution.project}
                    </h3>
                    <p className="text-secondary-300">{contribution.description}</p>
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-white font-bold mb-2">Pull Requests</h4>
                    <ul className="space-y-2">
                        {contribution.pullRequests.map((pr, i) => (
                            <PullRequestStatus 
                                key={i}
                                status={pr.status}
                                title={pr.title}
                                url={pr.url}
                            />
                        ))}
                    </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                    {contribution.skills.map((skill, i) => (
                        <SkillBadge key={i} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
}; 