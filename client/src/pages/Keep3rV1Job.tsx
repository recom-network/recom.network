import React from 'react';

import { useTitle } from '@hooks/title.hook';
import { InDeveloping } from '@components/InDeveloping';
import { BackToHome } from '@components/BackToHome';

export const Keep3rV1Job: React.FC = () => {
    useTitle('Keep3rV1 job');

    return (
        <main>
            <InDeveloping />
            <BackToHome />
        </main>
    );
};