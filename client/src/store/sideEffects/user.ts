import _ from 'axios';
import { put, call } from '@redux-saga/core/effects';

import { connectWallet } from '@storage/actions/user';
import { isMobileDevice } from '@utils/prototypes';
import { WalletControllerInstance } from '@utils/WalletController';

export function * tryToGetAccountAddressWorker(): Generator<any> {
    try {
        const accountAddress: any = yield call(WalletControllerInstance.getAccountAddress);
        yield put(connectWallet(accountAddress));
    } catch (e) {
        console.log('[ERROR]: tryToGetAccountAddress error');
    }
}

export function * connectToMetaMaskWalletWorker(): Generator<any> {
    try {
        if(isMobileDevice() && !WalletControllerInstance.isExtensionEnable) {
            location.href = 'https://metamask.app.link/dapp/recom.network/';
        } else {
            const accountAddress: any = yield call(connectToMetaMaskWalletProcess);
            yield put(connectWallet(accountAddress));
        }
    } catch (e) {
        console.log('[ERROR]: connectToMetaMaskWallet error');
    }
}

export function * connectToTrustWalletWorker(): Generator<any> {
    try {
        location.href = 'https://link.trustwallet.com/open_url?coin_id=60&url=https://recom.network/';
    } catch (e) {
        console.log('[ERROR]: connectToTrustWallet error');
    }
}

const connectToMetaMaskWalletProcess: () => Promise<string | null> = async () => {
    try {
        return (await WalletControllerInstance.ethereum.request({ method: 'eth_requestAccounts' }))[0];
    } catch {
        throw new Error();
    }
};