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
    image?: string;
}

const projectsData: Project[] = [
    {
        title: 'SleepWithAI',
        description: '동국대학교 2020학년도 겨울방학 iOS 개발자 양성 프로그램',
        period: '2020.12',
        skills: ['Swift', 'Xcode', 'UIKit', 'CoreML'],
        github: 'https://github.com/RieLCho/SleepWithAI',
        features: ['AI를 활용한 수면 데이터 저장 및 맞춤형 알람 기능', 'Realm 데이터베이스 활용'],
    },
    {
        title: 'Barcode',
        description: '동국대학교 2021학년도 1학기 공개 SW 프로젝트',
        period: '2021.03',
        skills: ['Java', 'Android Studio', 'Kotlin', 'Firebase', 'Google Vision API'],
        github: 'https://github.com/CSID-DGU/2021-1-OSSP2-Barcode-8',
        features: ['바코드 스캔 앱', '편의점 PB 상품 후기 공유'],
    },
    {
        title: 'Hayaku',
        description: '구 iOS에 존재하던 "TAP to Tweet" 버튼 안드로이드 포팅',
        period: '2021.03',
        skills: ['Java', 'Android Studio', 'Twitter4j', 'Glide'],
        github: 'https://github.com/RieLCho/Hayaku',
        features: ['상단바에서 언제 어디서든 쉽게 트윗'],
    },
    {
        title: 'AI 모델 보안 강화 연구',
        description: '동국대학교 2021학년도  1학기 개별연구',
        period: '2021.03',
        skills: ['Python', 'Adversarial-Robustness-Toolbox', 'TensorFlow', ],
        github: 'https://github.com/RieLCho/AI-Model-Security-Enhancement',
        features: ['AI 모델 생성 시 발생할 수 있는 보안 취약점을 분석', '사전에 제거, 방어, 검출 하기 위한 기법을 연구'],
    }
];

export const PersonalProjects: React.FC = () => {
    const [imgErrors, setImgErrors] = React.useState<{[key: string]: boolean}>({});
    
    const handleImageError = (projectId: string) => {
        setImgErrors(prev => ({...prev, [projectId]: true}));
    };

    return (
        <div className="p-6 space-y-8">
            <h2 className="text-2xl font-bold text-white mb-6">개인 프로젝트</h2>
            <div className="grid gap-8">
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        className="bg-secondary-800 rounded-lg overflow-hidden hover:bg-secondary-700 transition-colors"
                    >
                        <div className="flex flex-col md:flex-row">
                            {project.image && !imgErrors[project.title] ? (
                                <div className="md:w-2/5 bg-gradient-to-br from-secondary-800 to-secondary-900 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-blue-500 opacity-10 group-hover:opacity-15 transition-opacity duration-300"></div>
                                    <div className="flex items-center justify-center h-full p-6">
                                        <div className="relative rounded-lg overflow-hidden shadow-xl  border-2 border-secondary-700">
                                            <img 
                                                src={project.image} 
                                                alt={project.title} 
                                                className="max-w-full h-auto max-h-[300px] object-contain bg-black bg-opacity-30 backdrop-blur-sm p-3"
                                                onError={() => handleImageError(project.title)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : project.image && imgErrors[project.title] ? (
                                <div className="md:w-2/5 bg-gradient-to-br from-secondary-800 to-secondary-900 flex items-center justify-center p-6">
                                    <div className="flex flex-col items-center justify-center h-[250px] text-secondary-400 bg-secondary-800 p-8 rounded-lg border border-secondary-700 w-full">
                                        <svg className="w-20 h-20 mb-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>
                                        <p className="text-center">이미지를 불러올 수 없습니다</p>
                                        <h3 className="text-white text-xl font-bold mt-4">{project.title}</h3>
                                    </div>
                                </div>
                            ) : null}
                            <div className={`p-6 ${project.image ? 'md:w-3/5' : 'w-full'}`}>
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                        <p className="text-secondary-300">{project.description}</p>
                                        <p className="text-secondary-300 mt-1">{project.period}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-secondary-300 hover:text-white transition-colors bg-secondary-700 hover:bg-secondary-600 p-2 rounded"
                                            >
                                                <FaGithub size={20} />
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-secondary-300 hover:text-white transition-colors bg-secondary-700 hover:bg-secondary-600 p-2 rounded"
                                            >
                                                <FaLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-4 mt-4">
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
                                    <div className="flex flex-wrap gap-2 mt-4">
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
