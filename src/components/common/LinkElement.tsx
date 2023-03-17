/***** IMPORTS *****/
import Link from "next/link";
import React, { FC, ReactNode } from "react";

/***** INTERFACES *****/
interface LinkElementProps {
	children: ReactNode;
	href: string;
	className?: string | string[];
}

/***** COMPONENT-FUNCTION *****/
const LinkElement: FC<LinkElementProps> = ({ children, href, className }): JSX.Element => {
	/** return statement */
	return (
		<Link href={href} className={`${className}`}>
			{children}
		</Link>
	);
};

/***** EXPORTS *****/
export default LinkElement;
