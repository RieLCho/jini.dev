import React from 'react';
import ShareXLogo from '../assets/projects/ShareX.png';
import FlameshotLogo from '../assets/projects/Flameshot.svg';

const ContributionCard = ({ 
    href, 
    label, 
    description,
    logo 
}: { 
    href: string;
    label: string;
    description?: string;
    logo?: string;
}) => {
    return (
        <a 
            href={href} 
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-card p-6 hover:shadow-hover transition-shadow duration-300"
        >
            <div className="flex items-center gap-4">
                {logo && (
                    <div className="w-12 h-12 flex-shrink-0">
                        <img 
                            src={logo} 
                            alt={label}
                            className="w-full h-full object-contain"
                        />
                    </div>
                )}
                <div className="flex-1">
                    <h3 className="text-lg font-heading font-bold text-primary-600">
                        {label}
                    </h3>
                    {description && (
                        <p className="text-secondary-600 mt-1">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </a>
    );
};

const Contributions = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl font-heading font-bold text-secondary-900">
                Contributions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ContributionCard 
                    href="https://github.com/ShareX/ShareX/commits?author=RieLCho" 
                    label="ShareX"
                    description="번역 기여"
                    logo={ShareXLogo}
                />
                
                <ContributionCard 
                    href="https://github.com/flameshot-org/flameshot/commits?author=RieLCho"
                    label="Flameshot"
                    description="번역 기여"
                    logo={FlameshotLogo}
                />
                
                <ContributionCard 
                    href="https://aur.archlinux.org/packages/ttf-proggy-vector" 
                    label="ttf-proggy-vector"
                    description="Arch Linux User Repository 패키지"
                />
                
                <ContributionCard 
                    href="https://aur.archlinux.org/packages/ttf-neodgm-pro" 
                    label="ttf-neodgm-pro"
                    description="Arch Linux User Repository 패키지"
                />
                
                <ContributionCard 
                    href="https://github.com/misskey-dev/misskey/commits?author=RieLcho"
                    label="misskey"
                    description="버그 수정"
                />
            </div>
        </div>
    );
};

export default Contributions;
