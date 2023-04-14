import prisma from "../prisma";
import { User } from "../dbTypes/dbTypes";
import { NextApiRequest, NextApiResponse } from "next/types";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = "nextprismasexret"
/**
 * Create new user
 * @param req - Next.js API Request
 * @param res - Next.js API Response
 * TODO IMPLEMENT NEXT AUTH @param session - NextAuth.js session 
 */
export async function getUsers() {
    try {
        const users = await prisma.user.findMany();
        return { users }
    } catch (error) {
        return { error };
    }
}
/**
 * Create new user
 * @param req - Next.js API Request
 * @param res - Next.js API Response
 * TODO IMPLEMENT NEXT AUTH @param session - NextAuth.js session 
 */
export async function createUser(res: NextApiResponse, req: NextApiRequest) {

    const { name, email, password } = req.body;

    // validate all fields
    if (!name || !email || !password) {
        res.status(400)
        return new Error("Please include all fields")
    }

    try {
        //check if user exist
        const existingUser = await prisma.user.findFirst({
            where: { email }
        })
        if (existingUser) {
            res.status(400)
            return new Error("User already exist");
        }
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hasdedPassword = await bcrypt.hash(password, salt);


        // create user 
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hasdedPassword
            }
        })

        if (user) {
            res.status(201).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user.id)
            })
        }

    } catch (error) {
        return { error }
    }
}

/**
 * Login new user
 * @param req - Next.js API Request
 * @param res - Next.js API Response
 * TODO IMPLEMENT NEXT AUTH @param session - NextAuth.js session 
 */
export const loginUser = async (res: NextApiResponse, req: NextApiRequest) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return new Error("Please enter all fields")
    }

    try {
        const user = await prisma.user.findFirst({
            where: { email }
        })
        if (user && (await bcrypt.compare(password, user.password))) {
            res.status(200).json({
                id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user.id)
            })
        } else {
            return new Error("Invalid credentials")
        }
    } catch (error) {
        res.status(401)
        return { error }
    }
}

/** Generate jwt token
 * @param {string} user id  
 * @return {string} jwt token
 */
const generateToken = (id: string) => {
    return jwt.sign({ id }, JWT_SECRET, {
        expiresIn: "30d"
    })
}
