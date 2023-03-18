"use client";
/***** IMPORTS *****/
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import React, { FC, ReactNode } from "react";
import "./styles/globals.css";
import Footer from "./Footer";
import Header from "./Header";
import { myTheme } from "./styles/theme";

/***** TYPES *****/
interface AppProps {
	children: ReactNode;
}

/***** COMPONENT-FUNCTION *****/
const App: FC<AppProps> = ({ children }): JSX.Element => {
	/*** Return statement ***/
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS theme={myTheme}>
			<Header />
			<main>{children}</main>
			<Footer />
		</MantineProvider>
	);
};

export default App;
