import { ReactNode } from 'react';

export const Title = ({ children }: { children: ReactNode }) => {
    return (
        <div className="text-[rgba(217,115,13,1)] 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-lg font-maple-bold">
            {children}
        </div>
    );
};
export const SubTitle = ({ children }: { children: ReactNode }) => {
    return (
        <div className="2xl:text-xl xl:text-xl lg:text-xl md:text-lg sm:text-sm text-sm font-maple-light">
            {children}
        </div>
    );
};
