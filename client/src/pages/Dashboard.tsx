import React from 'react';

import { useTitle } from '@hooks/title.hook';
import { Navbar } from '@components/Navbar';
import { InDeveloping } from '@components/InDeveloping';

export const Dashboard: React.FC = () => {
    useTitle('Dashboard');

    return (
        <main>
            <Navbar />
            <InDeveloping />
        </main>
    );
};