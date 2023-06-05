import express from "express";

import mongoose from "mongoose";

import {
  registerValidation,
  loginValidation,
  dishCreateValidation
} from "./src/backend/validations/validations.js";
import checkAuth from "./src/backend/utils/checkAuth.js";

import * as UserController from "./src/backend/controllers/UserController.js";
import * as PostController from "./src/backend/controllers/PostController.js"

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

app.post("/auth/login", loginValidation, UserController.login);
app.post("/auth/register", registerValidation, UserController.register);
app.get("/auth/me", checkAuth, UserController.getMe);

// app.get("/dish", PostController.getAll);
// app.get("/dish/:id", PostController.getOne);
app.post("/dish",checkAuth, dishCreateValidation, PostController.create);
// app.delete("/dish", PostController.remove);
// app.patch("/dish", PostController.update);



app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
