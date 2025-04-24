import { MongoClient } from "mongodb";
import "dotenv/config.js";

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

const pingMongo = async () => {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(" Pinged MongoDB ");
  } catch (err) {
    console.err(" Ping failed ", err);
  } finally {
    await client.close();
  }
};

pingMongo();
