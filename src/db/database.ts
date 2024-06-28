import mongoose from "mongoose";
import { config } from "../config/config";
import { db_name } from "../constant/constant";
const ConnectDB = async () => {
  try {
    const Connect = await mongoose.connect(`${config.mongodb_uri}/${db_name}`);
    console.log(
      `mongodb connect successfully. mongodb connection host : ${Connect.connection.host}`
    );
  } catch (error: any) {
    mongoose.connection.on("error", async () => {
      console.log(`mongod connection error : ${error.message}`);
    });
  }
};
export { ConnectDB };
