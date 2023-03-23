import prisma from ".";
import { User } from "./dbTypes";

export async function getUsers() {
    try {
        const users = await prisma.user.findMany();
        return { users }
    } catch (error) {
        return { error };
    }
}


export async function createUser(user: any) {
    try {
        const userFromDB = await prisma.user.create({ data: user })
        return { user: userFromDB }

    } catch (error) {
        return { error }
    }
}

export async function getUserbyId(id: string) {
    try {
        const user = await prisma.user.findUnique({ where: { id } })
    } catch (error) {

    }
}