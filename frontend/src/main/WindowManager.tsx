import React, { createContext, useContext, useState } from 'react';
import { FloatingWindow } from '../components/FloatingWindow';
import { PersonalInfo } from './PersonalInfo';
import { WorkExperiences } from './WorkExperiences';
import { Education } from './Education';
import { PersonalProjects } from './PersonalProjects';
import { Contributions } from './Contributions';

// 윈도우 관리를 위한 Context
type WindowType = {
    id: string;
    title: string;
    component: string;
    zIndex: number;
};

interface WindowManagerContextType {
    windows: WindowType[];
    openWindow: (title: string, component: string) => void;
    closeWindow: (id: string) => void;
    bringToFront: (id: string) => void;
}

const WindowManagerContext = createContext<WindowManagerContextType | undefined>(undefined);

export const useWindowManager = () => {
    const context = useContext(WindowManagerContext);
    if (!context) {
        throw new Error('useWindowManager must be used within a WindowManagerProvider');
    }
    return context;
};

interface WindowManagerProps {
    onCloseWindow: (windowId: string) => void;
    openWindows: { id: string; title: string; component: string }[];
}

export const WindowManager: React.FC<WindowManagerProps> = ({ onCloseWindow, openWindows }) => {
    const isMobile = window.innerWidth <= 768;

    // 컴포넌트별 크기 설정
    const getWindowSize = (componentName: string) => {
        if (isMobile) {
            return {
                width: window.innerWidth,
                height: window.innerHeight - 100
            };
        }
        
        switch (componentName) {
            case 'PersonalInfo':
                return { width: 800, height: 600 };
            case 'PersonalProjects':
                return { width: 850, height: 650 };
            case 'Contributions':
                return { width: 850, height: 650 };
            case 'WorkExperiences':
                return { width: 700, height: 500 };
            case 'Education':
                return { width: 600, height: 800 };
            default:
                return { width: 600, height: 400 };
        }
    };

    const renderComponent = (componentName: string) => {
        switch (componentName) {
            case 'PersonalInfo':
                return <PersonalInfo />;
            case 'WorkExperiences':
                return <WorkExperiences />;
            case 'Education':
                return <Education />;
            case 'PersonalProjects':
                return <PersonalProjects />;
            case 'Contributions':
                return <Contributions />;
            default:
                return <div>컴포넌트를 찾을 수 없습니다.</div>;
        }
    };

    return (
        <>
            {openWindows.map((windowModal, index) => {
                const windowSize = getWindowSize(windowModal.component);
                
                return (
                    <FloatingWindow
                        key={windowModal.id}
                        title={windowModal.title}
                        onClose={() => onCloseWindow(windowModal.id)}
                        initialWidth={windowSize.width}
                        initialHeight={windowSize.height}
                        initialX={isMobile ? 0 : Math.random() * 100 + 50}
                        initialY={isMobile ? 50 : Math.random() * 100 + 50}
                        customZIndex={100 + index}
                        isResizable={!isMobile}
                        isDraggable={!isMobile}
                    >
                        <div className={`${isMobile ? 'p-4' : 'p-6'} overflow-auto h-full`}>
                            {renderComponent(windowModal.component)}
                        </div>
                    </FloatingWindow>
                );
            })}
        </>
    );
};
