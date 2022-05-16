// Authentication
import { Router } from "express";
import User from "../models/user.js";
import dotenv from "dotenv";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

dotenv.config();
const router = Router();

const PASSPHRASE = process.env.PASSPHRASE;
const JWT_TOKEN = process.env.JWT;

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, PASSPHRASE).toString(), // Convert regular pass to hash
  });

  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });

    const hashedPassword = CryptoJS.AES.decrypt(user.password, JWT_TOKEN); // Convert hash to regular pass

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password;

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      JWT_TOKEN,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(401).json("Wrong Credentials!");
  }
});
export default router;
