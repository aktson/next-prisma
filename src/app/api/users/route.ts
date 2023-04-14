import { createUser, getUsers } from "../../../../lib/api/users";
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handle(req: NextApiRequest, res: NextApiResponse) {

    try {
        switch (req.method) {
            case "POST": {
                return await createUser(res, req);
            }
        }
    } catch (error) {
        console.log(error)
        return res.status(401).json("THIS IS ERROR")
    }
}