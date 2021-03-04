import _ from 'axios';
import { put, call } from '@redux-saga/core/effects';

import { connectToMetaMaskWallet } from '@storage/actions/user';
import { getAccountAddress } from '@utils/metamask';

export function* connectToMetaMaskWalletWorker(): Generator<any> {
    try {
        const accountAddress: any = yield call(connectToMetaMaskWalletProcess);
        yield put(connectToMetaMaskWallet(accountAddress));
    } catch (e) {
        console.log('[ERROR]: connectToMetaMaskWallet error');
    }
}

const connectToMetaMaskWalletProcess: () => Promise<string | null> = async () => (await getAccountAddress());