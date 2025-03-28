import React, { useState, useRef, useEffect } from 'react';
import { FaTimes, FaWindowMaximize, FaWindowMinimize } from 'react-icons/fa';
import { IconBase } from 'react-icons';

interface FloatingWindowProps {
    title: string;
    children: React.ReactNode;
    initialWidth?: number;
    initialHeight?: number;
    initialX?: number;
    initialY?: number;
    customZIndex?: number;
    onFocus?: () => void;
    onClose: () => void;
}

export const FloatingWindow: React.FC<FloatingWindowProps> = ({
    title,
    children,
    initialWidth = 600,
    initialHeight = 400,
    initialX = 100,
    initialY = 100,
    customZIndex,
    onFocus,
    onClose,
}) => {
    const [position, setPosition] = useState({ x: initialX, y: initialY });
    const [size, setSize] = useState({ width: initialWidth, height: initialHeight });
    const [isDragging, setIsDragging] = useState(false);
    const [isResizing, setIsResizing] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const [prevState, setPrevState] = useState({
        x: initialX,
        y: initialY,
        width: initialWidth,
        height: initialHeight,
    });

    const windowRef = useRef<HTMLDivElement>(null);
    const dragStartPos = useRef({ x: 0, y: 0 });
    const resizeStartSize = useRef({ width: 0, height: 0 });
    const resizeStartPos = useRef({ x: 0, y: 0 });

    // 드래그 시작 핸들러
    const handleDragStart = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsDragging(true);
        dragStartPos.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    };

    // 리사이즈 시작 핸들러
    const handleResizeStart = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsResizing(true);
        resizeStartSize.current = { width: size.width, height: size.height };
        resizeStartPos.current = { x: e.clientX, y: e.clientY };
    };

    // 마우스 이동 핸들러
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging) {
                setPosition({
                    x: e.clientX - dragStartPos.current.x,
                    y: e.clientY - dragStartPos.current.y,
                });
            }

            if (isResizing) {
                const deltaWidth = e.clientX - resizeStartPos.current.x;
                const deltaHeight = e.clientY - resizeStartPos.current.y;

                setSize({
                    width: Math.max(200, resizeStartSize.current.width + deltaWidth),
                    height: Math.max(100, resizeStartSize.current.height + deltaHeight),
                });
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            setIsResizing(false);
        };

        if (isDragging || isResizing) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, isResizing]);

    // 최대화 토글
    const toggleMaximize = () => {
        if (isMaximized) {
            // 이전 상태로 복원
            setPosition({ x: prevState.x, y: prevState.y });
            setSize({ width: prevState.width, height: prevState.height });
        } else {
            // 현재 상태 저장 후 최대화
            setPrevState({ x: position.x, y: position.y, width: size.width, height: size.height });
            setPosition({ x: 0, y: 0 });
            setSize({ width: window.innerWidth, height: window.innerHeight });
        }
        setIsMaximized(!isMaximized);
    };

    return (
        <div
            ref={windowRef}
            className="absolute bg-secondary-900 rounded-lg shadow-lg overflow-hidden flex flex-col"
            style={{
                width: `${size.width}px`,
                height: `${size.height}px`,
                left: `${position.x}px`,
                top: `${position.y}px`,
                zIndex: customZIndex || 100,
            }}
            onClick={onFocus}
        >
            {/* 윈도우 헤더 */}
            <div
                className="bg-secondary-800 px-4 py-2 flex items-center justify-between cursor-move"
                onMouseDown={(e) => {
                    handleDragStart(e);
                    onFocus?.();
                }}
            >
                <div className="text-white font-medium truncate">{title}</div>
                <div className="flex items-center space-x-2">
                    <button className="text-white hover:bg-secondary-700 p-1 rounded" onClick={toggleMaximize}>
                        {isMaximized ? '−' : '□'}
                    </button>
                    <button className="text-white hover:bg-red-500 p-1 rounded" onClick={onClose}>
                        ×
                    </button>
                </div>
            </div>

            {/* 윈도우 콘텐츠 */}
            <div className="flex-1 overflow-auto p-4">{children}</div>

            {/* 리사이즈 핸들 */}
            <div className="absolute bottom-0 right-0 w-6 h-6 cursor-se-resize" onMouseDown={handleResizeStart}>
                <svg className="w-full h-full text-secondary-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 22H17V17H22V22ZM17 15H15V20H20V15H17ZM13 13H11V22H20V11H13V13Z" />
                </svg>
            </div>
        </div>
    );
};
