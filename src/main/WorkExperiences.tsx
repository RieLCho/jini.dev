import React from 'react';
import { Dot } from '../utils/Dot';
import { Italic } from '../utils/Italic';
import { SubTitle, Title } from '../utils/Title';

export const WorkExperiences = () => {
    return (
<<<<<<< Updated upstream
        <div className="flex flex-col gap-2">
            <Title>Work Experiences</Title>
            <SubTitle>
                <Dot>NGINE STUDIOS @ NEXON COMPANY</Dot>
            </SubTitle>
            <div className="pl-5">
                <Italic>2021.08 ~ (재직 중)</Italic>
=======
        <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl font-heading font-bold text-secondary-900">
                Work Experiences
            </h2>
            
            <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-card p-6 hover:shadow-hover transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-heading font-bold text-primary-600">
                            NGINE STUDIOS @ NEXON COMPANY
                        </h3>
                        <a 
                            href="https://career.nexon.com/user/recruit/member/postList?joinCorp=GN" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary-500 hover:text-primary-600 transition-colors"
                        >
                            채용 공고 →
                        </a>
                    </div>
                    
                    <p className="text-secondary-600 mb-6">2021.08 ~ (재직 중)</p>
                    
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <a 
                                href="https://docs.gamescale.io/ko/doc/49/categories/13993" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-lg font-medium text-secondary-800 hover:text-primary-600 transition-colors"
                            >
                                AD Creator 프론트엔드 개발
                            </a>
                        </div>
                        
                        <div className="space-y-2">
                            <a 
                                href="https://creators.nexon.com" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-lg font-medium text-secondary-800 hover:text-primary-600 transition-colors"
                            >
                                넥슨 크리에이터즈 프론트엔드 개발
                            </a>
                            
                            <div className="pl-4 space-y-2">
                                <a 
                                    href="https://www.intelligencelabs.tech/86c22758-0540-4732-be7c-2494a44b893e" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-secondary-600 hover:text-primary-600 transition-colors"
                                >
                                    • 넥슨 크리에이터즈 플랫폼의 전세계 도약을 위한 검색 엔진 최적화 여정
                                </a>
                                
                                <a 
                                    href="https://x.com/jini_QwQ/status/1808043158485586000" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-secondary-600 hover:text-primary-600 transition-colors"
                                >
                                    • 게임 The First Descendant 개발자 크레딧 등재
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
>>>>>>> Stashed changes
            </div>
        </div>
    );
};
