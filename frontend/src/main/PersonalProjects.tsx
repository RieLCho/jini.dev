import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

interface Project {
    title: string;
    description: string;
    period: string;
    skills: string[];
    github?: string;
    demo?: string;
    features: string[];
}

const projectsData: Project[] = [
    {
        title: '포트폴리오 터미널',
        description: '터미널 스타일의 인터랙티브 포트폴리오 웹사이트',
        period: '2024.03',
        skills: ['React', 'TypeScript', 'Tailwind CSS', 'Docker'],
        github: 'https://github.com/yourusername/portfolio-terminal',
        demo: 'https://portfolio.example.com',
        features: ['터미널 스타일의 사용자 인터페이스', '커스텀 윈도우 시스템', '반응형 디자인', '도커라이즈된 배포'],
    },
    // 추가 프로젝트들...
];

export const PersonalProjects: React.FC = () => {
    return (
        <div className="p-6 space-y-8">
            <h2 className="text-2xl font-bold text-white mb-6">개인 프로젝트</h2>
            <div className="grid gap-6">
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        className="bg-secondary-800 rounded-lg p-6 space-y-4 hover:bg-secondary-700 transition-colors"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                <p className="text-secondary-300">{project.description}</p>
                            </div>
                            <div className="flex gap-2">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-secondary-300 hover:text-white transition-colors"
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-secondary-300 hover:text-white transition-colors"
                                    >
                                        <FaLink size={20} />
                                    </a>
                                )}
                            </div>
                        </div>
                        <p className="text-secondary-300">{project.period}</p>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-white font-bold mb-2">주요 기능</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="text-secondary-300">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.skills.map((skill, i) => (
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
