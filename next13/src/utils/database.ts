import mongoose, { ConnectOptions } from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    mongoose.connect(
      process.env.MONGODB_URI as string,
      {
        dbName: "todos",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    );
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
