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
    isResizable?: boolean;
    isDraggable?: boolean;
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
    isResizable = true,
    isDraggable = true,
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
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

    const windowRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!isDraggable) return;

        setIsDragging(true);
        setDragOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        if (!isDraggable) return;

        const touch = e.touches[0];
        setIsDragging(true);
        setDragOffset({
            x: touch.clientX - position.x,
            y: touch.clientY - position.y,
        });
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging && isDraggable) {
            setPosition({
                x: Math.max(0, e.clientX - dragOffset.x),
                y: Math.max(0, e.clientY - dragOffset.y),
            });
        }
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (isDragging && isDraggable) {
            const touch = e.touches[0];
            setPosition({
                x: Math.max(0, touch.clientX - dragOffset.x),
                y: Math.max(0, touch.clientY - dragOffset.y),
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setIsResizing(false);
    };

    const handleResizeMouseDown = (e: React.MouseEvent) => {
        if (!isResizable) return;

        e.stopPropagation();
        setIsResizing(true);
    };

    const handleResizeMove = (e: MouseEvent) => {
        if (isResizing && isResizable && windowRef.current) {
            const rect = windowRef.current.getBoundingClientRect();
            setSize({
                width: Math.max(200, e.clientX - rect.left),
                height: Math.max(150, e.clientY - rect.top),
            });
        }
    };

    useEffect(() => {
        if (isDragging || isResizing) {
            window.addEventListener('mousemove', isDragging ? handleMouseMove : handleResizeMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('touchend', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', isDragging ? handleMouseMove : handleResizeMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleMouseUp);
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
            className="fixed bg-secondary-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
            style={{
                left: position.x,
                top: position.y,
                width: size.width,
                height: size.height,
                zIndex: customZIndex || 100,
            }}
            onClick={onFocus}
        >
            {/* 윈도우 헤더 */}
            <div
                className={`bg-secondary-700 px-4 py-2 flex items-center justify-between ${
                    isDraggable ? 'cursor-move' : ''
                }`}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            >
                <div className="text-white font-bold truncate">{title}</div>
                <div className="flex items-center space-x-2">
                    <button className="text-white hover:bg-secondary-600 p-1 rounded" onClick={toggleMaximize}>
                        {isMaximized ? '−' : '□'}
                    </button>
                    <button className="text-secondary-300 hover:text-white focus:outline-none" onClick={onClose}>
                        ×
                    </button>
                </div>
            </div>

            {/* 윈도우 콘텐츠 */}
            <div className="flex-1 overflow-y-auto bg-secondary-900">{children}</div>

            {/* 리사이즈 핸들 */}
            {isResizable && (
                <div
                    className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
                    onMouseDown={handleResizeMouseDown}
                />
            )}
        </div>
    );
};
