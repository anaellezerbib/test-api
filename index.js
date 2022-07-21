require("dotenv").config();
const express = require("express");
const app = express();
// const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", (req,res) => {
  const products = [
  {
    id: 1,
    name: "hammer",
  },
  {
    id: 2,
    name: "screwdriver",
  },
  {
    id: 3,
    name: "wrench",
  },
 ];

 res.json(products);
});



app.listen(process.env.PORT || 8000, () => {
  console.log(`Server up and listening`);
});
