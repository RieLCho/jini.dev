import { ReactNode } from 'react';

export const Italic = ({ children }: { children: ReactNode }) => {
    return (
        <div className="italic 2xl:text-xl xl:text-xl lg:text-xl md:text-lg sm:text-sm text-sm text-gray-400 font-maple-light">
            {children}
        </div>
    );
};
