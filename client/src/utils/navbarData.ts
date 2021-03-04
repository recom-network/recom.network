import { INavbarItems } from '@interfaces/MainNavbar/INavbarItems';
import { DashboardIcon } from '@components/MainNavbar/Icons/Dashboard';
import { VaultsIcon } from '@components/MainNavbar/Icons/Vaults';
import { EarnIcon } from '@components/MainNavbar/Icons/Earn';
import { ZapIcon } from '@components/MainNavbar/Icons/Zap';
import { ExperimentalIcon } from '@components/MainNavbar/Icons/Experimental';
import { LendingIcon } from '@components/MainNavbar/Icons/Lending';
import { StakeEthereumIcon } from '@components/MainNavbar/Icons/StakeEthereum';
import { Keep3rV1JobIcon } from '@components/MainNavbar/Icons/Keep3rV1Job';
import { StatsIcon } from '@components/MainNavbar/Icons/Stats';

export const navbarItems: INavbarItems = {
    items: [
        {
            name: 'Dashboard',
            icon: DashboardIcon,
            description: 'Get a quick glance at how your portfolio is growing while invested in yearn\'s products.',
            link: '/dashboard'
        },
        {
            name: 'Vaults',
            icon: VaultsIcon,
            description: 'Vaults follow unique strategies that are designed to maximize the yield of the deposited asset and minimize risk.',
            link: '/vaults'
        },
        {
            name: 'Earn',
            icon: EarnIcon,
            description: 'Earn performs profit switching for lending providers, moving your funds between dydx, Aave, Compound autonomously.',
            link: '/earn'
        },
        {
            name: 'Zap',
            icon: ZapIcon,
            description: 'Zaps help you save on gas fees. Zap directly into or out of Curve pools from the base assets.',
            link: '/zap'
        },
        {
            name: 'Experimental',
            icon: ExperimentalIcon,
            description: 'Home for experimental vaults.',
            link: '/experimental'
        },
        {
            name: 'Lending',
            icon: LendingIcon,
            description: 'Lending, provided by cream.',
            link: '/lending'
        },
        {
            name: 'Stake Ethereum 2.0',
            icon: StakeEthereumIcon,
            description: 'Private network of Ethereum validators on the recom network',
            link: '/stake-ethereum'
        },
        {
            name: 'Keep3rV1 job',
            icon: Keep3rV1JobIcon,
            description: 'Earn performs profit switching for lending providers, moving your funds between dydx, Aave, Compound autonomously.',
            link: '/keep3rv1-job'
        },
        {
            name: 'Stats',
            icon: StatsIcon,
            description: 'Get a quick glance at how yearn\'s vaults are performing.',
            link: '/stats'
        }
    ]
};