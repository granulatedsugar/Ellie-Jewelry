import { Router } from "express";
import Stone from "../models/stone.js";
import { verifyTokenAndAdmin } from "./verifyToken.js";

const router = Router();

// Create New Stone
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newStone = new Stone(req.body);

  try {
    const saveStone = await newStone.save();
    res.status(200).json(saveStone);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Stone
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updateStone = await Stone.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateStone);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Stone
router.get("/find/:id", async (req, res) => {
  try {
    const stone = await Stone.findById(req.params.id);
    res.status(200).json(stone);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all Stones
router.get("/", async (req, res) => {
  try {
    const products = await Stone.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
