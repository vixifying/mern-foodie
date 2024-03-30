import mongoose from "mongoose";

export const dbconnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbname: "RESTURANT",
    })
    .then(() => {
      console.log("Connection established");
    })
    .catch((err) => console.log("Something went wrong", err.message));
};
