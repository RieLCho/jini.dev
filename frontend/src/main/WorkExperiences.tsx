import React from 'react';

interface Experience {
    company: string;
    position: string;
    period: string;
    description: string[];
    skills: string[];
}

const experienceData: Experience[] = [
    {
        company: '네이버',
        position: '백엔드 개발 인턴',
        period: '2023.07 - 2023.08',
        description: [
            'MSA 환경에서 Spring Boot를 사용한 백엔드 서비스 개발',
            'Kafka를 활용한 실시간 데이터 처리 시스템 구축',
            'JUnit을 활용한 테스트 자동화 구현',
            'Docker와 Kubernetes를 활용한 컨테이너 배포 관리',
        ],
        skills: ['Java', 'Spring Boot', 'Kafka', 'Docker', 'Kubernetes', 'MySQL'],
    },
    {
        company: '카카오',
        position: '프론트엔드 개발 인턴',
        period: '2022.12 - 2023.02',
        description: [
            'React와 TypeScript를 사용한 웹 애플리케이션 개발',
            'Redux를 활용한 상태 관리 시스템 구축',
            'Jest와 React Testing Library를 활용한 테스트 작성',
            'Storybook을 활용한 컴포넌트 문서화',
        ],
        skills: ['React', 'TypeScript', 'Redux', 'Jest', 'Storybook', 'Tailwind CSS'],
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
                                {desc}
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-secondary-700 text-secondary-300 rounded-full text-sm"
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
