import { UserLoginFields } from "@/lib/dbTypes/dbTypes";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/prisma/prisma";

export const authOptions: NextAuthOptions = {
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 60, // 30 days
	},
	pages: {
		signIn: "/signin/",
	},

	callbacks: {
		jwt: ({ token, user }) => {
			if (user) {
				token.id = user.id
			}
			return token;
		},
		session: ({ session, token }) => {

			if (token) {
				session.id = token.id as string;

			}
			return session;
		}
	},
	secret: "test",
	jwt: {
		secret: "test",
		// encryption: true,
	},

	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: { label: "Email", type: "email", placeholder: "email" },
				password: { label: "Password", type: "password", placeholder: "password" },
			},

			async authorize(credentials, req) {
				const { email, password } = credentials as UserLoginFields;
				if (!email || !password) {
					throw new Error("Please fill up all fields");
				}
				const user = await prisma.user.findUnique({
					where: {
						email: email,
					},
				});
				if (!user) {
					throw new Error("No user found");
				}
				if (!user.password) {
					throw new Error("Username or password missing");
				}
				const isPasswordValid = await compare(password, user.password);

				if (!isPasswordValid) {
					throw new Error("Invalid credentials");
				}

				return {
					id: user.id,
					email: user.email,
					name: user.name,
				};
			},
		}),
	],
};
export default NextAuth(authOptions);
