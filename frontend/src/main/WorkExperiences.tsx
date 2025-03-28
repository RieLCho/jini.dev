import React from 'react';

interface Experience {
    company: string;
    position: string;
    period: string;
    description: {
        text: string;
        url?: string;
    }[];
    skills: string[];
}

const experienceData: Experience[] = [
    {
        company: 'NGINE STUDIOS @ NEXON COMPANY',
        position: 'Frontend Developer',
        period: '2021.08 - ',
        description: [
            {
                text: '🛠️ AD Creator 프론트엔드 개발',
                url: 'https://docs.gamescale.io/ko/doc/49/categories/13993',
            },
            {
                text: '🛠️ 넥슨 크리에이터즈 프론트엔드 개발',
                url: 'https://creators.nexon.com/',
            },
            {
                text: '📚 넥슨 크리에이터즈 플랫폼의 전세계 도약을 위한 검색 엔진 최적화 여정',
                url: 'https://www.intelligencelabs.tech/86c22758-0540-4732-be7c-2494a44b893e',
            },
            {
                text: '🎉 The First Descendant 개발자 크레딧 등재',
                url: 'https://x.com/jini_QwQ/status/1808043158485586000',
            },
        ],
        skills: ['React', 'TypeScript', 'Tailwind CSS', 'Monorepo', 'Vite'],
    },
];

export const WorkExperiences: React.FC = () => {
    return (
        <div className="p-6 space-y-8">
            <h2 className="text-2xl font-bold text-white mb-6">경력</h2>
            {experienceData.map((exp, index) => (
                <div
                    key={index}
                    className="bg-secondary-800 rounded-lg p-6 space-y-4 hover:bg-secondary-700 transition-colors"
                >
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                            <p className="text-secondary-300">{exp.position}</p>
                        </div>
                        <span className="text-secondary-300">{exp.period}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-2">
                        {exp.description.map((desc, i) => (
                            <li key={i} className="text-secondary-300">
                                {desc.url ? (
                                    <a
                                        href={desc.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline hover:text-white transition-colors"
                                    >
                                        {desc.text}
                                    </a>
                                ) : (
                                    desc.text
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-secondary-500 text-secondary-100 rounded-full text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
