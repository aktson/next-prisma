/***** IMPORTS *****/
import { signIn, signOut, useSession } from "next-auth/react";
import React, { FC } from "react";
import Layout from "../components/Layout/Layout";

/***** TYPES *****/
interface HomeProps {}

/***** COMPONENT-FUNCTION *****/
const Home: FC<HomeProps> = (): JSX.Element => {
	const { data: session, status } = useSession();
	console.log("0session", session, status);
	/*** Return statement ***/
	return (
		<Layout>
			Home {JSON.stringify(session)}
			<button onClick={() => signIn("google")}>Sign in with google</button>
		</Layout>
	);
};

export default Home;
