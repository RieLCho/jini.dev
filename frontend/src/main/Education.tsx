import React from 'react';

interface Education {
    school: string;
    degree: string;
    period: string;
    major: string;
    description: string[];
    gpa?: string;
}

const educationData: Education[] = [
    {
        school: '동국대학교 (서울)',
        degree: '4학년',
        period: '2019.03 - 2026.02 (예정)',
        major: '공과대학 컴퓨터공학과',
        gpa: '3.78/4.5',
        description: ['동국대학교 프로그래밍 중앙동아리 CAPS 33.5기 부회장'],
    },
    {
        school: '가톨릭대학교 성심교정',
        degree: '중퇴',
        period: '2018.03 - 2019.01',
        major: '컴퓨터정보공학부',
        description: ['가톨릭대학교 가톨릭대 서브컬쳐동아리 AniCat 활동'],
    },
    {
        school: '배재고등학교',
        degree: '졸업',
        period: '2015.03 - 2018.02',
        major: '이과',
        description: ['배재고등학교 133기 졸업', '배재고등학교 컴퓨터동아리 SPACE 단장'],
    },

];

export const Education: React.FC = () => {
    return (
        <div className="p-6 space-y-8">
            <h2 className="text-2xl font-bold text-white mb-6">교육</h2>
            {educationData.map((edu, index) => (
                <div
                    key={index}
                    className="bg-secondary-800 rounded-lg p-6 space-y-4 hover:bg-secondary-700 transition-colors"
                >
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                            <p className="text-secondary-300">
                                {edu.degree} · {edu.major}
                            </p>
                        </div>
                        <div className="text-right">
                            <span className="text-secondary-300">{edu.period}</span>
                            {edu.gpa && <p className="text-green-400 mt-1">GPA: {edu.gpa}</p>}
                        </div>
                    </div>
                    {edu.description && (
                        <ul className="list-disc list-inside space-y-2 text-secondary-100">
                            {edu.description.map((desc, i) => (
                                <li key={i} className="text-secondary-300">
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};
