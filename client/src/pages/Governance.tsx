import React from 'react';
import { connect } from 'react-redux';

import { useTitle } from '@hooks/title.hook';
import { Navbar } from '@components/Navbar';
import { UserWarning } from '@components/UserWarning';
import { COIN_CONTRACTS } from '@utils/contracts/mainnet';
import CoinAccordion from '@components/Accordions/Coin';
import { UserState } from '@/store/types/user';
import { RootState } from '@/store/reducers';
import { NoWalletConnect } from '@components/NoWalletConnect';

type Props = UserState & any;

const GovernanceComponent: React.FC<Props> = (props: Props) => {
    const { accountAddress } = props;

    useTitle('Governance');

    return (
        <main>
            <Navbar />
            <div className='content'>
                <UserWarning />
                {
                    accountAddress ?
                    Object.entries(COIN_CONTRACTS).map(([contractAddress, contractInfo]) => (
                        <CoinAccordion key={contractAddress} contractAddress={contractAddress} contractName={contractInfo.name} contractCoin={contractInfo.coin} />
                    )) : <NoWalletConnect />
                }
            </div>
        </main>
    );
};

export const Governance = connect<UserState, null>((state: RootState) => ({
    accountAddress: state.user.accountAddress
}), null)(GovernanceComponent);