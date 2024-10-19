import { MongoClient, ServerApiVersion } from "mongodb";

let db;

export const connectDB = async () => {
    if (db) return db;
    try {
        // const { MongoClient, ServerApiVersion } = require('mongodb');
        const uri = "mongodb+srv://mdhelal:z0SgSo9R9SSiZQf5@cluster0.qvtbg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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

        // async function run() {
        //     try {
        //         // Connect the client to the server	(optional starting in v4.7)
        //         await client.connect();
        //         // Send a ping to confirm a successful connection
        //         await client.db("admin").command({ ping: 1 });
        //         console.log("Pinged your deployment. You successfully connected to MongoDB!");
        //     } finally {
        //         // Ensures that the client will close when you finish/error
        //         await client.close();
        //     }
        // }
        // run().catch(console.dir);

    } catch (error) {
        console.log(error)
    }


}