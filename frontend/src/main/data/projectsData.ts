import SWAIReadme from '../readme/SWAI.md?raw';
import BarcodeReadme from '../readme/Barcode.md?raw';
import HayakuReadme from '../readme/Hayaku.md?raw';
import ARTReadme from '../readme/ART.md?raw';

export interface Project {
    title: string;
    description: string;
    period: string;
    skills: string[];
    github?: string;
    demo?: string;
    features: string[];
    readmePath?: string;
    readmeContent?: string;
}

export const projectsData: Project[] = [
    {
        title: 'SleepWithAI',
        description: '동국대학교 2020학년도 겨울방학 iOS 개발자 양성 프로그램',
        period: '2020.12',
        skills: ['Swift', 'Xcode', 'UIKit', 'CoreML'],
        github: 'https://github.com/RieLCho/SleepWithAI',
        demo: 'https://apps.apple.com/us/app/sleepwithai/id1498395373',
        features: ['AI를 활용한 수면 데이터 저장 및 맞춤형 알람 기능', 'Realm 데이터베이스 활용'],
        readmePath: 'RieLCho/SleepWithAI',
        readmeContent: SWAIReadme,
    },
    {
        title: 'Barcode',
        description: '동국대학교 2021학년도 1학기 공개 SW 프로젝트',
        period: '2021.03',
        skills: ['Java', 'Android Studio', 'Kotlin', 'Firebase', 'Google Vision API'],
        github: 'https://github.com/CSID-DGU/2021-1-OSSP2-Barcode-8',
        features: ['바코드 스캔 앱', '편의점 PB 상품 후기 공유'],
        readmePath: 'CSID-DGU/2021-1-OSSP2-Barcode-8',
        readmeContent: BarcodeReadme,
    },
    {
        title: 'Hayaku',
        description: '구 iOS에 존재하던 "TAP to Tweet" 버튼 안드로이드 포팅',
        period: '2021.03',
        skills: ['Java', 'Android Studio', 'Twitter4j', 'Glide'],
        github: 'https://github.com/RieLCho/Hayaku',
        features: ['상단바에서 언제 어디서든 쉽게 트윗'],
        readmePath: 'RieLCho/Hayaku',
        readmeContent: HayakuReadme,
    },
    {
        title: 'AI 모델 보안 강화 연구',
        description: '동국대학교 2021학년도  1학기 개별연구',
        period: '2021.03',
        skills: ['Python', 'Adversarial-Robustness-Toolbox', 'TensorFlow', ],
        github: 'https://github.com/RieLCho/AI-Model-Security-Enhancement',
        features: ['AI 모델 생성 시 발생할 수 있는 보안 취약점을 분석', '사전에 제거, 방어, 검출 하기 위한 기법을 연구'],
        readmePath: 'RieLCho/AI-Model-Security-Enhancement',
        readmeContent: ARTReadme,
    }
]; 