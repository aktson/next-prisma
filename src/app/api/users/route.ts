import { createUser, getUsers } from "@/prisma/users";

export async function GET(request: Request, response) {
	try {
		const { users, error } = await getUsers();
		return new Response("GET endpoint is working");
	} catch (error) {
		return new Error(error);
	}
}
export async function POST(req, res) {
	try {
		const data = req.body;
		const { user, error } = await createUser(data);
		return new Response("POST request endpoint is working");
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
}
