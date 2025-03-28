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

export const WindowManager: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [windows, setWindows] = useState<WindowType[]>([]);
    const [maxZIndex, setMaxZIndex] = useState(100);

    const openWindow = (title: string, component: string) => {
        const id = Date.now().toString();
        const newZIndex = maxZIndex + 1;
        setMaxZIndex(newZIndex);
        setWindows((prev) => [...prev, { id, title, component, zIndex: newZIndex }]);
        return id;
    };

    const closeWindow = (id: string) => {
        setWindows((prev) => prev.filter((window) => window.id !== id));
    };

    const bringToFront = (id: string) => {
        const newZIndex = maxZIndex + 1;
        setMaxZIndex(newZIndex);
        setWindows((prev) => prev.map((window) => (window.id === id ? { ...window, zIndex: newZIndex } : window)));
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
        <WindowManagerContext.Provider value={{ windows, openWindow, closeWindow, bringToFront }}>
            {children}

            {windows.map((window) => (
                <FloatingWindow
                    key={window.id}
                    title={window.title}
                    onClose={() => closeWindow(window.id)}
                    initialX={Math.random() * 100 + 50}
                    initialY={Math.random() * 100 + 50}
                    customZIndex={window.zIndex}
                    onFocus={() => bringToFront(window.id)}
                >
                    {renderComponent(window.component)}
                </FloatingWindow>
            ))}
        </WindowManagerContext.Provider>
    );
};
