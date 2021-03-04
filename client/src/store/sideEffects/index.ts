import { takeEvery } from '@redux-saga/core/effects';

import { UserActionTypes } from '@storage/types/user';
import { connectToMetaMaskWalletWorker } from '@storage/sideEffects/user';
import { CoinAccordionActionTypes } from '@storage/types/coinAccordion';
import { createDepositTransactionWorker } from '@storage/sideEffects/coinAccordion';

export function * rootSagaWatcher() {
    yield takeEvery(UserActionTypes.REQUEST_META_MASK_CONNECT_TO_WALLET, connectToMetaMaskWalletWorker);
    yield takeEvery(CoinAccordionActionTypes.REQUEST_CREATE_DEPOSIT_TRANSACTION, createDepositTransactionWorker);
}