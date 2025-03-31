import React from 'react';
import {
    FaGithub,
    FaEnvelope,
    FaBlog,
    FaMapMarkerAlt,
    FaUniversity,
    FaCode,
    FaTwitter,
    FaLinkedin,
} from 'react-icons/fa';

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
            label: 'Gmail',
            href: 'mailto:choyj1222@gmail.com',
        },
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: 'GitHub',
            href: 'https://github.com/RieLCho',
            isExternal: true,
        },
        {
            icon: <FaLinkedin className="w-5 h-5" />,
            label: 'Linkedin',
            href: 'https://www.linkedin.com/in/yangjin-cho-22b6a030b/',
            isExternal: true,
        },
        {
            icon: <FaBlog className="w-5 h-5" />,
            label: 'Tistory',
            href: 'https://sheepjin99.tistory.com',
            isExternal: true,
        },
        {
            icon: <FaTwitter className="w-5 h-5" />,
            label: 'Twitter',
            href: 'https://x.com/jini_QwQ',
            isExternal: true,
        },
    ];

    return (
        <div className="p-6 space-y-8 text-secondary-100">
            <div className="flex items-start gap-6">
                <img
                    src="https://avatars.githubusercontent.com/u/13748138?s=400&u=cfa7aa7b0688ef674d8eb487bbe27af132f39093&v=4"
                    alt="Yangjin Cho"
                    className="w-32 h-32 rounded-full object-cover border-4 border-secondary-700 shadow-lg hover:border-blue-500 transition-colors duration-300"
                />
                <div className="space-y-4">
                    <div>
                        <h1 className="text-2xl font-bold text-white">조양진 (Yangjin Cho)</h1>
                        <p className="text-secondary-300">Frontend Developer</p>
                    </div>
                    <div className="flex items-center gap-2 text-secondary-300">
                        <FaMapMarkerAlt />
                        <span>경기도 성남시, 대한민국</span>
                    </div>
                    <div className="flex items-center gap-2 text-secondary-300">
                        <FaUniversity />
                        <span>동국대학교 공과대학 컴퓨터공학과</span>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">소개</h2>
                <p className="text-secondary-300 leading-relaxed">
                    Hi, my name is Yangjin Cho, but you can call me Jini or RieL.
                </p>
            </div>

            <div className="space-y-6">
                <h2 className="text-xl font-bold text-white">기술 스택</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
                            Always Ready <span className="text-yellow-400">⚡</span>
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {['React.js', 'TypeScript', 'Tailwind CSS'].map((skill) => (
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
                    <div>
                        <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
                            Familiar with <span className="text-blue-400">🧐</span>
                            <span className="text-purple-400">📚</span>
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {['Python', 'Swift', 'Vue', 'C++', 'Java for Android', 'Kotlin'].map((skill) => (
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
