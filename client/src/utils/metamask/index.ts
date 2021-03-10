import { ethers, utils } from 'ethers';
import { COIN_CONTRACTS } from '@utils/contracts/mainnet';
import { ICoinContracts } from '@interfaces/Contracts/ICoinContracts';
import { WalletControllerInstance } from '@utils/WalletController';

export const getUserWalletBalance: (accountAddress: string, contractAddress: string) => Promise<string | null> = async (accountAddress: string, contractAddress: string) => {
    try {
        const coinContract = new ethers.Contract(contractAddress, (<ICoinContracts> COIN_CONTRACTS)[contractAddress].abi, WalletControllerInstance.signer);
        const result = await coinContract.balanceOf(accountAddress);
        return utils.formatEther(result);
    } catch (e) {}
    return null;
};

(() => {
    try {
        WalletControllerInstance.ethereum.on('accountsChanged', () => location.reload());
        WalletControllerInstance.ethereum.on('chainChanged', () => location.reload());
        WalletControllerInstance.ethereum.on('disconnect', () => location.reload());
    } catch (e) {}
})();