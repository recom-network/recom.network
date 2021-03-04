import React from 'react';

import { useTitle } from '@hooks/title.hook';
import { InDeveloping } from "@components/InDeveloping";
import { BackToHome } from "@components/BackToHome";

export const Stats: React.FC = () => {
    useTitle('Stats');

    return (
        <main>
            <InDeveloping />
            <BackToHome />
        </main>
    );
};