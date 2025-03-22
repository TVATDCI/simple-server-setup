import express from "express";

// Create an express server
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Create a route (GET) to the root URL
// Modification respond with a welcome message and a list of available routes
app.get("/", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
    "Custom-Header": "Welcome to the Express Server",
  });

  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to the API</title>
        <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background-color: #023430; }
            h1 { color: #00ED64; }
            p { font-size: 18px; color: #FFFFFF; }
            h4 { color: #FFEEA9 }
            ul { list-style: none; padding: 0; }
            li { margin: 10px 0; color: #00ED64; }
            a { text-decoration: none; color: #fcd8fc; font-weight: bold; }
            a:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <h1>Welcome to My Express API 🔥</h1>
        <p>Click on any route below to explore:</p>
        <h4>Available Routes:</h4>
        <ul>
            <li> <a href="/"> /</a> - This page (home).</li>
            <li> <a href="/api"> /api</a> - API main endpoint. </li>
            <li> <a href="/api/users"> /api/users</a> - API Users endpoint.</li>
            <li> <a href="/api/users/1"> /api/users/:id</a> - Get a user by ID (try changing '1').</li>
            <li> <a href="/hello"> /hello</a> - A friendly greeting.</li>
            <li> <a href="/time"> /time</a> - Get the current date and time.</li>
            <li> <a href="/random/100"> /random/:num</a> - Get a random number.</li>
            <li> <a href="/fact"> /fact</a> - Get a random fun fact.</li>
        </ul>
    </body>
    </html>
  `);
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

// Create an Enhance 404 page with custom html headers!

app.use((req, res) => {
  res.writeHead(404, {
    "Content-Type": "text/html",
    "My-Own-html-header": "Hello, This is a custom 404 header from the server!",
  });
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>404 - Not Found</title>
        <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background-color: #023430; }
            h1 { color: #dc3545; }
            p { font-size: 18px; color: #FFFFFF; }
            h4 { color: #FFEEA9 }
            ul { list-style: none; padding: 0; }
            li { margin: 10px 0; color: #00ED64; }
            a { text-decoration: none; color: #fcd8fc; font-weight: bold; }
            a:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <h1>Oops! 404 - Page Not Found</h1>
        <p>The server is running on port <strong>3000</strong>, but what you have entered is not a valid route 🙈</p>
        <h4>Try these available routes instead:</h4>
        <ul>
            <li> <a href="/"> /</a> - Back to root URL. </li>
            <li> <a href="/api"> /api</a> - API URL. </li>
            <li> <a href="/api/users"> /api/users</a> - API Users URL.</li>
            <li> <a href="/api/users/:id"> /api/users/:id</a> - API User by ID.</li>
            <li> <a href="/hello"> /hello</a> - Responds with a greeting.</li>
            <li><a href="/time"> /time</a> - Returns the current date and time.</li>
            <li><a href="/random/:num"> /random/:num</a> - Generates a random number.</li>
            <li><a href="/fact"> /fact</a> - Shares a random fact.</li>
        </ul>
    </body>
    </html>
  `);
});
