import React from 'react';
import { FaGithub, FaEnvelope, FaBlog, FaMapMarkerAlt, FaUniversity, FaCode } from 'react-icons/fa';

interface SocialLink {
    icon: React.ReactNode;
    label: string;
    href: string;
    isExternal?: boolean;
}

export const PersonalInfo: React.FC = () => {
    const socialLinks: SocialLink[] = [
        {
            icon: <FaEnvelope className="w-5 h-5" />,
            label: 'sheepjin99@gmail.com',
            href: 'mailto:sheepjin99@gmail.com',
        },
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: 'github.com/RieLCho',
            href: 'https://github.com/RieLCho',
            isExternal: true,
        },
        {
            icon: <FaBlog className="w-5 h-5" />,
            label: 'sheepjin99.tistory.com',
            href: 'https://sheepjin99.tistory.com',
            isExternal: true,
        },
    ];

    return (
        <div className="p-6 space-y-8 text-secondary-100">
            <div className="flex items-start gap-6">
                <img
                    src="https://avatars.githubusercontent.com/u/13748138?s=400&u=cfa7aa7b0688ef674d8eb487bbe27af132f39093&v=4"
                    alt="Yangjin Cho"
                    className="w-32 h-32 rounded-lg object-cover border-2 border-secondary-700"
                />
                <div className="space-y-4">
                    <div>
                        <h1 className="text-2xl font-bold text-white">조양진 (Yangjin Cho)</h1>
                        <p className="text-secondary-300">프론트엔드 엔지니어</p>
                    </div>
                    <div className="flex items-center gap-2 text-secondary-300">
                        <FaMapMarkerAlt />
                        <span>서울특별시, 대한민국</span>
                    </div>
                    <div className="flex items-center gap-2 text-secondary-300">
                        <FaUniversity />
                        <span>한양대학교 컴퓨터소프트웨어학부</span>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">소개</h2>
                <p className="text-secondary-300 leading-relaxed">
                    안녕하세요! 저는 웹 프론트엔드 개발을 전문으로 하는 개발자입니다. 사용자 경험을 개선하고 아름다운
                    인터페이스를 만드는 것에 열정을 가지고 있습니다. 현재는 React와 TypeScript를 주로 사용하여 개발하고
                    있으며, 새로운 기술을 배우고 적용하는 것을 좋아합니다.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">주요 기술 스택</h2>
                <div className="flex flex-wrap gap-2">
                    {['TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Docker'].map((skill) => (
                        <span
                            key={skill}
                            className="px-3 py-1 bg-secondary-700 text-secondary-300 rounded-full text-sm flex items-center gap-1"
                        >
                            <FaCode className="w-3 h-3" />
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">연락처</h2>
                <div className="space-y-3">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target={link.isExternal ? '_blank' : undefined}
                            rel={link.isExternal ? 'noopener noreferrer' : undefined}
                            className="flex items-center gap-3 text-secondary-300 hover:text-white transition-colors"
                        >
                            {link.icon}
                            <span>{link.label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};
