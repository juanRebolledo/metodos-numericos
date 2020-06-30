import React from 'react';

import HeaderNav from './HeaderNav'
import HeaderTitle from './HeaderTitle';
import '../../styles/Header/Header.css'

const Header = () => {
    return (
        <header>
            <HeaderTitle />
            <HeaderNav />
        </header>
    );
};

export default Header;