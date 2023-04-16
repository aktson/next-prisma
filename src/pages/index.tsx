/***** IMPORTS *****/
import { signUp } from "@/constants/actions/actions";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { FC } from "react";
import Layout from "../components/Layout/Layout";

/***** TYPES *****/
interface HomeProps {}

/***** COMPONENT-FUNCTION *****/
const Home: FC<HomeProps> = (): JSX.Element => {
	const { data: session, status } = useSession();

	console.log("session", session);

	const handleGoogleLogin = () => {
		signIn("google");
	};

	/*** Return statement ***/
	return (
		<Layout>
			<h2>Home </h2>
			<div>
				{JSON.stringify(session)}
				<h4>{session ? "LOGGED IN" : "NOT LOGGED IN"}</h4>
			</div>
			<button onClick={handleGoogleLogin}>Sign in with google</button>
			<button onClick={() => signOut()}>Sign out</button>
		</Layout>
	);
};

export default Home;
