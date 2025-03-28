import React from 'react';

interface ProjectSkillBadgeProps {
    skill: string;
    onClick?: (e: React.MouseEvent) => void;
}

export const ProjectSkillBadge: React.FC<ProjectSkillBadgeProps> = ({ skill, onClick }) => {
    return (
        <span
            className="px-3 py-1 bg-secondary-700 text-secondary-300 rounded-full text-sm font-medium hover:bg-secondary-600 hover:text-white transition-colors duration-200"
            onClick={onClick}
        >
            {skill}
        </span>
    );
}; 