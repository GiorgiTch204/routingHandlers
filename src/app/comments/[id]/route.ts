import { parseMaxPostponedStateSize } from "next/dist/server/config-shared";
import { comments } from "../data";

export async function GET(request: Request, {params} : {params:Promise<{id:string}>}

){
    const {id} = await params;
    const comment=comments.find((c)=>c.id===parseInt(id));
    return Response.json(comment);
}