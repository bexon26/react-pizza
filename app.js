import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://admin:wwwwww@cluster0.mf1g6f3.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{console.log('DB ok')})
.catch((err)=>{console.log('DB ERROR'), err})


const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.post("/auth/login", (req, res) => {
  console.log(req.body);

  const token = jwt.sign(
    {
      email: req.body.email,
      fullName: "Вася Пупкин",
    },
    "secret123"
  );

  res.json({
    success: true,
    token,
  });
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
let a = 5;
let b = 10;
console.log(a + b);
