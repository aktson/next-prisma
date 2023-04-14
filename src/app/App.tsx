"use client";
/***** IMPORTS *****/
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import React, { FC, ReactNode } from "react";
import "./styles/globals.css";
import Footer from "./Footer";
import Header from "./Header";
import { myTheme } from "./styles/theme";
import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth";

/***** TYPES *****/
interface AppProps {
	children: ReactNode;
}

/***** COMPONENT-FUNCTION *****/
const App: FC<AppProps> = ({ children }, session: Session | null | undefined): JSX.Element => {
	/*** Return statement ***/
	return (

		<SessionProvider session={session}>
			<MantineProvider withGlobalStyles withNormalizeCSS theme={myTheme}>
				<Header />
				<main>{children}</main>
				<Footer />
			</MantineProvider>
		</SessionProvider>
	);
};

export default App;
