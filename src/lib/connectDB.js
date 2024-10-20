import { MongoClient, ServerApiVersion } from "mongodb";

let db;

export const connectDB = async () => {
    if (db) return db;
    try {
        // const { MongoClient, ServerApiVersion } = require('mongodb');
        const uri = `mongodb+srv://mdhelal:${process.env.NEXT_PUBLIC_MONGODB_PASS}@cluster0.qvtbg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

        // Create a MongoClient with a MongoClientOptions object to set the Stable API version
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        db = client.db('tenis');
        return db;



    } catch (error) {
        console.log(error)
    }


}