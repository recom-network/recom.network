import store from '@storage/store';
import { requestConnectToMetaMaskWallet, requestConnectToTrustWallet } from '@storage/actions/user';

export const DESKTOP_WALLETS = [
    { name: 'MetaMask', icon: require('@assets/imgs/wallets/metamask').default, handler: () => store.dispatch(requestConnectToMetaMaskWallet()) }
];

export const MOBILE_WALLETS = [
    { name: 'MetaMask', icon: require('@assets/imgs/wallets/metamask').default, handler: () => store.dispatch(requestConnectToMetaMaskWallet()) },
    { name: 'Trust', icon: require('@assets/imgs/wallets/trust').default, handler: () => store.dispatch(requestConnectToTrustWallet()) }
];