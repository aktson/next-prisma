import { createUser, getUsers } from "../../../../lib/api/users";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";

// export default async function handle(req: NextApiRequest, res: NextApiResponse) {
// 	switch (req.method) {
// 		case "POST": {
// 			const user = await createUser(req, res);
// 			return NextResponse.json({ user });
// 		}
// 		case "GET": {
// 			return NextResponse.json("ROUTE IS WORKING");
// 		}
// 	}
// }

export async function GET(request: Request) {
	const posts = await prisma.post.findMany();
	return NextResponse.json(posts);
}

export async function POST(request: Request) {
	const json = await request.json();
	const createdPost = await prisma.post.create({
		data: json,
	});
	return new NextResponse(JSON.stringify(createdPost), { status: 201 });
}
