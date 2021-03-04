export const UserActionTypes = {
    REQUEST_META_MASK_CONNECT_TO_WALLET: 'REQUEST_META_MASK_CONNECT_TO_WALLET',
    META_MASK_CONNECT_TO_WALLET: 'META_MASK_CONNECT_TO_WALLET'
} as const;

interface UserStateProperties {
    accountAddress?: string | null
}

interface RequestMetaMaskConnectToWalletAction {
    type: typeof UserActionTypes.REQUEST_META_MASK_CONNECT_TO_WALLET;
}

interface MetaMaskConnectToWalletAction {
    type: typeof UserActionTypes.META_MASK_CONNECT_TO_WALLET;
    payload: any
}

export type UserState = UserStateProperties;
export type UserActions = MetaMaskConnectToWalletAction | RequestMetaMaskConnectToWalletAction;