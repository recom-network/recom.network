import React from 'react';

import { useTitle } from '@hooks/title.hook';
import { Navbar } from "@components/Navbar";
import { InDeveloping } from "@components/InDeveloping";

export const Vaults: React.FC = () => {
    useTitle('Vaults');

    return (
        <main>
            <Navbar />
            <InDeveloping />
        </main>
    );
};