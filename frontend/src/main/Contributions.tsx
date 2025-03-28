import React from 'react';
import { FaGithub } from 'react-icons/fa';

interface Contribution {
    project: string;
    description: string;
    pullRequests: {
        title: string;
        url: string;
        status: 'merged' | 'open' | 'closed';
    }[];
    skills: string[];
}

const contributionsData: Contribution[] = [
    {
        project: 'React',
        description: 'A JavaScript library for building user interfaces',
        pullRequests: [
            {
                title: 'Fix: Improve error handling in useEffect cleanup',
                url: 'https://github.com/facebook/react/pull/1234',
                status: 'merged',
            },
            {
                title: 'Docs: Update concurrent mode documentation',
                url: 'https://github.com/facebook/react/pull/5678',
                status: 'open',
            },
        ],
        skills: ['TypeScript', 'React', 'JavaScript'],
    },
    // 추가 컨트리뷰션...
];

export const Contributions: React.FC = () => {
    return (
        <div className="p-6 space-y-8">
            <h2 className="text-2xl font-bold text-white mb-6">오픈소스 기여</h2>
            <div className="grid gap-6">
                {contributionsData.map((contribution, index) => (
                    <div
                        key={index}
                        className="bg-secondary-800 rounded-lg p-6 space-y-4 hover:bg-secondary-700 transition-colors"
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <FaGithub />
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
                                        <li key={i} className="flex items-center gap-2">
                                            <span
                                                className={`w-2 h-2 rounded-full ${
                                                    pr.status === 'merged'
                                                        ? 'bg-purple-500'
                                                        : pr.status === 'open'
                                                          ? 'bg-green-500'
                                                          : 'bg-red-500'
                                                }`}
                                            />
                                            <a
                                                href={pr.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-secondary-300 hover:text-white transition-colors"
                                            >
                                                {pr.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {contribution.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-secondary-700 text-secondary-300 rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
