"use client";
/***** IMPORTS *****/
import { MantineProvider } from "@mantine/core";
import React, { FC, ReactNode } from "react";
import "./globals.css";
import Footer from "./Footer";
import Header from "./Header";

/***** TYPES *****/
interface AppProps {
	children: ReactNode;
}

/***** COMPONENT-FUNCTION *****/
const App: FC<AppProps> = ({ children }): JSX.Element => {
	/*** Return statement ***/
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<Header />
			<main>{children}</main>
			<Footer />
		</MantineProvider>
	);
};

export default App;
