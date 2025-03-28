import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { GrArchlinux } from "react-icons/gr";
import { SiSharex, SiMisskey } from "react-icons/si";
import { TbFlame } from "react-icons/tb";

interface ProjectIconProps {
    iconName?: string;
}

export const ProjectIcon: React.FC<ProjectIconProps> = ({ iconName }) => {
    const renderIcon = () => {
        switch (iconName) {
            case 'SiSharex':
                return <SiSharex />;
            case 'SiFlameshot':
                return <TbFlame />;
            case 'SiMisskey':
                return <SiMisskey />;
            case 'GrArchlinux':
                return <GrArchlinux />;
            default:
                return <FaGithub />;
        }
    };

    return renderIcon();
}; 