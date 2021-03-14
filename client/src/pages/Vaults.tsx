import React from 'react';
import { connect } from 'react-redux';

import { useTitle } from '@hooks/title.hook';
import { Navbar } from '@components/Navbar';
import { WalletConnectorModal } from '@components/WalletConnectorModal';
import { UserWarning } from '@components/UserWarning';
import { VAULTS_COIN_CONTRACTS } from '@utils/contracts/mainnet';
import { NoWalletConnect } from '@components/NoWalletConnect';
import { UserState } from '@storage/types/user';
import { RootState } from '@storage/reducers';
import { VaultsAccordion } from '@components/Accordions/Vaults';

type Props = UserState & any;

export const VaultsComponent: React.FC = (props: Props) => {
    useTitle('Vaults');

    const { accountAddress } = props;

    return (
        <main>
            <WalletConnectorModal />
            <Navbar />
            <div className='content'>
                <UserWarning />
                {
                    accountAddress ?
                        Object.entries(VAULTS_COIN_CONTRACTS).map(([contractAddress, contractInfo]) => (
                            <VaultsAccordion key={contractAddress} contractAddress={contractAddress} contractName={contractInfo.name} contractCoin={contractInfo.coin} />
                        )) : <NoWalletConnect />
                }
            </div>
        </main>
    );
};

export const Vaults = connect<UserState, null>((state: RootState) => ({
    accountAddress: state.user.accountAddress
}), null)(VaultsComponent);