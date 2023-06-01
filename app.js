import express from "express";

import mongoose from "mongoose";

import { registerValidation } from "./src/backend/validations/auth.js";
import checkAuth from "./src/backend/utils/checkAuth.js";

mongoose
  .connect(
    "mongodb+srv://admin:wwwwww@cluster0.mf1g6f3.mongodb.net/familyfood?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB ok");
  })
  .catch((err) => {
    console.log("DB ERROR"), err;
  });

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.post("/auth/login", );

app.post("/auth/register", registerValidation, );

app.get('/auth/me', checkAuth, )

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
let a = 5;
let b = 10;
console.log(a + b);
