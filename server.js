import express from "express";

// Create an express server
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Create a route (GET) to the root URL
app.get("/", (req, res) => {
  res.send("Hello from the server side...🐒");
});

// Create a route (GET) to the /api URL
app.get("/api", (req, res) => {
  res.send("Hello from the API side...🐒");
});

// Create a route (GET) to the /api/users URL
app.get("/api/users", (req, res) => {
  res.send("Hello from the API users side...🐒");
});

// Create a route (GET) to the /api/users/:id URL
app.get("/api/users/:id", (req, res) => {
  res.send(`Hello from the API user ${req.params.id} side...🐒"`);
});
