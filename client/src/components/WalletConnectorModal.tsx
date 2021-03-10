import React from 'react';
import { connect } from 'react-redux';

import { RootState } from '@storage/reducers';
import { isMobileDevice } from '@utils/prototypes';
import { MOBILE_WALLETS, DESKTOP_WALLETS } from '@utils/walletConnectors';
import { closeWalletConnector } from '@storage/actions/modals';
import { ModalsState } from '@storage/types/modals';

const mapDispatch = {
    closeWalletConnector
}

type Props = ModalsState & typeof mapDispatch;

const WalletConnectorModalComponent: React.FC<Props> = (props: Props) => {
    const { isOpenWalletConnector, closeWalletConnector } = props;

    if(isOpenWalletConnector) {
        return (
            <div className='modal-wallet-connector'>
                <div className='modal-wallet-connector__backdrop' />
                <div className='modal-wallet-connector__block'>
                    <div className='modal-wallet-connector__header'>
                        <div className='modal-wallet-connector__title'>Select a Wallet</div>
                        <div className='modal-wallet-connector__close' onClick={closeWalletConnector} />
                    </div>
                    <div className='modal-wallet-connector__body'>
                        <div className='modal-wallet-connector__hint'>
                            Please select a wallet to connect:
                        </div>
                        <div className='modal-wallet-connector__wallets'>
                            {
                                (isMobileDevice() ? MOBILE_WALLETS : DESKTOP_WALLETS).map(wallet => (
                                    <div className='wallet-item' key={wallet.name} onClick={wallet.handler}>
                                        <img src={wallet.icon} alt={wallet.name.toLowerCase()} className='wallet-item__icon' />
                                        <span className='wallet-item__name'>{wallet.name}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}

export const WalletConnectorModal = connect<ModalsState, typeof mapDispatch>((state: RootState) => ({
    isOpenWalletConnector: state.modals.isOpenWalletConnector
}), mapDispatch)(WalletConnectorModalComponent);
