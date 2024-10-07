import mongoose from "mongoose"

const connection: any = {};

export const connectToDb = async () => {
  try {
    if(connection.isConnected) {
        // console.log("existing connected", connection);
      console.log("Using existing connection");
      return;
    }
    let mongo: string | any = process.env.MONGO;
    const db = await mongoose.connect(mongo);
    // console.log("db new connected", db);

    connection.isConnected = db.connections[0].readyState;
  } catch (error: string | any) {
    console.log(error);
    throw new Error(error);
  }
};