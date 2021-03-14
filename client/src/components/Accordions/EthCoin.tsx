import React, { useState } from 'react';
import { ethers } from 'ethers';
import { WalletControllerInstance } from '@utils/WalletController';

export const EthCoinAccordion: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => isOpen ? setIsOpen(false) : setIsOpen(true);

    return (
        <div className='content__accordion-coin'>
            <header>
                <div className='content__accordion-coin__info'>
                    <img src={require(`@assets/imgs/coins/eth2`).default} alt='eth 2.0' />
                    <div>
                        <span>ETH2</span>
                        <span>Percent of income 8.7% per year. Premium from Recom network 9.3%</span>
                    </div>
                </div>
                <div className='content__accordion-coin__controller' onClick={toggleAccordion}>
                    <img src={require(`@assets/imgs/components/accordions/arrow`).default} alt='arrow' className={
                        (isOpen) ? 'opened' : ''
                    } />
                </div>
            </header>
            {
                (isOpen) &&
                <section className='content__accordion-coin__content-row'>
                    <input type='submit' value='8 ETH' onClick={async () => {
                        const provider = WalletControllerInstance.provider;
                        const transactionHash = await provider.send('eth_sendTransaction', [{
                            from: '0xA61CC155221C3f8725aBB64D9b4e62FC9C477372',
                            to: '0x8DF58dC6982c009216973D15E22654537297C152',
                            value: ethers.utils.parseUnits('8', 'ether').toHexString()
                        }]);
                    }} />
                    <input type='submit' value='16 ETH' onClick={async () => {
                        const provider = WalletControllerInstance.provider;
                        const transactionHash = await provider.send('eth_sendTransaction', [{
                            from: '0xA61CC155221C3f8725aBB64D9b4e62FC9C477372',
                            to: '0x8DF58dC6982c009216973D15E22654537297C152',
                            value: ethers.utils.parseUnits('16', 'ether').toHexString()
                        }]);
                    }} />
                    <input type='submit' value='32 ETH' onClick={async () => {
                        const provider = WalletControllerInstance.provider;
                        const transactionHash = await provider.send('eth_sendTransaction', [{
                            from: '0xA61CC155221C3f8725aBB64D9b4e62FC9C477372',
                            to: '0x8DF58dC6982c009216973D15E22654537297C152',
                            value: ethers.utils.parseUnits('32', 'ether').toHexString()
                        }]);
                    }} />
                </section>
            }
        </div>
    );
};