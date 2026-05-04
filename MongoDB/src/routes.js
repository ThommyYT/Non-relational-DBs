import { Router } from "express";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./todoService.js";

const router = Router();

router.get("/todos", async (req, res) => {
  const todos = await getTodos();
  res.json(todos);
});

router.post("/todos", async (req, res) => {
  const { text } = req.body;
  await addTodo(text);
  res.send("Added");
});

router.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  await updateTodo(id, text);
  res.send("Updated");
});

router.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;

  await deleteTodo(id);
  res.send("Deleted");
});

export default router;