import React, { useState, useRef, useEffect } from 'react';

interface Command {
    input: string;
    output: React.ReactNode;
}

export const Terminal: React.FC = () => {
    const [commands, setCommands] = useState<Command[]>([]);
    const [currentInput, setCurrentInput] = useState('');
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const terminalRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const commandsList = {
        help: () => (
            <div className="space-y-2">
                <p>사용 가능한 명령어:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>help - 도움말 표시</li>
                    <li>about - 자기소개</li>
                    <li>experience - 경력</li>
                    <li>education - 학력</li>
                    <li>projects - 프로젝트</li>
                    <li>skills - 기술 스택</li>
                    <li>contact - 연락처</li>
                    <li>clear - 화면 지우기</li>
                </ul>
            </div>
        ),
        about: () => (
            <div className="space-y-2">
                <p>안녕하세요! 저는 웹 개발에 열정을 가진 풀스택 개발자입니다.</p>
                <p>사용자 경험을 최우선으로 생각하며, 깔끔하고 효율적인 코드를 작성하는 것을 좋아합니다.</p>
            </div>
        ),
        experience: () => (
            <div className="space-y-4">
                <div className="border-l-2 border-primary-500 pl-4">
                    <h3 className="font-bold">NGINE STUDIOS @ NEXON COMPANY</h3>
                    <p className="text-secondary-600">2021.08 ~ (재직 중)</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>AD Creator 프론트엔드 개발</li>
                        <li>넥슨 크리에이터즈 프론트엔드 개발</li>
                    </ul>
                </div>
            </div>
        ),
        education: () => (
            <div className="space-y-4">
                <div className="border-l-2 border-primary-500 pl-4">
                    <h3 className="font-bold">동국대학교 공과대학 컴퓨터공학과</h3>
                    <p className="text-secondary-600">2019.03 ~ (재학 중)</p>
                    <p className="text-secondary-600">GPA: 3.76/4.5</p>
                </div>
            </div>
        ),
        projects: () => (
            <div className="space-y-4">
                <p>프로젝트 목록을 불러오는 중...</p>
            </div>
        ),
        skills: () => (
            <div className="space-y-2">
                <p>기술 스택:</p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary-100 text-primary-600 rounded">React</span>
                    <span className="px-2 py-1 bg-primary-100 text-primary-600 rounded">TypeScript</span>
                    <span className="px-2 py-1 bg-primary-100 text-primary-600 rounded">Node.js</span>
                    <span className="px-2 py-1 bg-primary-100 text-primary-600 rounded">Next.js</span>
                </div>
            </div>
        ),
        contact: () => (
            <div className="space-y-2">
                <p>연락처:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Email: sheepjin99@gmail.com</li>
                    <li>GitHub: github.com/RieLCho</li>
                    <li>Blog: sheepjin99.tistory.com</li>
                </ul>
            </div>
        ),
        clear: () => {
            setCommands([]);
            return null;
        },
    };

    const handleCommand = (input: string) => {
        const command = input.toLowerCase().trim();
        
        if (command === 'clear') {
            setCommands([]);
            setHistory(prev => [...prev, input]);
            setHistoryIndex(-1);
            setCurrentInput('');
            return;
        }

        const output = commandsList[command as keyof typeof commandsList]?.() || (
            <p className="text-red-500">명령어를 찾을 수 없습니다. 'help'를 입력하여 사용 가능한 명령어를 확인하세요.</p>
        );

        setCommands(prev => [...prev, { input, output }]);
        setHistory(prev => [...prev, input]);
        setHistoryIndex(-1);
        setCurrentInput('');
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleCommand(currentInput);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex < history.length - 1) {
                const newIndex = historyIndex + 1;
                setHistoryIndex(newIndex);
                setCurrentInput(history[history.length - 1 - newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setCurrentInput(history[history.length - 1 - newIndex]);
            } else {
                setHistoryIndex(-1);
                setCurrentInput('');
            }
        }
    };

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
        inputRef.current?.focus();
    }, [commands]);

    return (
        <div className="w-full max-w-3xl mx-auto bg-secondary-900 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-secondary-800 px-4 py-2 flex items-center">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
            </div>
            <div 
                ref={terminalRef}
                className="h-[600px] overflow-y-auto p-4 font-mono text-sm text-secondary-100"
            >
                <div className="space-y-2">
                    {commands.map((cmd, index) => (
                        <div key={index} className="space-y-1">
                            <div className="flex items-center">
                                <span className="text-green-500 mr-2">$</span>
                                <span>{cmd.input}</span>
                            </div>
                            {cmd.output && (
                                <div className="ml-4">{cmd.output}</div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex items-center mt-2 sticky bottom-0 bg-secondary-900">
                    <span className="text-green-500 mr-2">$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={currentInput}
                        onChange={(e) => setCurrentInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent border-none outline-none text-secondary-100 font-mono"
                        autoFocus
                        spellCheck="false"
                        autoComplete="off"
                        placeholder="명령어를 입력하세요..."
                    />
                </div>
            </div>
        </div>
    );
}; 