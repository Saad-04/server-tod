
import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      dbName: "backend-api",
    })
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
};