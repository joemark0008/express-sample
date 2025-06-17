import express from "express"
import { getAllTodo, todoSample } from "../services/todo.js";
const todoRouter = express.Router();



todoRouter.get("/todo", async (req, res) => {
    const data = await getAllTodo()
    return res.json(data)
})


todoRouter.post("/todo", async (req, res) => {
    const payload = req.body
    console.log("payload", payload)
    return res.json([])

})


// postRouter.delete("/posts", async (req, res) => {
//     const postId = req.body
//     console.log("post", postId)
//     const post = await deletePost(postId)
//     return res.json(post)

// })



export default todoRouter

