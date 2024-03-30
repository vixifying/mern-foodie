import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbconnection } from "./database/dbconnection.js";
import errorMidldeware from "./error/error.js";
import resevationRouter from "./routes/reservationRoute.js";

const app = express();
dotenv.config({ path: "./.env" });
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    method: ["GET", "POST"],
    credentials: true,
  })
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation", resevationRouter);

dbconnection();
app.use(errorMidldeware);
export default app;
