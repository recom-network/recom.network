import { UserActionTypes, UserState, UserActions } from '@storage/types/user';

const initialState: UserState = {
    accountAddress: null
}

export function userReducer(state: UserState = initialState, action: UserActions): UserState {
    switch (action.type) {
        case UserActionTypes.REQUEST_META_MASK_CONNECT_TO_WALLET: return state;
        case UserActionTypes.REQUEST_TRUST_CONNECT_TO_WALLET: return state;
        case UserActionTypes.CONNECT_WALLET: return { ...state, ...action.payload };
        default: return state;
    }
}