import _ from 'axios';
import { put, call } from '@redux-saga/core/effects';

import { connectToMetaMaskWallet } from '@storage/actions/user';
import { getAccountAddress } from '@utils/metamask';
import { isMobileDevice } from '@utils/prototypes';
import { WalletControllerInstance } from '@utils/WalletController';

export function* connectToMetaMaskWalletWorker(): Generator<any> {
    try {
        if(isMobileDevice() && !WalletControllerInstance.isExtensionEnable) {
            location.href = 'https://metamask.app.link/dapp/recom.network/';
        } else {
            const accountAddress: any = yield call(connectToMetaMaskWalletProcess);
            yield put(connectToMetaMaskWallet(accountAddress));
        }
    } catch (e) {
        console.log('[ERROR]: connectToMetaMaskWallet error');
    }
}

const connectToMetaMaskWalletProcess: () => Promise<string | null> = async () => (await getAccountAddress());