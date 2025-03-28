import React from 'react';
import { FaGithub, FaLinux } from 'react-icons/fa';

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
        project: 'ShareX',
        description: 'A free and open-source screenshot tool',
        pullRequests: [
            {
                title: 'Updated missing Korean translations',
                url: 'https://github.com/ShareX/ShareX/pull/5016/files',
                status: 'merged',
            },
        ],
        skills: ['CMake', 'C#'],
    },
    {
        project: 'flameshot',
        description: 'A free and open-source screenshot tool',
        pullRequests: [
            {
                title: 'Add Korean translation',
                url: 'https://github.com/flameshot-org/flameshot/pull/834/files',
                status: 'merged',
            },
            {
                title: 'Enable Korean translation',
                url: 'https://github.com/flameshot-org/flameshot/pull/846',
                status: 'merged',
            },
            {
                title: 'Update Internationalization_ko.ts',
                url: 'https://github.com/flameshot-org/flameshot/pull/1033',
                status: 'merged',
            },
        ],
        skills: ['CMake', 'C++', 'Qt'],
    },
    {
        project: 'misskey',
        description: 'A free and open-source social network service',
        pullRequests: [
            {
                title: 'fix(frontend): Fix cat ears are awkward on reply modal',
                url: 'https://github.com/misskey-dev/misskey/pull/11309',
                status: 'merged',
            },
        ],
        skills: ['CSS', 'Vue', 'TypeScript'],
    },
    {
        project: 'ttf-proggy-vector',
        description: 'Contributed proggy-vector font installation script on Arch Linux User Repository',
        pullRequests: [
            {
                title: 'initial commit',
                url: 'https://aur.archlinux.org/cgit/aur.git/commit/PKGBUILD?h=ttf-proggy-vector',
                status: 'merged',
            },
        ],
        skills: ['Arch Linux', 'PKGBUILD'],
    },
    {
        project: 'ttf-neodgm-pro',
        description: 'Contributed neodgm-pro font installation script on Arch Linux User Repository',
        pullRequests: [
            {
                title: 'initial commit',
                url: 'https://aur.archlinux.org/cgit/aur.git/commit/PKGBUILD?h=ttf-neodgm-pro',
                status: 'merged',
            },
        ],
        skills: ['Arch Linux', 'PKGBUILD'],
    }
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
                                    {contribution.project.includes('ttf-') || contribution.description.includes('Arch Linux User Repository') ? 
                                        <FaLinux /> : 
                                        <FaGithub />
                                    }
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
