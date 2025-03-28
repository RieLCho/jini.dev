import React, { useState, useRef, useEffect } from 'react';
import { FloatingWindow } from './FloatingWindow';
import { PersonalInfo } from '../main/PersonalInfo';
import { WorkExperiences } from '../main/WorkExperiences';
import { Education } from '../main/Education';
import { PersonalProjects } from '../main/PersonalProjects';
import Contributions from '../main/Contributions';
import { WindowManager } from '../main/WindowManager';

interface Command {
    input: string;
    output: React.ReactNode;
}

interface FileSystemNode {
    type: 'file' | 'directory' | 'binary';
    name: string;
    content?: string;
    component?: string;
    children?: { [key: string]: FileSystemNode };
}

interface SystemInfo {
    os: string;
    host: string;
    kernel: string;
    uptime: string;
    packages: string;
    shell: string;
    resolution: string;
    de: string;
    wm: string;
    theme: string;
    icons: string;
    terminal: string;
    cpu: string;
    memory: string;
    gpu: string;
    disk: string;
}

interface NanoEditor {
    isOpen: boolean;
    fileName: string;
    content: string;
    cursorPosition: number;
}

const TypewriterText: React.FC<{ text: string; delay?: number; isLogo?: boolean }> = ({
    text,
    delay = 0,
    isLogo = false,
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setIsStarted(true);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!isStarted) return;

        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, 5);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, isStarted]);

    const renderText = () => {
        if (!isLogo) {
            return <span className="text-white">{displayedText}</span>;
        }
        return displayedText.split('').map((char, index) => {
            if (
                char === 's' ||
                char === '+' ||
                char === 'o' ||
                char === '/' ||
                char === '.' ||
                char === '-' ||
                char === '`' ||
                char === ':'
            ) {
                return (
                    <span key={index} className="text-[#E95420]">
                        {char}
                    </span>
                );
            }
            return (
                <span key={index} className="text-white">
                    {char}
                </span>
            );
        });
    };

    return <span>{renderText()}</span>;
};

const BlinkingCursor: React.FC = () => <span className="inline-block w-2 h-5 bg-secondary-100 animate-blink"></span>;

