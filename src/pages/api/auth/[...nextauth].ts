import { UserLoginFields } from "@/lib/dbTypes/dbTypes";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/prisma/prisma";

export const authOptions: NextAuthOptions = {

	session: {
		strategy: "jwt",
	},
	pages: {
		signIn: "http://localhost:3000/signin",
	},
	callbacks: {
		async session({ session, user }) {
			return Promise.resolve({
				...session,
				user: {
					...session.user,
					id: user.id,
				},
			});
		},
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
				const isPasswordValid = await compare(password, user.password);
				if (!isPasswordValid) {
					throw new Error("Invalud credentials");
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

