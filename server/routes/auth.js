// Authentication
import { Router } from "express";
import User from "../models/user.js";
import CryptoJS from "crypto-js";
import dotenv from "dotenv";

dotenv.config();

const router = Router();

const PASSPHRASE = process.env.PASSPHRASE;

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, PASSPHRASE).toString(),
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
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong username!");

    const hash = CryptoJS.AES.decrypt(user.password, PASSPHRASE);
    const originalPassword = hash.toString(CryptoJS.enc.Utf8);
    originalPassword !== req.body.password &&
      res.status(401).json("Wrong password!");

    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
