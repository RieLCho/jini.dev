import React, { useState } from 'react';
import { PersonalInfo } from './PersonalInfo';
import { WorkExperiences } from './WorkExperiences';
import { Education } from './Education';
import { PersonalProjects } from './PersonalProjects';
import { Contributions } from './Contributions';
import { FaUser, FaBriefcase, FaGraduationCap, FaCode, FaHandshake } from 'react-icons/fa';

type TabType = 'info' | 'experience' | 'education' | 'projects' | 'contributions';

export const MobileLayout: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabType>('info');

    const tabs = [
        { id: 'info', label: '소개', icon: <FaUser />, component: <PersonalInfo /> },
        { id: 'experience', label: '경력', icon: <FaBriefcase />, component: <WorkExperiences /> },
        { id: 'education', label: '교육', icon: <FaGraduationCap />, component: <Education /> },
        { id: 'projects', label: '프로젝트', icon: <FaCode />, component: <PersonalProjects /> },
        { id: 'contributions', label: '기여', icon: <FaHandshake />, component: <Contributions /> },
    ];

    return (
        <div className="min-h-screen bg-secondary-900 flex flex-col">
            {/* 메인 콘텐츠 */}
            <main className="flex-1 overflow-y-auto pb-16">
                {tabs.find(tab => tab.id === activeTab)?.component}
            </main>

            {/* 하단 네비게이션 바 */}
            <nav className="fixed bottom-0 left-0 right-0 bg-secondary-800 border-t border-secondary-700 z-50">
                <div className="flex justify-around">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as TabType)}
                            className={`flex flex-col items-center justify-center w-full py-2 text-xs ${
                                activeTab === tab.id
                                    ? 'text-blue-500'
                                    : 'text-secondary-400 hover:text-white'
                            }`}
                        >
                            <div className="text-lg mb-1">{tab.icon}</div>
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>
            </nav>
        </div>
    );
}; 