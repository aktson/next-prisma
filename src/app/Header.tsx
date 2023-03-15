"use client"
/***** IMPORTS *****/
import Nav from '@/components/nav/Nav';
import MobileNav from '@/components/nav/MobileNav';
import React, { FC, useState } from 'react';


/***** INTERFACES *****/
interface HeaderProps {

};


/***** COMPONENT-FUNCTION *****/
const Header: FC<HeaderProps> = (): JSX.Element => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    /** return statement */
    return (
        <header className="bg-white shadow">
            <Nav setMobileMenuOpen={setMobileMenuOpen} />
            <MobileNav setMobileMenuOpen={setMobileMenuOpen} mobileMenuOpen={mobileMenuOpen} />
        </header >
    );
};

/***** EXPORTS *****/
export default Header;