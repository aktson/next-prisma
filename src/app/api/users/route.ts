import { createUser, getUsers } from "../../../../lib/api/users";
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';


export default async function handle(req: NextApiRequest, res: NextApiResponse) {


    switch (req.method) {
        case "POST": {
            const user = await createUser(req, res);
            return NextResponse.json({ user });
        }
        case "GET": {
            return NextResponse.json("ROUTE IS WORKING");
        }
    }
}




// export async function POST(req: NextApiRequest, res: NextApiResponse) {

//     const user = await createUser(req, res);
//     return NextResponse.json({ user });
// }

