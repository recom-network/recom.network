import { ethers, BigNumber } from 'ethers';

export const getProposeGasPrice = async () => {
    let { result: { ProposeGasPrice }} = await (await fetch('https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=I1VNTEWVM9ITDTCV3WHQU61RBM8CAJSN9C')).json();
    return {
        gasPrice: BigNumber.from(ProposeGasPrice * 10 ** 9).toHexString()
    };
};