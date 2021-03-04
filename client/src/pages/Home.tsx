import React from 'react';

import { useTitle } from '@hooks/title.hook';
import { MainNavbar } from '@components/MainNavbar/Container';

export const Homepage: React.FC = () => {
    useTitle('Recom');
    return <MainNavbar />;
};