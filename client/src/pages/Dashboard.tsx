import React from 'react';

import { useTitle } from '@hooks/title.hook';
import { Navbar } from '@components/Navbar';
import { InDeveloping } from '@components/InDeveloping';
import { WalletConnectorModal } from '@components/WalletConnectorModal';

export const Dashboard: React.FC = () => {
    useTitle('Dashboard');

    return (
        <main>
            <WalletConnectorModal />
            <Navbar />
            <InDeveloping />
        </main>
    );
};