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

// Create a route (GET) /hello endpoint
app.get("/hello", (req, res) => {
  res.send("Hello, I am the Hello endpoint");
});

// Create a route (GET) /time endpoint
app.get("/time", (req, res) => {
  const dateAndTime = new Date().toLocaleString();
  res.send(`The current date and time is ${dateAndTime}`);
});

// Create a route (GET) /random endpoint
app.get("/random", (req, res) => {
  const randomNum = Math.floor(Math.random() * 100);
  res.send(`Random number: ${randomNum}`);
});
