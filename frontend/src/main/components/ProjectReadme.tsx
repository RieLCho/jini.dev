import React from 'react';
import ReactMarkdown from 'react-markdown';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectReadmeProps {
    readmeContent?: string;
    readmePath?: string;
}

export const ProjectReadme: React.FC<ProjectReadmeProps> = ({ readmeContent, readmePath }) => {
    return (
        <div className="border-t border-secondary-700 p-6 bg-secondary-850 animate-fadeIn">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                <span className="mr-2 bg-green-500 h-5 w-1 rounded-full inline-block"></span>
                README
            </h4>
            
            <div className="bg-secondary-800 p-6 rounded-lg border border-secondary-700 overflow-auto markdown-body">
                {readmeContent ? (
                    <ReactMarkdown>{readmeContent}</ReactMarkdown>
                ) : (
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <p className="text-secondary-300 text-center">README 내용을 불러올 수 없습니다.</p>
                        {readmePath && (
                            <a
                                href={`https://github.com/${readmePath}/blob/master/README.md`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-secondary-700 hover:bg-secondary-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center font-medium"
                            >
                                GitHub에서 README 보기
                                <FaExternalLinkAlt size={14} className="ml-2" />
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}; 