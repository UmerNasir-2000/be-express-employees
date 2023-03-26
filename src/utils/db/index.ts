import { connect } from "mongoose";

const connectDatabase = async () => {
  try {
    const connection = await connect(process.env.MONGO_URI || "");
    console.log("connection to mongodb successful.. :>> ");
  } catch (error) {
    console.log("error :>> ", error);
    process.exit(1);
  }
};

export default connectDatabase;
