"use client";
/***** IMPORTS *****/
import React, { FC } from "react";
import { createStyles } from "@mantine/core";
import { TextInput, PasswordInput, Text, Paper, Group, Divider, Stack, Container } from "@mantine/core";
import SecondaryBtn from "@/components/common/buttons/SecondaryBtn";
import PrimaryBtn from "@/components/common/buttons/PrimaryBtn";
import LinkElement from "@/components/common/LinkElement";

/***** INTERFACES *****/
interface pageProps {}

const useStyles = createStyles((theme) => ({
	link: {
		color: theme.colors.blue[5],
		marginLeft: "0.2em",
	},
}));
/***** COMPONENT-FUNCTION *****/
const Login: FC<pageProps> = (): JSX.Element => {
	const { classes } = useStyles();

	/** return statement */
	return (
		<Container size="30rem">
			<Paper radius="md" p="lg" withBorder>
				<h1 style={{ marginBottom: "1em" }}>Login</h1>

				<form onSubmit={() => console.log("submitting")}>
					<Stack spacing="sm">
						<TextInput
							label="Email"
							placeholder="hello@mantine.dev"
							value=""
							// error={"Invalid email"}
							radius="md"
						/>

						<PasswordInput
							label="Password"
							placeholder="Your password"
							value=""
							// error={"Password should include at least 6 characters"}
							radius="md"
						/>
					</Stack>

					<Group position="apart" mt="xl">
						<PrimaryBtn type="submit" fullWidth={true}>
							login
						</PrimaryBtn>
						<Text size="xs" mt="0em" align="right">
							Do not have an account?
							<LinkElement href="/signup" className={classes.link}>
								Register
							</LinkElement>
						</Text>
					</Group>
				</form>

				<Divider label="Or continue with" labelPosition="center" my="lg" />

				<Group grow mb="md" mt="md">
					<SecondaryBtn>Google</SecondaryBtn>
					<SecondaryBtn>Twitter</SecondaryBtn>
				</Group>
			</Paper>
		</Container>
	);
};

/***** EXPORTS *****/
export default Login;
