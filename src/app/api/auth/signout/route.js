import { cookies } from "next/headers";


export async function POST() {

    cookies().delete("userToken")
    return Response.json({message: "user logged out successfully"})

}
