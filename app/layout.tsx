import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Navigation from './_components/shared/Navigation';
import ThemeProvider from './_components/shared/providers/ThemeProvider';
import SessionAppProvider from './_components/shared/providers/SessionProvider';
import ScrollToTopProvider from './_components/shared/providers/ScrollToTopProvider';
import QueryProvider from './_components/shared/providers/QueryProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Vision Craft',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <ThemeProvider attribute='class'>
                    <SessionAppProvider>
                        <Navigation />
                        <QueryProvider>
                        {children}
                        </QueryProvider>
                        <Toaster />
                        <ScrollToTopProvider />
                    </SessionAppProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
