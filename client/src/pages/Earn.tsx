import React from 'react';

import { useTitle } from '@hooks/title.hook';
import { InDeveloping } from '@components/InDeveloping';
import { BackToHome } from '@components/BackToHome';

export const Earn: React.FC = () => {
    useTitle('Earn');

    return (
        <main>
            <InDeveloping />
            <BackToHome />
        </main>
    );
};