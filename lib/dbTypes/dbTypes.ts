export interface User {
	id: string;
	email: string;
	name?: string;
	address?: string;
	posts?: Post[];
}

export interface Post {
	id: string;
	title: string;
	slug?: string;
	body?: string;
	author?: User;
	authorId?: string;
}

export interface UserCreateInput {
	name: string;
	email: string;
	password: string;
}
export interface UserLoginFields {
	email: string;
	password: string;
}
