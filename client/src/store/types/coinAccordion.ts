export const CoinAccordionActionTypes = {
    REQUEST_CREATE_DEPOSIT_TRANSACTION: 'REQUEST_CREATE_DEPOSIT_TRANSACTION',
    OPEN_COIN_ACCORDION: 'OPEN_COIN_ACCORDION',
    CLOSE_COIN_ACCORDION: 'CLOSE_COIN_ACCORDION'
} as const;

interface CoinAccordionStateProperties {
    contractCoinAddress?: string | null,
    depositValue?: string | null
}

interface RequestCreateDepositTransactionAction {
    type: typeof CoinAccordionActionTypes.REQUEST_CREATE_DEPOSIT_TRANSACTION,
    payload: any
}

interface OpenCoinAccordionAction {
    type: typeof CoinAccordionActionTypes.OPEN_COIN_ACCORDION,
    payload: any
}

interface CloseCoinAccordionAction {
    type: typeof CoinAccordionActionTypes.CLOSE_COIN_ACCORDION
}

export type CoinAccordionState = CoinAccordionStateProperties;
export type CoinAccordionActions = RequestCreateDepositTransactionAction | OpenCoinAccordionAction | CloseCoinAccordionAction;