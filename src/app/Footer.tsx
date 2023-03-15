/***** IMPORTS *****/
import React, { FC } from 'react';


/***** INTERFACES *****/
interface FooterProps {

};


/***** COMPONENT-FUNCTION *****/
const Footer: FC<FooterProps> = (): JSX.Element => {

    /** return statement */
    return (
        <footer className='bg-grey-500 py-8 px-2'>
            <p className="text-center text-gray-500 text-sm">
                &copy;2023 SONI. All rights reserved.
            </p>
        </footer>
    );
};

/***** EXPORTS *****/
export default Footer;