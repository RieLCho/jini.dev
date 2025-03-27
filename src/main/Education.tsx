import React from 'react';

export const Education = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl font-heading font-bold text-secondary-900">
                Education
            </h2>
            
            <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-card p-6 hover:shadow-hover transition-shadow duration-300">
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-heading font-bold text-primary-600">
                                동국대학교 공과대학 컴퓨터공학과
                            </h3>
                            <p className="text-secondary-600">2019.03 ~ (재학 중)</p>
                            <p className="text-secondary-600">GPA: 3.76/4.5</p>
                        </div>
                        
                        <div className="border-t border-secondary-200 pt-4">
                            <h3 className="text-xl font-heading font-bold text-primary-600">
                                가톨릭대학교 컴퓨터정보공학부
                            </h3>
                            <p className="text-secondary-600">2018.03 ~ 2019.01 (중퇴)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
