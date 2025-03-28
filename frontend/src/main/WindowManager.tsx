import React, { createContext, useContext, useState } from 'react';
import { FloatingWindow } from '../components/FloatingWindow';
import { PersonalInfo } from './PersonalInfo';
import { WorkExperiences } from './WorkExperiences';
import { Education } from './Education';
import { PersonalProjects } from './PersonalProjects';
import Contributions from './Contributions';

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
            {openWindows.map((windowModal, index) => (
                <FloatingWindow
                    key={windowModal.id}
                    title={windowModal.title}
                    onClose={() => onCloseWindow(windowModal.id)}
                    initialWidth={isMobile ? window.innerWidth : 600}
                    initialHeight={isMobile ? window.innerHeight - 100 : 400}
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
            ))}
        </>
    );
};
