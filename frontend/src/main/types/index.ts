export interface Contribution {
    project: string;
    description: string;
    pullRequests: {
        title: string;
        url: string;
        status: 'merged' | 'open' | 'closed';
    }[];
    skills: string[];
}

export interface SystemInfo {
    hostname: string;
    os: string;
    kernel: string;
    uptime: string;
    packages: string;
    shell: string;
    theme: string;
    icons: string;
    terminal: string;
    cpu: string;
    gpu: string;
    memory: string;
}

export interface Command {
    input: string;
    output: React.ReactNode;
}

export interface FileSystemNode {
    type: 'file' | 'directory' | 'binary';
    name: string;
    content?: string;
    component?: string;
    children?: { [key: string]: FileSystemNode };
}

export interface NanoEditor {
    isOpen: boolean;
    fileName: string;
    content: string;
    cursorPosition: number;
} 