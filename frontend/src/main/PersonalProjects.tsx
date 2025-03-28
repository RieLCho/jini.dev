import React, { useState } from 'react';
import { projectsData } from './data/projectsData';
import { ProjectCard } from './components/ProjectCard';

export const PersonalProjects: React.FC = () => {
    const [expandedProject, setExpandedProject] = useState<string | null>(null);
    
    const toggleProject = (projectTitle: string) => {
        if (expandedProject === projectTitle) {
            setExpandedProject(null);
            return;
        }
        
        setExpandedProject(projectTitle);
    };
    
    return (
        <div className="p-6 space-y-8">
            <h2 className="text-2xl font-bold text-white mb-8 pb-2 border-b border-secondary-700">개인 프로젝트</h2>
            <div className="grid gap-8">
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        isExpanded={expandedProject === project.title}
                        onToggle={() => toggleProject(project.title)}
                    />
                ))}
            </div>
        </div>
    );
};
