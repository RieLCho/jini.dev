import { ReactNode } from 'react';

export const Dot = ({ children }: { children: ReactNode }) => {
    return <div>&bull; {children}</div>;
};
