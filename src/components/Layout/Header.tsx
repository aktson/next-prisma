/***** IMPORTS *****/
import Nav from "@/components/nav/Nav";
import React, { FC, useState } from "react";

/***** INTERFACES *****/
interface HeaderProps {}

/***** COMPONENT-FUNCTION *****/
const Header: FC<HeaderProps> = (): JSX.Element => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	/** return statement */
	return (
		<header className="">
			{/* <Nav setMobileMenuOpen={setMobileMenuOpen} /> */}
			<Nav />
		</header>
	);
};

/***** EXPORTS *****/
export default Header;
