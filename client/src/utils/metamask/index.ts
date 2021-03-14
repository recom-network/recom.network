import { ethers, utils } from 'ethers';
import { ICoinContracts } from '@interfaces/Contracts/ICoinContracts';
import { WalletControllerInstance } from '@utils/WalletController';

export const getUserWalletBalance: (accountAddress: string, contractAddress: string, coinContractSet: any) => Promise<string | null> = async (accountAddress: string, contractAddress: string, coinContractSet: any) => {
    try {
        const coinContract = new ethers.Contract(contractAddress, (<ICoinContracts> coinContractSet)[contractAddress].abi, WalletControllerInstance.signer);
        const result = await coinContract.balanceOf(accountAddress);
        return utils.formatEther(result);
    } catch (e) {
        console.log(e)
    }
    return null;
};

(() => {
    try {
        WalletControllerInstance.ethereum.on('accountsChanged', () => location.reload());
        WalletControllerInstance.ethereum.on('chainChanged', () => location.reload());
        WalletControllerInstance.ethereum.on('disconnect', () => location.reload());
    } catch (e) {}
})();