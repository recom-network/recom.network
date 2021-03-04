import React from 'react';

import { useTitle } from '@hooks/title.hook';
import { Navbar } from '@components/Navbar';
import { UserWarning } from '@components/UserWarning';
import { COIN_CONTRACTS } from '@utils/contracts/mainnet';
import CoinAccordion from '@components/Accordions/Coin';

export const Governance: React.FC = () => {
    useTitle('Governance');

    return (
        <main>
            <Navbar />
            <div className='content'>
                <UserWarning />
                {
                    Object.entries(COIN_CONTRACTS).map(([contractAddress, contractInfo]) => (
                        <CoinAccordion key={contractAddress} contractAddress={contractAddress} contractName={contractInfo.name} contractCoin={contractInfo.coin} />
                    ))
                }
            </div>
        </main>
    );
};