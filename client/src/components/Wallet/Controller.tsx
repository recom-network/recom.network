import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { UserState } from '@storage/types/user';
import { requestConnectToMetaMaskWallet } from '@storage/actions/user';
import { RootState } from '@storage/reducers';

const mapDispatch = {
    requestConnectToMetaMaskWallet
}

type Props = UserState & typeof mapDispatch;

const shortAccountAddress = (currentAccountAddress: string): string => (`${currentAccountAddress.substr(0, 6)}...${currentAccountAddress.substr(38)}`);

const WalletController: React.FC<Props> = (props: Props) => {
    const { requestConnectToMetaMaskWallet, accountAddress } = props;

    useEffect(() => {
        requestConnectToMetaMaskWallet();
    }, []);

    return (
        <div className='wallet-controller' onClick={requestConnectToMetaMaskWallet.bind(null)}>
            {
                (accountAddress) ?
                    <>
                        <div className='wallet-controller__indicator' />
                        <span>{shortAccountAddress(accountAddress)}</span>
                    </> :
                    <span>Connect wallet</span>
            }
        </div>
    );
};

export default connect<UserState, typeof mapDispatch>((state: RootState) => ({
    accountAddress: state.user.accountAddress
}), mapDispatch)(WalletController);