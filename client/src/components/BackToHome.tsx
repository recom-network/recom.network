import React from 'react';
import { NavLink } from "react-router-dom";

export const BackToHome: React.FC = () => (
    <NavLink to='/' className='back-to-homepage__btn'>
        <span>Back to homepage</span>
    </NavLink>
);