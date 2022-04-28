import { Router } from "express";
import User from "../models/user.js";
import dotenv from "dotenv";
import CryptoJS from "crypto-js";
import { verifyTokenAndAuth, verifyToken } from "./verifyToken.js";

dotenv.config();

const router = Router();
const PASSPHRASE = process.env.PASSPHRASE;

//UPDATE
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      PASSPHRASE
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
