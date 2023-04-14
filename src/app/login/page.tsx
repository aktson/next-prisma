"use client";
/***** IMPORTS *****/
import React, { FC, useState } from "react";
import { Button, createStyles } from "@mantine/core";
import { TextInput, PasswordInput, Text, Paper, Group, Divider, Stack, Container } from "@mantine/core";
import SecondaryBtn from "@/components/common/buttons/SecondaryBtn";
import PrimaryBtn from "@/components/common/buttons/PrimaryBtn";
import LinkElement from "@/components/common/LinkElement";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/constants/yupSchema/loginSchema";
import { IconEyeCheck, IconEyeOff } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

/***** INTERFACES *****/
interface pageProps {}

interface LoginFormValues {
	email: string;
	password: string;
}

const useStyles = createStyles((theme) => ({
	link: {
		color: theme.colors.blue[5],
		marginLeft: "0.2em",
	},
}));
/***** COMPONENT-FUNCTION *****/
const Login: FC<pageProps> = (): JSX.Element => {
	const { classes } = useStyles();

	const [visible, { toggle }] = useDisclosure(false);

	/***States ***/
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	/*** variables ***/
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormValues>({ resolver: yupResolver(loginSchema) });

	/*** functions ***/
	const handleFormSubmit = (data: LoginFormValues) => {
		setIsSubmitting(true);
		console.log("data", data);

		// try {
		// 	const { email, password } = data;
		// 	if (!email && !password) return;
		// } catch (error) {
		// 	console.log("error", error);
		// } finally {
		// 	setIsSubmitting(false);
		// }
	};

	/** return statement */
	return (
		<Container size="30rem">
			<Paper radius="md" p="lg" withBorder>
				<h1 style={{ marginBottom: "1em" }}>Login</h1>

				<form onSubmit={handleSubmit(handleFormSubmit)}>
					<Stack spacing="sm">
						<TextInput {...register("email")} label="Email" placeholder="email" error={errors?.email?.message} radius="md" />

						<PasswordInput
							{...register("password")}
							label="Password"
							placeholder="Your password"
							error={errors?.password?.message}
							radius="md"
							visibilityToggleIcon={({ reveal, size }) => (reveal ? <IconEyeOff size={size} /> : <IconEyeCheck size={size} />)}
						/>
					</Stack>

					<Group my="xl" spacing={16} position="right">
						<PrimaryBtn type="submit" fullWidth={true} loading={isSubmitting}>
							{isSubmitting ? "Signing in" : "sign in"}
						</PrimaryBtn>

						<Text size="xs">
							Do not have an account?
							<LinkElement href="/signup" className={classes.link}>
								Sign Up
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
