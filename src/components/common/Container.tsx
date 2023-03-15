/***** IMPORTS *****/
import React, {FC, ReactNode} from 'react';


/***** INTERFACES *****/
interface ContainerProps {
  children:ReactNode
};


/***** COMPONENT-FUNCTION *****/
const Container: FC<ContainerProps> = ({children}): JSX.Element => {

    /** return statement */
    return (
        <div className='lg:container mx-auto '>
           {children}
        </div>
    );
};

/***** EXPORTS *****/
export default Container;