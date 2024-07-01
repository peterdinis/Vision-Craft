'use client';

import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface IQueryProviderProps {
    children?: ReactNode;
}

const QueryProvider: FC<IQueryProviderProps> = ({
    children,
}: IQueryProviderProps) => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default QueryProvider;
