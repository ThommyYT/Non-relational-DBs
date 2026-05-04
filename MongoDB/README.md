# 📝 MongoDB Todo App (Hands-on Project)

## 🎯 Objective

This project helps you learn **MongoDB** by building a simple full-stack application.

* Minimal JavaScript (Node.js + Express)
* Simple HTML UI
* Focus on MongoDB CRUD operations

---

## 🧠 What You Will Learn

* MongoDB document model
* Insert documents (`insertOne`)
* Query documents (`find`)
* Update documents (`updateOne`)
* Delete documents (`deleteOne`)
* Working with `_id` and `ObjectId`

---

## ☁️ Prerequisite: MongoDB Atlas

1. Create a free cluster on MongoDB Atlas
2. Create a database user
3. Allow access from your IP
4. Get your connection string
5. Create a new Database on MongoDB Atlas named "todo_app" and a new collection named "todos"

---

## ⚙️ Setup

Clone the repo and install dependencies:

```bash
npm install
```

Create a `.env` file in the root folder:

```
MONGO_URI=your_connection_string
```

Example:

```
MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/?retryWrites=true&w=majority
```

---

## ▶️ Run the Application

```bash
node src/server.js
```

Open your browser:

```
http://localhost:3000
```

---

## 🧪 Features

* ➕ Add a todo
* 📋 View all todos
* ✏️ Edit a todo
* 🗑️ Delete a todo

---

## 📁 Project Structure

```
src/
 ├── server.js
 ├── mongoClient.js
 ├── routes.js
 ├── todoService.js        ← 🧪 YOUR TASK
 └── public/
     └── index.html
```

---

## 🧪 Your Task

Implement the MongoDB logic in:

```
src/todoService.js
```

---

## 💡 Hints

You will need:

```js
db.collection("todos").insertOne(...)
db.collection("todos").find().toArray()
db.collection("todos").updateOne(...)
db.collection("todos").deleteOne(...)
```

---

## ✅ Expected Behavior

* Todos are stored in MongoDB Atlas
* Page reload shows persisted data
* Updates and deletes reflect immediately

---

## 🧠 Key Takeaways

* MongoDB stores **JSON-like documents**
* No rigid schema required
* CRUD operations are simple and powerful
* Great for rapid development

---

Happy coding 🚀
