import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Routes } from 'react-router-dom';

import { IRouter } from '@interfaces/IRouter';
import { Homepage } from '@pages/Home';
import { Governance } from '@pages/Governance';
import { Dashboard } from '@pages/Dashboard';
import { Vaults } from '@pages/Vaults';
import { Earn } from '@pages/Earn';
import { Zap } from '@pages/Zap';
import { Experimental } from '@pages/Experimental';
import { Lending } from '@pages/Lending';
import { StakeEthereum } from '@pages/StakeEthereum';
import { Keep3rV1Job } from '@pages/Keep3rV1Job';
import { Stats } from '@pages/Stats';

const baseRoutes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/governance' exact component={Governance} />
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/vaults' exact component={Vaults} />
        <Route path='/earn' exact component={Earn} />
        <Route path='/zap' exact component={Zap} />
        <Route path='/experimental' exact component={Experimental} />
        <Route path='/lending' exact component={Lending} />
        <Route path='/stake-ethereum' exact component={StakeEthereum} />
        <Route path='/keep3rv1-job' exact component={Keep3rV1Job} />
        <Route path='/stats' exact component={Stats} />
        <Redirect to='/' />
    </Switch>
);

const useRoutes: React.FC<IRouter> = ({ accessStatus }) => {
    switch(accessStatus) {
        case 'NOT_AUTH_ACCOUNTANT': return baseRoutes(null);
        default: return baseRoutes(null);
    }
};

export const Router: React.FC = () => {
    const currentRoutes = useRoutes({ accessStatus: 'NOT_AUTH_ACCOUNTANT' });
    return (<Routes>{currentRoutes}</Routes>);
};