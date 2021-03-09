import { ethers } from 'ethers';

class WalletController {
    ethereum: any;
    signer: any;
    provider: any;
    isExtensionEnable: boolean = false;

    constructor() {
        if(!(WalletController as any).instance) {
            (WalletController as any).instance = this;
        }

        this.tryFindExtension();

        return (WalletController as any).instance;
    }

    tryFindExtension() {
        if(!this.isExtensionEnable) {
            try {
                this.ethereum = (window as any).ethereum;
                this.provider = new ethers.providers.Web3Provider(this.ethereum);
                this.signer = this.provider.getSigner();
                this.isExtensionEnable = true;
            } catch(e) {
                console.log('[WARNING]: Extension not found!');
            }
        } else {
            console.log('[WARNING]: Extension already found!')
        }
    }
}


export const WalletControllerInstance = new WalletController();