/***** IMPORTS *****/
import React, { FC, ReactNode } from 'react';
import Spinner from '../Spinner';


/***** INTERFACES *****/
interface PrimaryBtnProps {
    children: string | ReactNode,
    disabled?: boolean;
    className?: string | string[];
    isSubmitting?: boolean
};


/***** COMPONENT-FUNCTION *****/
const PrimaryBtn: FC<PrimaryBtnProps> = ({ className, disabled, children, isSubmitting }): JSX.Element => {

    /** return statement */
    return (
        <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in flex gap-2 ${className}`} disabled={disabled}>
            {isSubmitting && <Spinner />}
            {children}
        </button>
    );
};

/***** EXPORTS *****/
export default PrimaryBtn;