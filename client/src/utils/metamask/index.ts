import { ethers } from 'ethers';
import { COIN_CONTRACTS } from '@utils/contracts/mainnet';
import { ICoinContracts } from "@interfaces/Contracts/ICoinContracts";

export const initEthereumAndEthers = (): any => {
    const ethereum: any = (window as any).ethereum;
    const ethersProvider = new ethers.providers.Web3Provider(ethereum);
    const ethersSigner = ethersProvider.getSigner();
    const provider = new ethers.providers.Web3Provider(ethereum);

    return {
        ethereum,
        ethersProvider,
        ethersSigner,
        provider
    };
};

export const getAccountAddress: () => Promise<string | null> = async () => {
    let accountAddress;
    try {
        const { ethereum } = initEthereumAndEthers();
        accountAddress = (await ethereum.request({ method: 'eth_requestAccounts' }))[0];
    } catch (e) {
        throw new Error();
    }
    return accountAddress;
};

export const getUserWalletBalance: (accountAddress: string, contractAddress: string) => Promise<string | null> = async (accountAddress: string, contractAddress: string) => {
    try {
        const { ethersSigner } = initEthereumAndEthers();
        const coinContract = new ethers.Contract(contractAddress, (<ICoinContracts> COIN_CONTRACTS)[contractAddress].abi, ethersSigner);
        const result = await coinContract.balanceOf(accountAddress);
        return (BigInt(result) / (BigInt(10 ** 18))).toString();
    } catch (e) {}
    return null;
};

(() => {
    try {
        const { ethereum } = initEthereumAndEthers();
        ethereum.on('accountsChanged', () => location.reload());
        ethereum.on('chainChanged', () => location.reload());
        ethereum.on('disconnect', () => location.reload());
    } catch (e) {}
})();