import React from 'react';
import { SubTitle, Title } from '../utils/Title';
import SWAILogo from '../assets/projects/SWAI.png';
import BarcodeLogo from '../assets/projects/Barcode.png';
import AILogo from '../assets/projects/AI.png';
import HayakuLogo from '../assets/projects/Hayaku.png';
import Project from '../utils/Project';

const ProjectCard = ({ 
    repo, 
    title, 
    subTitle, 
    description, 
    imgPath, 
    techStack 
}: { 
    repo: string;
    title: string;
    subTitle: string;
    description: string;
    imgPath: string;
    techStack: { label: string; url: string; }[];
}) => {
    return (
        <div className="bg-white rounded-lg shadow-card p-6 hover:shadow-hover transition-shadow duration-300">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48 flex-shrink-0">
                    <img 
                        src={imgPath} 
                        alt={title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="flex-1 space-y-4">
                    <div>
                        <h3 className="text-xl font-heading font-bold text-primary-600">
                            {title}
                        </h3>
                        <p className="text-secondary-600">{subTitle}</p>
                    </div>
                    <p className="text-secondary-700">{description}</p>
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech, index) => (
                            <a
                                key={index}
                                href={tech.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm hover:bg-primary-100 transition-colors"
                            >
                                {tech.label}
                            </a>
                        ))}
                    </div>
                    <a
                        href={repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                    >
                        GitHub →
                    </a>
                </div>
            </div>
        </div>
    );
};

export const PersonalProjects = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl font-heading font-bold text-secondary-900">
                Personal Projects
            </h2>
            
            <div className="space-y-8">
                <ProjectCard
                    repo="https://github.com/RieLCho/SleepWithAI"
                    title="SleepWithAI"
                    subTitle="동국대학교 2020 겨울방학 iOS 개발자 양성 프로그램"
                    description="CoreML의 Sound Classification 기술을 사용하여 사용자의 수면 노이즈를 녹음, 분석하고 사용자에게 가장 알맞는 기상 시간에 알아서 알람을 울려주는 iOS 어플리케이션입니다."
                    imgPath={SWAILogo}
                    techStack={[
                        { label: 'Swift 5', url: 'https://www.apple.com/kr/swift/' },
                        { label: 'CoreML', url: 'https://developer.apple.com/documentation/coreml' },
                        { label: 'Realm', url: 'https://realm.io/' },
                    ]}
                />
                
                <ProjectCard
                    repo="https://github.com/CSID-DGU/2021-1-OSSP2-Barcode-8"
                    title="Barcode"
                    subTitle="동국대학교 2021학년도 1학기 공개SW프로젝트"
                    description='"편의점 PB 상품들을 평가할 수 있는 모바일 어플리케이션"을 개발하여 소비자들의 합리적인 소비 및 기업에서 더 좋은 PB 상품을 개발할 수 있도록 하는 Win-Win 전략을 취하였습니다.'
                    imgPath={BarcodeLogo}
                    techStack={[
                        { label: 'Java', url: 'https://developer.android.com/?hl=ko' },
                        { label: 'Firebase', url: 'https://firebase.google.com/' },
                        { label: 'Google Vision API', url: 'https://cloud.google.com/vision' },
                    ]}
                />
                
                <ProjectCard
                    repo="https://github.com/RieLCho/DES3733"
                    title="AI 모델 보안 강화 방법 연구"
                    subTitle="동국대학교 2021학년도 1학기 개별연구"
                    description="안전하게 AI 모델을 사용할 수 있도록 AI 모델 생성시 발생할 수 있는 보안 취약점을 분석하고 이를 사전에 제거, 방어, 검출 하기 위한 기법을 연구하였습니다."
                    imgPath={AILogo}
                    techStack={[
                        { label: 'Python', url: 'https://cloud.google.com/vision' },
                        { label: 'Adversarial-Robustness-Toolbox', url: 'https://github.com/Trusted-AI/adversarial-robustness-toolbox' },
                        { label: 'Tensorflow', url: 'https://www.tensorflow.org/?hl=ko' },
                    ]}
                />
                
                <ProjectCard
                    repo="https://github.com/RieLCho/Hayaku"
                    title="Hayaku"
                    subTitle="Open Source Twitter Client Project"
                    description='과거 아이폰의 iOS에 존재하던 상단바의 "Tap to Tweet" 버튼을 안드로이드로 포팅하여, 상단바에서 언제 어디서든 쉽고 간편하게 트윗을 보낼 수 있는 안드로이드 어플리케이션입니다.'
                    imgPath={HayakuLogo}
                    techStack={[
                        { label: 'Java', url: 'https://developer.android.com/?hl=ko' },
                        { label: 'Twitter4J', url: 'https://twitter4j.org/en/index.html' },
                        { label: 'Glide', url: 'https://github.com/bumptech/glide' },
                    ]}
                />
            </div>
        </div>
    );
};
