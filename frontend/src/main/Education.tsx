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
        school: '한양대학교',
        degree: '학사',
        period: '2018.03 - 2024.02',
        major: '컴퓨터소프트웨어학부',
        gpa: '4.01/4.5',
        description: ['ACM-ICPC 서울 리저널 본선 진출', '교내 알고리즘 대회 수상', '소프트웨어학부 학생회 기술부장'],
    },
    // 추가 학력 정보가 있다면 여기에 추가
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
