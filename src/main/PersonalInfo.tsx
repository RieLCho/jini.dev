import React from 'react';

export const PersonalInfo = () => {
    return (
<<<<<<< Updated upstream
        <div className="2xl:space-y-4 xl:space-y-4 lg:space-y-4 md:space-y-2 sm:space-y-2 space-y-2 flex-col pt-10">
            <img
                className="rounded-full 2xl:w-56 2xl:h-56 xl:w-56 xl:h-56 lg:w-56 lg:h-56 md:w-56 md:h-56 sm:w-32 sm:h-32 w-32 h-32"
                src="https://avatars.githubusercontent.com/u/13748138?s=400&u=cfa7aa7b0688ef674d8eb487bbe27af132f39093&v=4"
                alt="profile"
            />
            <div className="font-maple-bold 2xl:text-7xl xl:text-7xl lg:text-5xl md:text-4xl sm:text-2xl text-2xl">
                Yangjin Cho
=======
        <div className="flex flex-col items-center space-y-6 animate-fade-in">
            <div className="relative">
                <img
                    className="w-48 h-48 rounded-full object-cover shadow-card hover:shadow-hover transition-shadow duration-300"
                    src="https://avatars.githubusercontent.com/u/13748138?s=400&u=cfa7aa7b0688ef674d8eb487bbe27af132f39093&v=4"
                    alt="Yangjin Cho"
                />
                <div className="absolute -bottom-2 -right-2 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Available for hire
                </div>
>>>>>>> Stashed changes
            </div>
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-heading font-bold text-secondary-900">
                    Yangjin Cho
                </h1>
                <p className="text-xl text-secondary-600">
                    Student, Front-End Engineer & Gamer
                </p>
                <div className="flex gap-4 justify-center">
                    <a 
                        href="mailto:your.email@example.com"
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                        Email
                    </a>
                    <a 
                        href="https://github.com/RieLCho"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                        GitHub
                    </a>
                    <a 
                        href="https://sheepjin99.tistory.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                        Blog
                    </a>
                </div>
            </div>
        </div>
    );
};
