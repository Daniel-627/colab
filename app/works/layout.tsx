

// app/works/layout.tsx
import WorksBanner from '@/components/WorksBanner';
import WorksNav from '@/components/WorksNav';
import { ReactNode } from 'react';


export const metadata = {
    title: 'Works',
    description: 'Our wall of fame',
};

export default function WorksLayout({ children }: { children: ReactNode }) {
    return (
        <div className='bg-gray-100 min-h-screen overflow-hidden'>
            {children}
        </div>
    );
}
