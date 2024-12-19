// app/works/layout.tsx
import { ReactNode } from 'react';

export const metadata = {
    title: 'Works',
    description: 'Showcasing my projects and work.',
};

export default function WorksLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            {children}
        </div>
    );
}
