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

#### **GET `/random`**

Generates and returns a random number.

```js
app.get("/random", (req, res) => {
  const randomNum = Math.floor(Math.random() * 100);
  res.send(`Random number: ${randomNum}`);
});
```

#### **GET `/fact`**

Returns a fun JavaScript fact.

```js
app.get("/fact", (req, res) => {
  res.send("JavaScript was created in about 10 days!");
});
```

---

### Implementing an Enhanced 404 Page

If a user tries to access a non-existent route, they will now receive a properly styled HTML page instead of plain text.

```js
app.use((req, res) => {
  res.writeHead(404, {
    "Content-Type": "text/html",
    "My-Own-html-header": "Hello, This is a custom header from the server!",
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
            ul { list-style: none; padding: 0; }
            li { margin: 10px 0; color: #00ED64; }
            a { text-decoration: none; color: #FFEEA9; font-weight: bold; }
            a:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <h1>Oops! 404 - Page Not Found</h1>
        <p>The server is running on port <strong>3001</strong>, but <code>${req.originalUrl}</code> is not a valid route. It is not part of the exercise. 🙈</p>
        <p>Try these available routes instead:</p>
        <ul>
            <li> <a href="/hello">GET /hello</a> - Responds with a greeting.</li>
            <li><a href="/time">GET /time</a> - Returns the current date and time.</li>
            <li><a href="/random">GET /random</a> - Generates a random number.</li>
            <li><a href="/fact">GET /fact</a> - Shares a JavaScript fact.</li>
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
