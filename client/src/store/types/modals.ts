export const ModalsActionTypes = {
    OPEN_WALLET_CONNECTOR: 'OPEN_WALLET_CONNECTOR',
    CLOSE_WALLET_CONNECTOR: 'CLOSE_WALLET_CONNECTOR'
} as const;

interface ModalsStateProperties {
    isOpenWalletConnector?: boolean
}

interface OpenWalletConnectorAction {
    type: typeof ModalsActionTypes.OPEN_WALLET_CONNECTOR;
}

interface CloseWalletConnectorAction {
    type: typeof ModalsActionTypes.CLOSE_WALLET_CONNECTOR;
}

export type ModalsState = ModalsStateProperties;
export type ModalsActions = OpenWalletConnectorAction | CloseWalletConnectorAction;