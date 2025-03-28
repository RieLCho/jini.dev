import React from 'react';

interface PullRequestStatusProps {
    status: 'merged' | 'open' | 'closed';
    title: string;
    url: string;
}

export const PullRequestStatus: React.FC<PullRequestStatusProps> = ({ status, title, url }) => {
    return (
        <li className="flex items-center gap-2">
            <span
                className={`w-2 h-2 rounded-full ${
                    status === 'merged'
                        ? 'bg-purple-500'
                        : status === 'open'
                            ? 'bg-green-500'
                            : 'bg-red-500'
                }`}
            />
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-white transition-colors"
            >
                {title}
            </a>
        </li>
    );
}; 