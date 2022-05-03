import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js";
import authRouter from "./routes/auth.js";
import productRouter from "./routes/productRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const URI = process.env.ATLAS_URI;

app.listen(PORT, () => {
  console.log(`Server is running!`);
});

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DBConnection Successful!"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);
