# Redis Rate Limiter (Hands-on Project)

## 🎯 Objective

This project is designed to **learn Redis by doing**.

JavaScript is intentionally minimal — the core logic must be implemented using Redis commands.

---

## 🧠 What You Will Learn

* Redis key design
* INCR
* EXPIRE
* TTL
* Basic rate limiting pattern

---

## ☁️ Prerequisite: Redis Cloud

Create a free database:

* [https://redis.com/try-free/](https://redis.com/try-free/)

Retrieve:

* host
* port
* password

And substitute them into redisClient.js file accordingly.

---

## ⚙️ Setup

```bash
npm install
```

---

## ▶️ Run

```bash
npm start
```

Test:

```text
http://localhost:3000/api?user=test
```

---

## 🧪 Your Task

Check and try to change the logic inside:

```text
src/rateLimiter.js
```

Default Behavior:

* Max 5 requests per 10 seconds per user
* Then block with HTTP 429
* Automatically resets after time window

Try to:

* increate the number of max request
* reduce the TTL
* ...

---

## 💡 Hints

Redis commands you will need:

* INCR
* EXPIRE
* TTL

---

## 📁 Project Structure

```text
src/
 ├── server.js
 ├── routes.js
 ├── redisClient.js
 └── rateLimiter.js
```
