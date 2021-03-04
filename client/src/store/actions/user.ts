import { UserActionTypes, UserState, UserActions } from '@storage/types/user';

export const requestConnectToMetaMaskWallet = (): UserActions => {
    return { type: UserActionTypes.REQUEST_META_MASK_CONNECT_TO_WALLET }
};

export const connectToMetaMaskWallet = (accountAddress: UserState): UserActions => {
    return { type: UserActionTypes.META_MASK_CONNECT_TO_WALLET, payload: { accountAddress } }
};