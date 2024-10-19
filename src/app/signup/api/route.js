import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const newUser = await request.json();

    try {
        const db = await connectDB();
        const userCollection = db.collection('users')
        const exist = await userCollection.findOne({ email: newUser.email })
        if (exist) {
            return NextResponse.json({ message: 'user exist' }, { status: '304' })
            console.log('alreday create')
        }
        const res = await userCollection.insertOne(newUser);
        return NextResponse.json({ message: 'user created' }, { status: '200' })
    } catch (error) {
        return NextResponse.json({ message: 'Worng' }, { status: '500' })

    }

}