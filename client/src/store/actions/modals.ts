import { ModalsActionTypes, ModalsActions } from '@storage/types/modals';

export const openWalletConnector = (): ModalsActions => {
    return { type: ModalsActionTypes.OPEN_WALLET_CONNECTOR }
};

export const closeWalletConnector = (): ModalsActions => {
    return { type: ModalsActionTypes.CLOSE_WALLET_CONNECTOR }
};