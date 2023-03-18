/***** IMPORTS *****/
import Nav from "@/components/nav/Nav";
import MobileNav from "@/components/nav/MobileNav";
import React, { FC, useState } from "react";
import LinkElement from "@/components/common/LinkElement";

/***** INTERFACES *****/
interface HeaderProps {}

/***** COMPONENT-FUNCTION *****/
const Header: FC<HeaderProps> = (): JSX.Element => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	/** return statement */
	return (
		<header className="">
			{/* <Nav setMobileMenuOpen={setMobileMenuOpen} /> */}
			<MobileNav />
		</header>
	);
};

/***** EXPORTS *****/
export default Header;
