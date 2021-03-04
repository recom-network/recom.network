import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';

import WalletController from '@components/Wallet/Controller';

export const Navbar: React.FC = () => {

    const [currentResize, setCurrentResize] = useState<number>(document.body.clientWidth);

    const toggleMobileMenu = (): void => {
        let navbarPane = document.querySelector<HTMLElement>('section.navigation').style.display;
        if(!navbarPane) navbarPane = 'none';
        (navbarPane !== 'none') ? closeMobileMenu() : openMobileMenu()
    };

    const openMobileMenu = (): void => {
        document.querySelector<HTMLElement>('section.navigation').style.display = 'flex';
        document.querySelector<HTMLElement>('.menu__controller').style.content = `url('${require("@assets/imgs/components/navbar/close").default}')`;
    };

    const closeMobileMenu = (): void => {
        if(currentResize < 951) {
            document.querySelector<HTMLElement>('section.navigation').style.display = 'none';
            document.querySelector<HTMLElement>('.menu__controller').style.content = `url('${require("@assets/imgs/components/navbar/default").default}')`;
        }
    };

    useEffect(() => {
        (currentResize > 950) ? openMobileMenu() : closeMobileMenu()
    }, [currentResize]);

    const resetSubMenu = (e: any): void => setCurrentResize(e.target.innerWidth);

    useEffect(() => {
        window.removeEventListener('resize', resetSubMenu);
        window.addEventListener('resize', resetSubMenu);
    }, []);

    return (
        <menu>
            <img className='menu__controller' src={require('@assets/imgs/components/navbar/default').default} onClick={toggleMobileMenu.bind(null)} />
            <NavLink to='/' onClick={closeMobileMenu.bind(null)} >
                <section className='logo'>
                    <img src={require('@assets/imgs/logo').default} alt='logo' />
                    <span>recom.network</span>
                </section>
            </NavLink>
            <section className='navigation'>
                <NavLink to='/governance' exact onClick={closeMobileMenu.bind(null)}>
                    <span>governance</span>
                </NavLink>
                <NavLink to='/dashboard' exact onClick={closeMobileMenu.bind(null)}>
                    <span>dashboard</span>
                </NavLink>
                <NavLink to='/vaults' exact onClick={closeMobileMenu.bind(null)}>
                    <span>yield</span>
                </NavLink>
                <NavLink to='/lending' exact onClick={closeMobileMenu.bind(null)}>
                    <span>lending</span>
                </NavLink>
                <NavLink to='/stake-ethereum' exact onClick={closeMobileMenu.bind(null)}>
                    <span>stake ethereum 2.0</span>
                </NavLink>
                <WalletController />
            </section>
        </menu>
    );
};