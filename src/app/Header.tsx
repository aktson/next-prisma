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
			<LinkElement href="/">Home</LinkElement>
			<LinkElement href="/about">About</LinkElement>
			<LinkElement href="#">Marketplacs</LinkElement>
			<LinkElement href="#"> Company</LinkElement>
			{/* <Nav setMobileMenuOpen={setMobileMenuOpen} /> */}
			{/* <MobileNav setMobileMenuOpen={setMobileMenuOpen} mobileMenuOpen={mobileMenuOpen} /> */}
		</header>
	);
};

/***** EXPORTS *****/
export default Header;
