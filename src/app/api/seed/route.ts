import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(req: Request) {

    await prisma.todo.deleteMany(); // delete * from todo


    // const todo = await prisma.todo.create({
    //     data: { description: 'Piedra del alma', complete: true}
    // }); 

    await prisma.todo.createMany({
        data: [
            {description: 'Piedra del alma', complete:true},
            {description: 'Piedra del poder'},
            {description: 'Piedra del tiempo'},
            {description: 'Piedra del espacio'},
            {description: 'Piedra de la realidad'},
        ]
    })


    console.log('req', req.url);
    return NextResponse.json({ message: ' Seed Executed '});
}