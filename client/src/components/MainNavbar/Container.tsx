import React from 'react';
import { NavLink } from 'react-router-dom';

import { INavbarItem } from '@interfaces/MainNavbar/INavbarItem';
import { navbarItems } from '@utils/navbarData';

export const MainNavbar: React.FC = () => {
    return (
        <nav>
            {
                navbarItems.items.map(({ name, icon, description, link }: INavbarItem) =>
                    <NavLink to={`${link}`} key={`${name}#${description}`}>
                        { icon(null) }
                        <h3>{name}</h3>
                        <h4>{description}</h4>
                    </NavLink>
                )
            }
        </nav>
    );
}