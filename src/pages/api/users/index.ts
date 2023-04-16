import { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "@/lib/api/users";

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	if (req.method === "POST") {
		return createUser(req, res);
	}
}
