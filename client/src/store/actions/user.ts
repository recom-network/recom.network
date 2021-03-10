import { UserActionTypes, UserState, UserActions } from '@storage/types/user';

export const tryToGetAccountAddress = (): UserActions => {
    return { type: UserActionTypes.TRY_TO_GET_ACCOUNT_ADDRESS }
};

export const requestConnectToMetaMaskWallet = (): UserActions => {
    return { type: UserActionTypes.REQUEST_META_MASK_CONNECT_TO_WALLET }
};

export const requestConnectToTrustWallet = (): UserActions => {
    return { type: UserActionTypes.REQUEST_TRUST_CONNECT_TO_WALLET }
};

export const connectWallet = (accountAddress: UserState): UserActions => {
    return { type: UserActionTypes.CONNECT_WALLET, payload: { accountAddress } }
};