import express from "express";
import { getAllUsers } from "../services/user.js";

const userRouter = express.Router();

//get all users

userRouter.get("/user", async (req, res) => {
  const data = await getAllUsers();
  return res.json(data);
});

//post a new user

export default userRouter;
