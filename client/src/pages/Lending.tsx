import React from 'react';

import { useTitle } from '@hooks/title.hook';
import { Navbar } from "@components/Navbar";
import { InDeveloping } from "@components/InDeveloping";
import { WalletConnectorModal } from '@components/WalletConnectorModal';

export const Lending: React.FC = () => {
    useTitle('Lending');

    return (
        <main>
            <WalletConnectorModal />
            <Navbar />
            <InDeveloping />
        </main>
    );
};