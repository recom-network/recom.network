import { CoinAccordionActionTypes, CoinAccordionState, CoinAccordionActions } from '@storage/types/coinAccordion';

const initialState: CoinAccordionState = {
    contractCoinAddress: null,
    depositValue: null
}

export function coinAccordionReducer(state: CoinAccordionState = initialState, action: CoinAccordionActions): CoinAccordionState {
    switch (action.type) {
        case CoinAccordionActionTypes.REQUEST_CREATE_DEPOSIT_TRANSACTION: return { ...state, ...action.payload };
        case CoinAccordionActionTypes.OPEN_COIN_ACCORDION: return { ...state, ...action.payload };
        case CoinAccordionActionTypes.CLOSE_COIN_ACCORDION: return { ...state, contractCoinAddress: null };
        default: return state;
    }
}