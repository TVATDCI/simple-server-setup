import express from "express";

const app = express();
const server = app.listen(3000, () => {
  console.log("The server is listening... on port 3000...🐒");
});
