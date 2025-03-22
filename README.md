# An Enhanced Simple Server in Express.js

This project expands on the original Express.js exercise by introducing a custom 404 page styled directly from the backend. Instead of a plain text response, the server now dynamically serves an HTML page with inline CSS and structured content.

## Tasks

You will be setting up a server with four **endpoints** using the Express.js framework, along with an improved 404 error page.

The endpoints will only respond to **GET** requests and send a **string** as a response.

---

### Getting Ready

1. Install the Express.js npm package:
   ```sh
   npm i express
   ```
2. Create a file `server.js`.

---

### Setting Up Your Server

Use the following code to set up your server:

```js
import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("The server is listening on port 3000... 🐒");
});
```

---

### Implementing Endpoints

#### **GET `/api`**

Responds with a greeting message from root URL homepage like a mini dashboard with links of available routes for easy navigation (modified).

```js
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
```

#### **GET `/api`**

Responds with a greeting message from /api URL.

```js
app.get("/api", (req, res) => {
  res.send("Hello from the API side...🐒");
});
```

#### **GET `/api/users`**

Responds with a greeting message from /api/users URL.

```js
app.get("/api/users", (req, res) => {
  res.send("Hello from the API users side...🐒");
});
```

#### **GET `/api/users/:id`**

Responds with a greeting message from /api/users URL.

```js
app.get("/api/users/:id", (req, res) => {
  res.send(`Hello from the API user ${req.params.id} side...🐒")
});
```

#### **GET `/hello`**

Responds with a greeting message.

```js
app.get("/hello", (req, res) => {
  res.send("Hello, I am the Hello endpoint");
});
```

#### **GET `/time`**

Returns the current date and time.

```js
app.get("/time", (req, res) => {
  const dateAndTime = new Date().toLocaleString();
  res.send(`The current date and time is: ${dateAndTime}`);
});
```

#### **GET `/random/:num`**

Generates and returns a random number.

```js
app.get("/random/:num", (req, res) => {
  const randomNum = Math.floor(Math.random() * 100);
  res.send(`Random number: ${randomNum}`);
});
```

#### **GET `/fact`**

Returns a randomFact.

```js
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
```

---

### Implementing an Enhanced 404 Page

If a user tries to access a non-existent route, they will now receive a properly styled HTML page instead of plain text.

```js
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
            <li> <a href="/hello"> /hello</a> - Responds with a greeting.</li>
            <li><a href="/time"> /time</a> - Returns the current date and time.</li>
            <li><a href="/random/:num"> /random/:num</a> - Generates a random number.</li>
            <li><a href="/fact"> /fact</a> - Shares a random fact.</li>
        </ul>
    </body>
    </html>
  `);
});
```

---

### Summary

- **Express.js** is used to create a simple server.
- **GET endpoints** handle different requests.
- **A styled 404 page** provides a better user experience with HTML and CSS.

This new implementation improves usability and provides a better way for users to navigate your server endpoints. 🎉
