import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { IAccordionCoinProps } from '@interfaces/Accordions/IAccordionCoinProps';
import { CoinAccordionState } from '@storage/types/coinAccordion';
import { UserState } from '@storage/types/user';
import { requestCreateDepositTransaction, openCoinAccordion, closeCoinAccordion } from '@storage/actions/coinAccordion';
import { RootState } from '@storage/reducers';
import { getUserWalletBalance } from '@utils/metamask';

interface DispatchProps {
    openCoinAccordion?: (contractAddress: string) => void,
    requestCreateDepositTransaction?: (contractAddress: string, depositValue: string) => void,
    closeCoinAccordion?: () => void,
}

type Props = CoinAccordionState & UserState & DispatchProps & IAccordionCoinProps;

export const CoinAccordion: React.FC<Props> = (props: Props) => {
    const { contractAddress, contractName, contractCoin, contractCoinAddress, openCoinAccordion, closeCoinAccordion, accountAddress, requestCreateDepositTransaction } = props;

    const [currentBalance, setCurrentBalance] = useState(null);
    const [depositValue, setDepositValue] = useState('');

    const toggleAccordion = () => {
        (contractCoinAddress !== contractAddress) ? openCoinAccordion(contractAddress) : closeCoinAccordion();
    };

    useEffect(() => {
        (async () => {
            const result = await getUserWalletBalance(accountAddress, contractAddress);
            setCurrentBalance(result);
        })();
    });

    const handleCreateDepositTransaction = async (e: any) => {
        e.preventDefault();
        await requestCreateDepositTransaction(contractAddress, depositValue);
    };

    return (
        <div className='content__accordion-coin'>
            <header>
                <div className='content__accordion-coin__info'>
                    <img src={require(`@assets/imgs/coins/${contractCoin}`).default} alt={`coin ${contractCoin}`}  />
                    <div>
                        <a href={`https://etherscan.io/address/${contractAddress}`}>{contractName}</a>
                        <span>{contractCoin}</span>
                    </div>
                </div>
                <div className='content__accordion-coin__controller' onClick={toggleAccordion}>
                    <img src={require(`@assets/imgs/components/accordions/arrow`).default} alt='arrow' className={
                        (contractCoinAddress === contractAddress) ? 'opened' : ''
                    } />
                </div>
            </header>
            {
                (contractCoinAddress === contractAddress) &&
                <section className='content__accordion-coin__content'>
                    <div className='content__accordion-coin__content__wallet-info'>
                        <span>Your wallet: </span>
                        <span>{(!currentBalance) ? '~' : currentBalance}</span>
                    </div>
                    <form className='content__accordion-coin__content__transaction' onSubmit={handleCreateDepositTransaction}>
                        <input type="text" placeholder='0.00' value={depositValue} onChange={(e: any) => setDepositValue(e.target.value)} />
                        <input type="submit" value='Deposit' />
                    </form>
                </section>
            }
        </div>
    );
};

const mapProps = (state: RootState) => ({
    contractCoinAddress: state.coinAccordion.contractCoinAddress,
    accountAddress: state.user.accountAddress,
});

const mapDispatch = {
    openCoinAccordion: (contractAddress: CoinAccordionState) => (openCoinAccordion(contractAddress)),
    closeCoinAccordion: () => (closeCoinAccordion()),
    requestCreateDepositTransaction: (contractAddress: CoinAccordionState, depositValue: CoinAccordionState) => (requestCreateDepositTransaction(contractAddress, depositValue)),
}

export default connect<any>(mapProps, mapDispatch)(CoinAccordion);