import { getDb } from "./mongoClient.js";
import { ObjectId } from "mongodb";

export async function addTodo(text) {
  // TODO: insert document into "todos"
}

export async function getTodos() {
  // TODO: return all documents from "todos"
}

export async function updateTodo(id, text) {
  // TODO: update document by _id
}

export async function deleteTodo(id) {
  // TODO: delete document by _id
}