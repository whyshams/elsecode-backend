import express, { urlencoded } from "express";
import dbConnect from "./dbConfigure.js";
import cors from "cors";
import router from "./Routes.js";

dbConnect();

const app = express();
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.listen(5000, () => {
  console.log("listening");
});
app.use("/contact", router);
