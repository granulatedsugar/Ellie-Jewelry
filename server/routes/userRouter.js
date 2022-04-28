import { Router } from "express";

const router = Router();

router.get("/usertest", (req, res) => {
  res.send("user Test Succ");
});

router.post("/userposttest", (req, res) => {
  const username = req.body.username;
  res.send(`Your username is ${username}`);
});

export default router;
