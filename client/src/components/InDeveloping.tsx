import React from 'react';

export const InDeveloping: React.FC = () => (
    <section className='in-developing__container'>
        <img src={require('@assets/imgs/components/inDeveloping').default} alt='In developing' />
        <h2>This page is not yet ready</h2>
    </section>
);