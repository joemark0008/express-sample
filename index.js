// app.js (ES6)
import express from "express";
import todoRouter from "./route/todo.js";
import userRouter from "./route/user.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use(todoRouter,userRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
