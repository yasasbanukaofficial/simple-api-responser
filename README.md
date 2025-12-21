## Simple API Responser

A tiny utility to standardize API responses for Express and REST APIs.

This package provides simple functions to return **success** and **error** responses in a consistent format.  
Supports **CommonJS** (`require`) and **ES Modules** (`import`) out of the box, and includes TypeScript type definitions.

---

### 🚀 Features

- Minimal and easy to use
- Works with **Express** or any REST API
- Consistent response structure
- Supports custom status codes and messages
- TypeScript-friendly

---

### 💿 Installation

```bash
npm install simple-api-response
```

## ⚙️ Usage

### Common JS (Node.js / Express)

```Javascript
const { success, error } = require("simple-api-responser");

// Example 1: Basic success response
app.get("/users", (req, res) => {
  const users = [{ id: 1, name: "Yasas" }];
  res.json(success(users));
});

// Example 2: Success with custom message
app.get("/users/:id", (req, res) => {
  const user = { id: req.params.id, name: "Yasas" };
  res.json(success(user, "Fetched user successfully"));
});

// Example 3: Success with custom status
app.post("/users", (req, res) => {
  const newUser = { id: 2, name: "New User" };
  res.json(success(newUser, "User created", 201));
});

// Example 4: Error response
app.get("/users/:id", (req, res) => {
  res.status(404).json(error("User not found", 404));
});

```

### ES Modules (Modern JavaScript / Frontend + Node)

```Javascript
const { success, error } = require("simple-api-responser");

// Example 1: Basic success response
app.get("/users", (req, res) => {
  const users = [{ id: 1, name: "Yasas" }];
  res.json(success(users));
});

// Example 2: Success with custom message
app.get("/users/:id", (req, res) => {
  const user = { id: req.params.id, name: "Yasas" };
  res.json(success(user, "Fetched user successfully"));
});

// Example 3: Success with custom status
app.post("/users", (req, res) => {
  const newUser = { id: 2, name: "New User" };
  res.json(success(newUser, "User created", 201));
});

// Example 4: Error response
app.get("/users/:id", (req, res) => {
  res.status(404).json(error("User not found", 404));
});

```

## 📝 Response Format

### ✅ Success
```bash
{
  "success": true,
  "status": 200,
  "message": "Request successful",
  "data": {}
}
```

### ❌ Error
```bash
{
  "success": false,
  "status": 400,
  "message": "Request failed"
}
```

---
Hope this helps you save at least little bit of time :)

### 🔗 Connect with Me

## 🌐 Links

- [GitHub](https://github.com/yasasbanukaofficial)
- [NPM](https://www.npmjs.com/~yasasbanukaofficial)
- [LinkedIn](https://www.linkedin.com/in/yasasbanukagunasena/)