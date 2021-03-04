import { FC } from 'react';

export interface INavbarItem {
    name: string;
    icon: FC;
    description: string;
    link: string;
}