import React, { useState, useEffect } from 'react';
import { FaGithub, FaLink, FaChevronDown, FaChevronUp, FaExternalLinkAlt } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

// 마크다운 파일 가져오기
import SWAIReadme from './readme/SWAI.md?raw';
import BarcodeReadme from './readme/Barcode.md?raw';
import HayakuReadme from './readme/Hayaku.md?raw';
import ARTReadme from './readme/ART.md?raw';

interface Project {
    title: string;
    description: string;
    period: string;
    skills: string[];
    github?: string;
    demo?: string;
    features: string[];
    readmePath?: string;
    readmeContent?: string;
}

const projectsData: Project[] = [
    {
        title: 'SleepWithAI',
        description: '동국대학교 2020학년도 겨울방학 iOS 개발자 양성 프로그램',
        period: '2020.12',
        skills: ['Swift', 'Xcode', 'UIKit', 'CoreML'],
        github: 'https://github.com/RieLCho/SleepWithAI',
        demo: 'https://apps.apple.com/us/app/sleepwithai/id1498395373',
        features: ['AI를 활용한 수면 데이터 저장 및 맞춤형 알람 기능', 'Realm 데이터베이스 활용'],
        readmePath: 'RieLCho/SleepWithAI',
        readmeContent: SWAIReadme,
    },
    {
        title: 'Barcode',
        description: '동국대학교 2021학년도 1학기 공개 SW 프로젝트',
        period: '2021.03',
        skills: ['Java', 'Android Studio', 'Kotlin', 'Firebase', 'Google Vision API'],
        github: 'https://github.com/CSID-DGU/2021-1-OSSP2-Barcode-8',
        features: ['바코드 스캔 앱', '편의점 PB 상품 후기 공유'],
        readmePath: 'CSID-DGU/2021-1-OSSP2-Barcode-8',
        readmeContent: BarcodeReadme,
    },
    {
        title: 'Hayaku',
        description: '구 iOS에 존재하던 "TAP to Tweet" 버튼 안드로이드 포팅',
        period: '2021.03',
        skills: ['Java', 'Android Studio', 'Twitter4j', 'Glide'],
        github: 'https://github.com/RieLCho/Hayaku',
        features: ['상단바에서 언제 어디서든 쉽게 트윗'],
        readmePath: 'RieLCho/Hayaku',
        readmeContent: HayakuReadme,
    },
    {
        title: 'AI 모델 보안 강화 연구',
        description: '동국대학교 2021학년도  1학기 개별연구',
        period: '2021.03',
        skills: ['Python', 'Adversarial-Robustness-Toolbox', 'TensorFlow', ],
        github: 'https://github.com/RieLCho/AI-Model-Security-Enhancement',
        features: ['AI 모델 생성 시 발생할 수 있는 보안 취약점을 분석', '사전에 제거, 방어, 검출 하기 위한 기법을 연구'],
        readmePath: 'RieLCho/AI-Model-Security-Enhancement',
        readmeContent: ARTReadme,
    }
];

export const PersonalProjects: React.FC = () => {
    const [expandedProject, setExpandedProject] = useState<string | null>(null);
    
    const toggleProject = (projectTitle: string) => {
        if (expandedProject === projectTitle) {
            setExpandedProject(null);
            return;
        }
        
        setExpandedProject(projectTitle);
    };
    
    return (
        <div className="p-6 space-y-8">
            <h2 className="text-2xl font-bold text-white mb-8 pb-2 border-b border-secondary-700">개인 프로젝트</h2>
            <div className="grid gap-8">
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        className="bg-secondary-800 rounded-lg overflow-hidden hover:bg-secondary-750 transition-all duration-300 border border-secondary-700 shadow-lg"
                    >
                        {/* 프로젝트 헤더 - 클릭 시 확장/축소 */}
                        <div 
                            className="p-6 cursor-pointer"
                            onClick={() => toggleProject(project.title)}
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1 flex items-center">
                                        {project.title}
                                        <span className="ml-2 text-blue-400">
                                            {expandedProject === project.title ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
                                        </span>
                                    </h3>
                                    <p className="text-secondary-300">{project.description}</p>
                                    <p className="text-secondary-300 mt-1 flex items-center text-sm">
                                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                        {project.period}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-white transition-all bg-blue-600 hover:bg-blue-500 p-2 rounded-full shadow-md hover:shadow-lg"
                                            title="GitHub 저장소"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <FaGithub size={20} />
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-white transition-all bg-green-600 hover:bg-green-500 p-2 rounded-full shadow-md hover:shadow-lg"
                                            title="데모 보기"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <FaLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                            
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-secondary-700 text-secondary-300 rounded-full text-sm font-medium hover:bg-secondary-600 hover:text-white transition-colors duration-200"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="mt-4">
                                <h4 className="text-white font-bold mb-3 flex items-center">
                                    <span className="mr-2 bg-blue-500 h-5 w-1 rounded-full inline-block"></span>
                                    주요 기능
                                </h4>
                                <ul className="list-none space-y-2 ml-1">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="text-secondary-300 flex items-start">
                                            <span className="text-blue-400 mr-2 mt-1">•</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        
                        {/* 확장됐을 때 표시되는 README 영역 */}
                        {expandedProject === project.title && (
                            <div className="border-t border-secondary-700 p-6 bg-secondary-850 animate-fadeIn">
                                <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                                    <span className="mr-2 bg-green-500 h-5 w-1 rounded-full inline-block"></span>
                                    README
                                </h4>
                                
                                <div className="bg-secondary-800 p-6 rounded-lg border border-secondary-700 overflow-auto markdown-body">
                                    {project.readmeContent ? (
                                        <ReactMarkdown>{project.readmeContent}</ReactMarkdown>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center space-y-4">
                                            <p className="text-secondary-300 text-center">README 내용을 불러올 수 없습니다.</p>
                                            <a
                                                href={`https://github.com/${project.readmePath}/blob/master/README.md`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-6 py-3 bg-secondary-700 hover:bg-secondary-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center font-medium"
                                            >
                                                GitHub에서 README 보기
                                                <FaExternalLinkAlt size={14} className="ml-2" />
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
