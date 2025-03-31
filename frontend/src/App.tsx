import React, { useState, useEffect } from 'react';
import { Terminal } from './components/Terminal';
import { MobileLayout } from './main/MobileLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 5 * 60 * 1000,
        },
    },
});

const MOBILE_BREAKPOINT = 768;

export const App: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_BREAKPOINT);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <div className="min-h-screen bg-background-dark flex items-center justify-center p-4">
                {isMobile ? <MobileLayout /> : <Terminal />}
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default App;
