import React from 'react';

import { useTitle } from '@hooks/title.hook';
import { Navbar } from '@components/Navbar';
import { InDeveloping } from '@components/InDeveloping';
import { WalletConnectorModal } from '@components/WalletConnectorModal';

export const Vaults: React.FC = () => {
    useTitle('Vaults');

    return (
        <main>
            <WalletConnectorModal />
            <Navbar />
            <InDeveloping />
        </main>
    );
};