export const UserActionTypes = {
    TRY_TO_GET_ACCOUNT_ADDRESS: 'TRY_TO_GET_ACCOUNT_ADDRESS',
    REQUEST_META_MASK_CONNECT_TO_WALLET: 'REQUEST_META_MASK_CONNECT_TO_WALLET',
    REQUEST_TRUST_CONNECT_TO_WALLET: 'REQUEST_TRUST_CONNECT_TO_WALLET',
    CONNECT_WALLET: 'CONNECT_WALLET'
} as const;

interface UserStateProperties {
    accountAddress?: string | null
}

interface TryToGetAccountAddressAction {
    type: typeof UserActionTypes.TRY_TO_GET_ACCOUNT_ADDRESS;
}

interface RequestMetaMaskConnectToWalletAction {
    type: typeof UserActionTypes.REQUEST_META_MASK_CONNECT_TO_WALLET;
}

interface RequestTrustConnectToWalletAction {
    type: typeof UserActionTypes.REQUEST_TRUST_CONNECT_TO_WALLET;
}

interface ConnectToWalletAction {
    type: typeof UserActionTypes.CONNECT_WALLET;
    payload: any
}

export type UserState = UserStateProperties;
export type UserActions = ConnectToWalletAction | RequestMetaMaskConnectToWalletAction | TryToGetAccountAddressAction | RequestTrustConnectToWalletAction;