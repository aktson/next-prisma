/***** IMPORTS *****/
import React, { FC } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import PrimaryBtn from "@/components/common/buttons/PrimaryBtn";
import SEcondaryBtn from "@/components/common/buttons/SecondaryBtn";

/***** TYPES *****/
interface HomeProps {}

/***** COMPONENT-FUNCTION *****/
const Home: FC<HomeProps> = (): JSX.Element => {
	/*** Return statement ***/
	return (
		<div>
			HOME
			<PrimaryBtn>Soni</PrimaryBtn>
			<SEcondaryBtn>Ankit</SEcondaryBtn>
		</div>
	);
};

export default Home;
