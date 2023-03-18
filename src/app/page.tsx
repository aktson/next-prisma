/***** IMPORTS *****/
import React, { FC } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

/***** TYPES *****/
interface HomeProps {}

/***** COMPONENT-FUNCTION *****/
const Home: FC<HomeProps> = (): JSX.Element => {
	/*** Return statement ***/
	return (
		<div>
			HOME
			<h1>h1</h1>
			<h2>h2</h2>
			<h3>h3</h3>
			<h4>h4</h4>
			<h5>h5</h5>
		</div>
	);
};

export default Home;