const NanoEditor: React.FC<{
    fileName: string;
    content: string;
    onSave: (content: string) => void;
    onCancel: () => void;
}> = ({ fileName, content, onSave, onCancel }) => {
    const [editorContent, setEditorContent] = useState(content);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        textareaRef.current?.focus();
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.ctrlKey && e.key === 'o') {
            e.preventDefault();
            onSave(editorContent);
        } else if (e.ctrlKey && e.key === 'x') {
            e.preventDefault();
            onCancel();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-secondary-900 w-[800px] h-[600px] rounded-lg shadow-lg flex flex-col">
                <div className="bg-secondary-800 px-4 py-2 flex items-center justify-between">
                    <div className="text-white font-ascii">nano {fileName}</div>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                </div>
                <div className="flex-1 p-4">
                    <textarea
                        ref={textareaRef}
                        value={editorContent}
                        onChange={(e) => setEditorContent(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="w-full h-full bg-transparent text-white font-ascii resize-none outline-none"
                        spellCheck="false"
                    />
                </div>
                <div className="bg-secondary-800 px-4 py-2 text-white font-ascii text-sm">^O Write Out ^X Exit</div>
            </div>
        </div>
    );
};

export const Terminal: React.FC = () => {
    const [commands, setCommands] = useState<Command[]>([]);
    const [currentInput, setCurrentInput] = useState('');
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [currentPath, setCurrentPath] = useState<string[]>(['/']);
    const [showNeofetch, setShowNeofetch] = useState(true);
    const [fileSystem, setFileSystem] = useState<FileSystemNode>({
        type: 'directory',
        name: '/',
        children: {
            home: {
                type: 'directory',
                name: 'home',
                children: {
                    user: {
                        type: 'directory',
                        name: 'user',
                        children: {
                            about: {
                                type: 'binary',
                                name: 'about',
                                component: 'PersonalInfo',
                            },
                            experience: {
                                type: 'binary',
                                name: 'experience',
                                component: 'WorkExperiences',
                            },
                            education: {
                                type: 'binary',
                                name: 'education',
                                component: 'Education',
                            },
                            skills: {
                                type: 'binary',
                                name: 'skills',
                                component: 'PersonalInfo',
                            },
                            projects: {
                                type: 'binary',
                                name: 'projects',
                                component: 'PersonalProjects',
                            },
                            contributions: {
                                type: 'binary',
                                name: 'contributions',
                                component: 'Contributions',
                            },
                        },
                    },
                },
            },
            'README.md': {
                type: 'file',
                name: 'README.md',
                content:
                    'Welcome to my portfolio!\n\nUse the following commands to navigate:\n- ls: List directory contents\n- cd: Change directory\n- cat: Display file contents\n- run: Open binary files in a window\n- pwd: Print working directory\n- help: Show available commands',
            },
            main: {
                type: 'directory',
                name: 'main',
                children: {
                    'PersonalInfo.tsx': {
                        type: 'file',
                        name: 'PersonalInfo.tsx',
                        content: '// PersonalInfo 컴포넌트 소스 코드',
                    },
                    'WorkExperiences.tsx': {
                        type: 'file',
                        name: 'WorkExperiences.tsx',
                        content: '// WorkExperiences 컴포넌트 소스 코드',
                    },
                    'Education.tsx': {
                        type: 'file',
                        name: 'Education.tsx',
                        content: '// Education 컴포넌트 소스 코드',
                    },
                    'PersonalProjects.tsx': {
                        type: 'file',
                        name: 'PersonalProjects.tsx',
                        content: '// PersonalProjects 컴포넌트 소스 코드',
                    },
                    'Contributions.tsx': {
                        type: 'file',
                        name: 'Contributions.tsx',
                        content: '// Contributions 컴포넌트 소스 코드',
                    },
                },
            },
        },
    });
    const terminalRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [nanoEditor, setNanoEditor] = useState<NanoEditor | null>(null);
    const [openWindows, setOpenWindows] = useState<{ id: string; title: string; component: string }[]>([]);

    const systemInfo: SystemInfo = {
        os: 'Portfolio OS',
        host: 'portfolio-terminal',
        kernel: 'React 18.2.0',
        uptime: '1 minute',
        packages: 'npm (6)',
        shell: 'portfolio-shell',
        resolution: '1920x1080',
        de: 'Web Browser',
        wm: 'Browser Window',
        theme: 'Dark Mode',
        icons: 'Material Icons',
        terminal: 'Portfolio Terminal',
        cpu: 'Intel(R) Core(TM) i7-12700K',
        memory: '16GB / 32GB',
        gpu: 'NVIDIA GeForce RTX 3080',
        disk: '1TB / 2TB',
    };

    const neofetchOutput = () => (
        <div className="font-ascii whitespace-pre">
            <div className="flex">
                <div className="w-[300px] font-ascii text-[12px] leading-[1.2]">
                    <TypewriterText text={`            .-/+oossssoo+/-.`} delay={0} isLogo={true} />
                    <br />
                    <TypewriterText text={`        \`:+ssssssssssssssssss+:\``} delay={25} isLogo={true} />
                    <br />
                    <TypewriterText text={`      -+ssssssssssssssssssyyssss+-`} delay={50} isLogo={true} />
                    <br />
                    <TypewriterText text={`    .ossssssssssssssssssdMMMNysssso.`} delay={75} isLogo={true} />
                    <br />
                    <TypewriterText text={`   /ssssssssssshdmmNNmmyNMMMMhssssss/`} delay={100} isLogo={true} />
                    <br />
                    <TypewriterText text={`  +ssssssssshmydMMMMMMMNddddyssssssss+`} delay={125} isLogo={true} />
                    <br />
                    <TypewriterText text={` /sssssssshNMMMyhhyyyyhmNMMMNhssssssss/`} delay={150} isLogo={true} />
                    <br />
                    <TypewriterText text={`.ssssssssdMMMNhsssssssssshNMMMdssssssss.`} delay={175} isLogo={true} />
                    <br />
                    <TypewriterText text={`+sssshhhyNMMNyssssssssssssyNMMMysssssss+`} delay={200} isLogo={true} />
                    <br />
                    <TypewriterText text={`ossyNMMMNyMMhsssssssssssssshmmmhssssssso`} delay={225} isLogo={true} />
                    <br />
                    <TypewriterText text={`ossyNMMMNyMMhsssssssssssssshmmmhssssssso`} delay={250} isLogo={true} />
                    <br />
                    <TypewriterText text={`+sssshhhyNMMNyssssssssssssyNMMMysssssss+`} delay={275} isLogo={true} />
                    <br />
                    <TypewriterText text={`.ssssssssdMMMNhsssssssssshNMMMdssssssss.`} delay={300} isLogo={true} />
                    <br />
                    <TypewriterText text={` /sssssssshNMMMyhhyyyyhdNMMMNhssssssss/`} delay={325} isLogo={true} />
                    <br />
                    <TypewriterText text={`  +sssssssssdmydMMMMMMMMddddyssssssss+`} delay={350} isLogo={true} />
                    <br />
                    <TypewriterText text={`   /ssssssssssshdmNNNNmyNMMMMhssssss/`} delay={375} isLogo={true} />
                    <br />
                    <TypewriterText text={`    .ossssssssssssssssssdMMMNysssso.`} delay={400} isLogo={true} />
                    <br />
                    <TypewriterText text={`      -+sssssssssssssssssyyyssss+-`} delay={425} isLogo={true} />
                    <br />
                    <TypewriterText text={`        \`:+ssssssssssssssssss+:\``} delay={450} isLogo={true} />
                    <br />
                    <TypewriterText text={`            .-/+oossssoo+/-.`} delay={475} isLogo={true} />
                </div>
                <div className="ml-8">
                    <TypewriterText text={`yangjin@Ryzen-5600X`} delay={500} />
                    <br />
                    <TypewriterText text={`-------------------`} delay={525} />
                    <br />
                    <TypewriterText text={`OS: Ubuntu 24.04.2 LTS on Windows 10 x86_64`} delay={550} />
                    <br />
                    <TypewriterText text={`Kernel: 5.15.167.4-microsoft-standard-WSL2`} delay={575} />
                    <br />
                    <TypewriterText text={`Uptime: 1 hour, 29 mins`} delay={600} />
                    <br />
                    <TypewriterText text={`Packages: 711 (dpkg)`} delay={625} />
                    <br />
                    <TypewriterText text={`Shell: bash 5.2.21`} delay={650} />
                    <br />
                    <TypewriterText text={`Theme: Adwaita [GTK3]`} delay={675} />
                    <br />
                    <TypewriterText text={`Icons: Adwaita [GTK3]`} delay={700} />
                    <br />
                    <TypewriterText text={`Terminal: Windows Terminal`} delay={725} />
                    <br />
                    <TypewriterText text={`CPU: AMD Ryzen 5 5600X (12) @ 3.700GHz`} delay={750} />
                    <br />
                    <TypewriterText text={`GPU: b4b4:00:00.0 Microsoft Corporation Basic Render Driver`} delay={775} />
                    <br />
                    <TypewriterText text={`Memory: 1581MiB / 15939MiB`} delay={800} />
                </div>
            </div>
        </div>
    );

    const getCurrentDirectory = () => {
        let current = fileSystem;
        for (const dir of currentPath.slice(1)) {
            if (current.children && current.children[dir]) {
                current = current.children[dir];
            }
        }
        return current;
    };

    const createDirectory = (path: string[]) => {
        const newFileSystem = { ...fileSystem };
        let current = newFileSystem;

        // 마지막 디렉토리 이름을 제외한 경로로 이동
        for (const dir of path.slice(0, -1)) {
            if (!current.children) {
                current.children = {};
            }
            if (!current.children[dir]) {
                current.children[dir] = {
                    type: 'directory',
                    name: dir,
                    children: {},
                };
            }
            current = current.children[dir];
        }

        // 마지막 디렉토리 생성
        const dirName = path[path.length - 1];
        if (!current.children) {
            current.children = {};
        }
        if (!current.children[dirName]) {
            current.children[dirName] = {
                type: 'directory',
                name: dirName,
                children: {},
            };
            setFileSystem(newFileSystem);
            return true;
        }
        return false;
    };

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
                    <li>ls - 디렉토리 내용 표시</li>
                    <li>cd [directory] - 디렉토리 이동</li>
                    <li>cat [file] - 파일 내용 표시</li>
                    <li>run [binary] - 바이너리 파일 실행</li>
                    <li>pwd - 현재 작업 디렉토리 표시</li>
                    <li>mkdir [directory] - 새 디렉토리 생성</li>
                    <li>neofetch - 시스템 정보 표시</li>
                    <li>nano [file] - nano 편집기 열기</li>
                </ul>
            </div>
        ),
        mkdir: (args: string[]) => {
            if (args.length === 0) {
                return <p className="text-red-500">Error: Please specify a directory name</p>;
            }
            const dirName = args[0];
            const current = getCurrentDirectory();

            if (current.children && current.children[dirName]) {
                return <p className="text-red-500">Error: Directory already exists</p>;
            }

            const success = createDirectory([...currentPath, dirName]);
            if (success) {
                return <p>Directory created: {dirName}</p>;
            }
            return <p className="text-red-500">Error: Failed to create directory</p>;
        },
        ls: () => {
            const current = getCurrentDirectory();
            if (current.type !== 'directory') {
                return <p className="text-red-500">Error: Not a directory</p>;
            }
            const items = Object.entries(current.children || {}).map(([name, node]) => ({
                name,
                type: node.type,
            }));
            return (
                <div className="grid grid-cols-2 gap-2">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={
                                item.type === 'directory'
                                    ? 'text-blue-400'
                                    : item.type === 'binary'
                                      ? 'text-purple-400'
                                      : 'text-green-400'
                            }
                        >
                            {item.name}
                            {item.type === 'binary' ? ' (binary)' : ''}
                        </div>
                    ))}
                </div>
            );
        },
        cd: (args: string[]) => {
            if (args.length === 0) {
                return <p className="text-red-500">Error: Please specify a directory</p>;
            }
            const target = args[0];
            if (target === '..') {
                if (currentPath.length > 1) {
                    setCurrentPath((prev) => prev.slice(0, -1));
                    return <p>Directory changed</p>;
                }
                return <p className="text-red-500">Error: Already at root directory</p>;
            }
            const current = getCurrentDirectory();
            if (current.children && current.children[target] && current.children[target].type === 'directory') {
                setCurrentPath((prev) => [...prev, target]);
                return <p>Directory changed</p>;
            }
            return <p className="text-red-500">Error: Directory not found</p>;
        },
        cat: (args: string[]) => {
            if (args.length === 0) {
                return <p className="text-red-500">Error: Please specify a file</p>;
            }
            const fileName = args[0];
            let current = fileSystem;

            // 현재 경로에 따라 파일 시스템 탐색
            for (const dir of currentPath.slice(1)) {
                if (current.children && current.children[dir]) {
                    current = current.children[dir];
                }
            }

            const file = current.children?.[fileName];
            if (!file) {
                return <p className="text-red-500">Error: File not found</p>;
            }

            if (file.type === 'binary') {
                return (
                    <p className="text-yellow-500">
                        Error: Cannot display binary file content. Use 'run' command to execute.
                    </p>
                );
            }

            if (file.type !== 'file') {
                return <p className="text-red-500">Error: Not a file</p>;
            }

            return <pre className="whitespace-pre-wrap text-white">{file.content}</pre>;
        },
        pwd: () => {
            return <p>{currentPath.join('/')}</p>;
        },
        about: () => {
            commandsList.run(['about']);
            return <p>Running about...</p>;
        },
        experience: () => {
            commandsList.run(['experience']);
            return <p>Running experience...</p>;
        },
        education: () => {
            commandsList.run(['education']);
            return <p>Running education...</p>;
        },
        projects: () => {
            commandsList.run(['projects']);
            return <p>Running projects...</p>;
        },
        skills: () => {
            commandsList.run(['skills']);
            return <p>Running skills...</p>;
        },
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
        neofetch: () => neofetchOutput(),
        nano: (args: string[]) => {
            if (args.length === 0) {
                return <p className="text-red-500">Error: Please specify a file name</p>;
            }
            const fileName = args[0];
            const newFileSystem = { ...fileSystem };
            let current = newFileSystem;

            for (const dir of currentPath.slice(1)) {
                if (current.children && current.children[dir]) {
                    current = current.children[dir];
                }
            }

            const file = current.children?.[fileName];
            if (file && file.type === 'file') {
                setNanoEditor({
                    isOpen: true,
                    fileName,
                    content: file.content || '',
                    cursorPosition: 0,
                });
                return null;
            } else {
                // 새 파일 생성
                if (!current.children) {
                    current.children = {};
                }
                current.children[fileName] = {
                    type: 'file',
                    name: fileName,
                    content: '',
                };
                setFileSystem(newFileSystem);
                setNanoEditor({
                    isOpen: true,
                    fileName,
                    content: '',
                    cursorPosition: 0,
                });
                return null;
            }
        },
        run: (args: string[]) => {
            if (args.length === 0) {
                return <p className="text-red-500">Error: Please specify a binary file</p>;
            }
            const fileName = args[0];
            let current = fileSystem;

            // 현재 경로에 따라 파일 시스템 탐색
            for (const dir of currentPath.slice(1)) {
                if (current.children && current.children[dir]) {
                    current = current.children[dir];
                }
            }

            const file = current.children?.[fileName];
            if (!file) {
                return <p className="text-red-500">Error: File not found</p>;
            }

            if (file.type !== 'binary') {
                return <p className="text-red-500">Error: Not a binary file</p>;
            }

            // 윈도우 추가 (WindowManager에서 관리됨)
            const windowId = Date.now().toString();
            setOpenWindows((prev) => [
                ...prev,
                {
                    id: windowId,
                    title: fileName,
                    component: file.component || '',
                },
            ]);

            return <p>Running {fileName}...</p>;
        },
    };

    const handleCommand = (input: string) => {
        const [command, ...args] = input.toLowerCase().trim().split(' ');

        if (command === 'clear') {
            setCommands([]);
            setHistory((prev) => [...prev, input]);
            setHistoryIndex(-1);
            setCurrentInput('');
            return;
        }

        const commandFn = commandsList[command as keyof typeof commandsList];
        if (!commandFn) {
            const output = (
                <p className="text-red-500">
                    명령어를 찾을 수 없습니다. 'help'를 입력하여 사용 가능한 명령어를 확인하세요.
                </p>
            );
            setCommands((prev) => [...prev, { input, output }]);
            setHistory((prev) => [...prev, input]);
            setHistoryIndex(-1);
            setCurrentInput('');
            return;
        }

        const output = commandFn(args);
        setCommands((prev) => [...prev, { input, output }]);
        setHistory((prev) => [...prev, input]);
        setHistoryIndex(-1);
        setCurrentInput('');
    };

    const getCurrentDirectoryItems = () => {
        const current = getCurrentDirectory();
        if (!current.children) return [];
        return Object.keys(current.children);
    };

    const findCompletion = (input: string): string | null => {
        const items = getCurrentDirectoryItems();
        const matches = items.filter((item) => item.startsWith(input));

        if (matches.length === 0) return null;
        if (matches.length === 1) return matches[0];

        // 여러 개의 매칭이 있을 경우 공통 접두사를 찾음
        const commonPrefix = matches.reduce((prefix, item) => {
            let i = 0;
            while (i < prefix.length && i < item.length && prefix[i] === item[i]) {
                i++;
            }
            return prefix.slice(0, i);
        });

        return commonPrefix;
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleCommand(currentInput);
        } else if (e.key === 'Tab') {
            e.preventDefault();
            const [command, ...args] = currentInput.split(' ');
            const lastArg = args[args.length - 1] || '';

            // 명령어 자동완성
            if (args.length === 0) {
                const commandMatches = Object.keys(commandsList).filter((cmd) => cmd.startsWith(command));
                if (commandMatches.length === 1) {
                    setCurrentInput(commandMatches[0] + ' ');
                } else if (commandMatches.length > 1) {
                    const commonPrefix = commandMatches.reduce((prefix, cmd) => {
                        let i = 0;
                        while (i < prefix.length && i < cmd.length && prefix[i] === cmd[i]) {
                            i++;
                        }
                        return prefix.slice(0, i);
                    });
                    setCurrentInput(commonPrefix);
                }
            }
            // 파일/디렉토리 자동완성
            else {
                const completion = findCompletion(lastArg);
                if (completion) {
                    const newArgs = [...args.slice(0, -1), completion];
                    setCurrentInput(command + ' ' + newArgs.join(' '));
                }
            }
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

    const handleNanoSave = (content: string) => {
        if (nanoEditor) {
            const newFileSystem = { ...fileSystem };
            let current = newFileSystem;

            // 현재 경로에 따라 파일 시스템 탐색
            for (const dir of currentPath.slice(1)) {
                if (current.children && current.children[dir]) {
                    current = current.children[dir];
                }
            }

            if (current.children && current.children[nanoEditor.fileName]) {
                current.children[nanoEditor.fileName].content = content;
                setFileSystem(newFileSystem);
            }
            setNanoEditor(null);
        }
    };

    const handleNanoCancel = () => {
        setNanoEditor(null);
    };

    // 윈도우 닫기 핸들러 추가
    const handleCloseWindow = (windowId: string) => {
        setOpenWindows((prev) => prev.filter((window) => window.id !== windowId));
    };

    useEffect(() => {
        if (showNeofetch) {
            setCommands([{ input: 'neofetch', output: neofetchOutput() }]);
            setShowNeofetch(false);
        }
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
        inputRef.current?.focus();
    }, [commands, showNeofetch]);

    return (
        <div className="relative">
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
                    className="h-[600px] bg-secondary-700 overflow-y-auto p-4 font-ascii text-[12px] text-secondary-100"
                >
                    <div className="space-y-2">
                        {commands.map((cmd, index) => (
                            <div key={index} className="space-y-1">
                                <div className="flex items-center">
                                    <span className="text-green-500 mr-2">$</span>
                                    <span>{cmd.input}</span>
                                </div>
                                {cmd.output && <div className="ml-4">{cmd.output}</div>}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center mt-2 sticky bottom-0 bg-secondary-700">
                        <span className="text-green-500 mr-2">$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={currentInput}
                            onChange={(e) => setCurrentInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="flex-1 bg-transparent border-none outline-none text-secondary-100 font-ascii"
                            autoFocus
                            spellCheck="false"
                            autoComplete="off"
                            placeholder="명령어를 입력하세요..."
                        />
                    </div>
                </div>
            </div>
            {nanoEditor && (
                <NanoEditor
                    fileName={nanoEditor.fileName}
                    content={nanoEditor.content}
                    onSave={handleNanoSave}
                    onCancel={handleNanoCancel}
                />
            )}

            {/* 열린 윈도우 직접 렌더링 */}
            {openWindows.map((window) => (
                <FloatingWindow
                    key={window.id}
                    title={window.title}
                    onClose={() => handleCloseWindow(window.id)}
                    initialX={Math.random() * 100 + 50}
                    initialY={Math.random() * 100 + 50}
                >
                    {window.component === 'PersonalInfo' && <PersonalInfo />}
                    {window.component === 'WorkExperiences' && <WorkExperiences />}
                    {window.component === 'Education' && <Education />}
                    {window.component === 'PersonalProjects' && <PersonalProjects />}
                    {window.component === 'Contributions' && <Contributions />}
                </FloatingWindow>
            ))}
        </div>
    );
};
