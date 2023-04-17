import { NextApiRequest, NextApiResponse } from "next";
import { createUser, getUsers } from "@/lib/api/users";
import prisma from "@/prisma/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	if (req.method === "POST") {
		return createUser(req, res)
	}
	if (req.method === "GET") {
		return res.status(200).json("Route is working");
	}
}
