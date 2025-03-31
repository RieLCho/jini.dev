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
        <div className="min-h-screen bg-secondary-900">
            {/* 상단 네비게이션 바 */}
            <nav className="fixed top-0 left-0 right-0 bg-secondary-800 border-b border-secondary-700 z-50">
                <div className="flex overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as TabType)}
                            className={`flex items-center gap-2 px-4 py-3 text-sm whitespace-nowrap ${
                                activeTab === tab.id
                                    ? 'text-white border-b-2 border-blue-500'
                                    : 'text-secondary-400 hover:text-white'
                            }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>
            </nav>

            {/* 메인 콘텐츠 */}
            <main className="pt-16">
                {tabs.find(tab => tab.id === activeTab)?.component}
            </main>
        </div>
    );
}; 