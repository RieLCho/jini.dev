import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

interface ProjectActionsProps {
    github?: string;
    demo?: string;
    onActionClick: (e: React.MouseEvent) => void;
}

export const ProjectActions: React.FC<ProjectActionsProps> = ({ github, demo, onActionClick }) => {
    return (
        <div className="flex gap-2">
            {github && (
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white transition-all bg-blue-600 hover:bg-blue-500 p-2 rounded-full shadow-md hover:shadow-lg"
                    title="GitHub 저장소"
                    onClick={onActionClick}
                >
                    <FaGithub size={20} />
                </a>
            )}
            {demo && (
                <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white transition-all bg-green-600 hover:bg-green-500 p-2 rounded-full shadow-md hover:shadow-lg"
                    title="데모 보기"
                    onClick={onActionClick}
                >
                    <FaLink size={20} />
                </a>
            )}
        </div>
    );
}; 