import React, { Suspense } from 'react';
import { Terminal } from './components/Terminal';
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

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="min-h-screen bg-background-dark flex items-center justify-center p-4">
                <Suspense fallback={<div className="text-white">Loading...</div>}>
                    <Terminal />
                </Suspense>
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default App;
