import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { UserState } from '@storage/types/user';
import { tryToGetAccountAddress } from '@storage/actions/user';
import { openWalletConnector } from '@storage/actions/modals';
import { RootState } from '@storage/reducers';

const mapDispatch = {
    openWalletConnector,
    tryToGetAccountAddress
}

type Props = UserState & typeof mapDispatch;

const shortAccountAddress = (currentAccountAddress: string): string => (`${currentAccountAddress.substr(0, 6)}...${currentAccountAddress.substr(38)}`);

const WalletController: React.FC<Props> = (props: Props) => {
    const { accountAddress, openWalletConnector, tryToGetAccountAddress } = props;

    useEffect(() => {
        tryToGetAccountAddress();
    }, [])

    return (
        <div className='wallet-controller' onClick={openWalletConnector}>
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