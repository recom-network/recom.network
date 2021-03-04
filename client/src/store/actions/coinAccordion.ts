import { CoinAccordionActionTypes, CoinAccordionState, CoinAccordionActions } from '@storage/types/coinAccordion';

export const requestCreateDepositTransaction = (contractCoinAddress: CoinAccordionState, depositValue: CoinAccordionState): CoinAccordionActions => {
    return {
        type: CoinAccordionActionTypes.REQUEST_CREATE_DEPOSIT_TRANSACTION,
        payload: {
            contractCoinAddress,
            depositValue
        }
    }
};

export const openCoinAccordion = (contractCoinAddress: CoinAccordionState): CoinAccordionActions => {
    return {
        type: CoinAccordionActionTypes.OPEN_COIN_ACCORDION,
        payload: {
            contractCoinAddress
        }
    }
};

export const closeCoinAccordion = (): CoinAccordionActions => {
    return {
        type: CoinAccordionActionTypes.CLOSE_COIN_ACCORDION,
    }
};