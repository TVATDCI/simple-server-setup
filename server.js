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

// Create a route (GET) /random/:num endpoint
app.get("/random/:num", (req, res) => {
  const randomNum = Math.floor(Math.random() * 100);
  res.send(`Random number: ${randomNum}`);
});

// Create a route (GET) /fact endpoint
app.get("/fact", (req, res) => {
  const facts = [
    "The first oranges weren’t orange",
    "The shortest war in history lasted 38 minutes",
    "The world wastes about 1 billion metric tons of food each year",
    "The unicorn is the national animal of Scotland",
    "Java is not the same as JavaScript",
    "JavaScript was created in about 10 days",
    "The first computer virus was created in 1983",
    "The first webcam watched a coffee pot",
    "The first domain name ever registered was Symbolics.com",
    "The first ever email was sent in 1971",
  ];
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  res.send(randomFact);
});
