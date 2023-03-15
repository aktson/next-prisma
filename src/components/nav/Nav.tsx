/***** IMPORTS *****/
import React, { FC } from 'react';
import PrimaryBtn from '../common/buttons/PrimaryBtn';
import LinkElement from '../common/LinkElement';


/***** INTERFACES *****/
interface NavProps {
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
};


/***** COMPONENT-FUNCTION *****/
const Nav: FC<NavProps> = ({ setMobileMenuOpen }): JSX.Element => {

    /** return statement */
    return (
        <nav className="mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
                <h2>LOGO</h2>
            </div>

            <div className='hidden lg:flex lg:gap-6 '>
                <LinkElement href="/" >Home </LinkElement>
                <LinkElement href="#" >Features</LinkElement>
                <LinkElement href="#" >Marketplacs</LinkElement>
                <LinkElement href="#" > Company</LinkElement>
            </div>
            <div className="flex lg:hidden">
                <PrimaryBtn onClick={() => setMobileMenuOpen(true)} className=" p-2.5">
                    open
                    {/* icon to be added */}
                    {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
                </PrimaryBtn>
            </div>

            <div className='hidden lg:flex lg:flex-1 lg:flex-end '>
                <LinkElement href='/login' className="ml-auto">Log In <span aria-hidden="true">&rarr;</span></LinkElement>
            </div>
        </nav>
    );
};

/***** EXPORTS *****/
export default Nav;