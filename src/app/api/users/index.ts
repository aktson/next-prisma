import { createUser, getUsers } from "../../../../prisma/users";

const handler = async (req: Request, res: Response) => {

    if (req.method === "GET") {
        try {

            const { users, error } = await getUsers();
            if (error) throw new Error(error);
            return res.status(200).json({ users })

        }
        catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
    if (req.method === "POST") {
        try {
            const data = req.body;
            const { user, error } = createUser(data)

            if (error) throw new Error(error);
            return res.status(200).json({ user })

        }
        catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    res.setHeader("Allow", ["GET", "POST"])
    req.status(425).end(`Method ${req.method} is not allowed`)

}

export default handler;