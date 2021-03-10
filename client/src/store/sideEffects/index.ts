import { takeEvery } from '@redux-saga/core/effects';

import { UserActionTypes } from '@storage/types/user';
import { connectToMetaMaskWalletWorker, tryToGetAccountAddressWorker, connectToTrustWalletWorker } from '@storage/sideEffects/user';
import { CoinAccordionActionTypes } from '@storage/types/coinAccordion';
import { createDepositTransactionWorker } from '@storage/sideEffects/coinAccordion';

export function * rootSagaWatcher() {
    yield takeEvery(UserActionTypes.TRY_TO_GET_ACCOUNT_ADDRESS, tryToGetAccountAddressWorker);
    yield takeEvery(UserActionTypes.REQUEST_META_MASK_CONNECT_TO_WALLET, connectToMetaMaskWalletWorker);
    yield takeEvery(UserActionTypes.REQUEST_TRUST_CONNECT_TO_WALLET, connectToTrustWalletWorker);

    yield takeEvery(CoinAccordionActionTypes.REQUEST_CREATE_DEPOSIT_TRANSACTION, createDepositTransactionWorker);
}