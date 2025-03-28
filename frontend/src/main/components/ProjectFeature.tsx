import React from 'react';

interface ProjectFeatureProps {
    feature: string;
}

export const ProjectFeature: React.FC<ProjectFeatureProps> = ({ feature }) => {
    return (
        <li className="text-secondary-300 flex items-start">
            <span className="text-blue-400 mr-2 mt-1">•</span>
            <span>{feature}</span>
        </li>
    );
}; 