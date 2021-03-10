import React from 'react';

import { useTitle } from '@hooks/title.hook';
import { Navbar } from '@components/Navbar';
import { UserWarning } from '@components/UserWarning';
import { EthCoinAccordion } from "@components/Accordions/EthCoin";
import { connect } from 'react-redux';
import { UserState } from '@/store/types/user';
import { RootState } from '@/store/reducers';
import { NoWalletConnect } from '@components/NoWalletConnect';
import { WalletConnectorModal } from '@components/WalletConnectorModal';

type Props = UserState & any;

const StakeEthereumComponent: React.FC<Props> = (props: Props) => {
    const { accountAddress } = props;

    useTitle('Stake ethereum 2.0');

    return (
        <main>
            <WalletConnectorModal />
            <Navbar />
            <div className='content'>
                <UserWarning />
                { accountAddress ? <EthCoinAccordion /> : <NoWalletConnect /> }
            </div>
        </main>
    );
};

export const StakeEthereum = connect<UserState, null>((state: RootState) => ({
    accountAddress: state.user.accountAddress
}), null)(StakeEthereumComponent);