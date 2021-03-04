import React from 'react';

import { useTitle } from '@hooks/title.hook';
import { Navbar } from '@components/Navbar';
import { UserWarning } from '@components/UserWarning';
import { EthCoinAccordion } from "@components/Accordions/EthCoin";

export const StakeEthereum: React.FC = () => {
    useTitle('Stake ethereum 2.0');

    return (
        <main>
            <Navbar />
            <div className='content'>
                <UserWarning />
                <EthCoinAccordion />
            </div>
        </main>
    );
};