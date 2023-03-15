/***** IMPORTS *****/
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';


/***** INTERFACES *****/
interface LinkElementProps {
    children: ReactNode;
    href: string,
    className?: string | string[]
};


/***** COMPONENT-FUNCTION *****/
const LinkElement: FC<LinkElementProps> = ({ children, href, className }): JSX.Element => {

    /** return statement */
    return (
        <Link href={href} className={`text-sm font-semibold leading-6 text-gray-900 ${className}`}>
            {children}
        </Link>
    );
};

/***** EXPORTS *****/
export default LinkElement;