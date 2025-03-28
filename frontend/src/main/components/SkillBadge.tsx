import React from 'react';

interface SkillBadgeProps {
    skill: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
    return (
        <span className="px-3 py-1 bg-secondary-700 text-secondary-300 rounded-full text-sm">
            {skill}
        </span>
    );
}; 