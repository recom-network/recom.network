import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { IAccordionCoinProps } from '@interfaces/Accordions/IAccordionCoinProps';
import { CoinAccordionState } from '@storage/types/coinAccordion';
import { UserState } from '@storage/types/user';
import { requestCreateDepositTransaction, openCoinAccordion, closeCoinAccordion } from '@storage/actions/coinAccordion';
import { RootState } from '@storage/reducers';
import { getUserWalletBalance } from '@utils/metamask';

import { VAULTS_COIN_CONTRACTS } from '@utils/contracts/mainnet';

interface DispatchProps {
    openCoinAccordion?: (contractAddress: string) => void,
    requestCreateDepositTransaction?: (contractAddress: string, depositValue: string) => void,
    closeCoinAccordion?: () => void,
}

type Props = CoinAccordionState & UserState & DispatchProps & IAccordionCoinProps;

export const VaultsAccordionComponent: React.FC<Props> = (props: Props) => {
    const { contractAddress, contractName, contractCoin, contractCoinAddress, openCoinAccordion, closeCoinAccordion, accountAddress } = props;

    const [currentBalance, setCurrentBalance] = useState(null);
    const [depositValue, setDepositValue] = useState('');
    const [withdrawValue, setWithdrawValue] = useState('');

    const toggleAccordion = () => {
        (contractCoinAddress !== contractAddress) ? openCoinAccordion(contractAddress) : closeCoinAccordion();
    };

    useEffect(() => {
        (async () => {
            const result = await getUserWalletBalance(accountAddress, contractAddress, VAULTS_COIN_CONTRACTS);
            setCurrentBalance(result);
        })();
    });

    const handleCreateDepositTransaction = async (e: any) => {
        e.preventDefault();
    };

    return (
        <div className='content__accordion-coin'>
            <header onClick={toggleAccordion}>
                <div className='content__accordion-coin__info'>
                    <img src={require(`@assets/imgs/coins/${contractCoin}`).default} alt={`coin ${contractCoin}`}  />
                    <div>
                        <a href={`https://etherscan.io/address/${contractAddress}`} target='_blank' onClick={e => e.stopPropagation()}>{contractName}</a>
                        <span>{contractCoin}</span>
                    </div>
                </div>
                <div className='content__accordion-coin__controller'>
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
                        <span>{(!currentBalance) ? '~' : currentBalance.substr(0, 6)}</span>
                    </div>
                    <form className='content__accordion-coin__content__transaction' onSubmit={handleCreateDepositTransaction}>
                        <div className='input-with-max'>
                            <input type='text' placeholder='0.00' value={depositValue} onChange={(e: any) => setDepositValue(e.target.value)} />
                            <span onClick={() => setDepositValue(currentBalance.substr(0, 6))}>MAX</span>
                        </div>
                        <input type='submit' value='Deposit' />
                    </form>
                    <div className='content__accordion-coin__content__wallet-info second'>
                        <span>Vaults balance: </span>
                        <span>~</span>
                    </div>
                    <form className='content__accordion-coin__content__transaction' onSubmit={() => {}}>
                        <div className='input-with-max'>
                            <input type='text' placeholder='0.00' value={withdrawValue} onChange={(e: any) => setWithdrawValue(e.target.value)} />
                            <span>MAX</span>
                        </div>
                        <input type='submit' value='Withdraw' />
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
    closeCoinAccordion: () => (closeCoinAccordion())
}

export const VaultsAccordion = connect<any>(mapProps, mapDispatch)(VaultsAccordionComponent);