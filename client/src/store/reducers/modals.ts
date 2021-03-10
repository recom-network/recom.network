import { ModalsActionTypes, ModalsState, ModalsActions } from '@storage/types/modals';

const initialState: ModalsState = {
    isOpenWalletConnector: false
}

export function modalsReducer(state: ModalsState = initialState, action: ModalsActions): ModalsState {
    switch (action.type) {
        case ModalsActionTypes.OPEN_WALLET_CONNECTOR: return { ...state, isOpenWalletConnector: true } ;
        case ModalsActionTypes.CLOSE_WALLET_CONNECTOR: return { ...state, isOpenWalletConnector: false };
        default: return state;
    }
}