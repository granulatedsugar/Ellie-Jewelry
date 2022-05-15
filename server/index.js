import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js";
import authRouter from "./routes/auth.js";
import cartRouter from "./routes/cartRouter.js";
import orderRouter from "./routes/orderRouter.js";
import productRouter from "./routes/productRouter.js";
import stoneRouter from "./routes/stoneRouter.js";
import stripeRouter from "./routes/stripe.js";
import cors from "cors";

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
app.use(cors());

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/stones", stoneRouter);
app.use("/orders", orderRouter);
app.use("/cart", cartRouter);
app.use("/checkout", stripeRouter);
