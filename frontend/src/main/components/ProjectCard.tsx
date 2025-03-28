import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Project } from '../data/projectsData';
import { ProjectSkillBadge } from './ProjectSkillBadge';
import { ProjectFeature } from './ProjectFeature';
import { ProjectActions } from './ProjectActions';
import { ProjectReadme } from './ProjectReadme';

interface ProjectCardProps {
    project: Project;
    isExpanded: boolean;
    onToggle: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
    project, 
    isExpanded, 
    onToggle 
}) => {
    const handleActionClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className="bg-secondary-800 rounded-lg overflow-hidden hover:bg-secondary-750 transition-all duration-300 border border-secondary-700 shadow-lg">
            {/* 프로젝트 헤더 - 클릭 시 확장/축소 */}
            <div 
                className="p-6 cursor-pointer"
                onClick={onToggle}
            >
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1 flex items-center">
                            {project.title}
                            <span className="ml-2 text-blue-400">
                                {isExpanded ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
                            </span>
                        </h3>
                        <p className="text-secondary-300">{project.description}</p>
                        <p className="text-secondary-300 mt-1 flex items-center text-sm">
                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            {project.period}
                        </p>
                    </div>
                    <ProjectActions 
                        github={project.github} 
                        demo={project.demo} 
                        onActionClick={handleActionClick} 
                    />
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                        <ProjectSkillBadge 
                            key={i} 
                            skill={skill} 
                            onClick={handleActionClick} 
                        />
                    ))}
                </div>
                
                <div className="mt-4">
                    <h4 className="text-white font-bold mb-3 flex items-center">
                        <span className="mr-2 bg-blue-500 h-5 w-1 rounded-full inline-block"></span>
                        주요 기능
                    </h4>
                    <ul className="list-none space-y-2 ml-1">
                        {project.features.map((feature, i) => (
                            <ProjectFeature key={i} feature={feature} />
                        ))}
                    </ul>
                </div>
            </div>
            
            {/* 확장됐을 때 표시되는 README 영역 */}
            {isExpanded && (
                <ProjectReadme
                    readmeContent={project.readmeContent}
                    readmePath={project.readmePath}
                />
            )}
        </div>
    );
};
