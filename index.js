require("dotenv").config();
const express = require('express')
const app = express()
const port = 3000

let bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

let products = [
{
  id: 1,
  name: "Ivanhoe",
  author: "Sir Walter Scott",
  year: "1819",
},
{
  id: 2,
  name: "Colour Magic",
  author: "Terry Pratchett",
  year: "1983",
},
{
  id: 3,
  name: "The Bluest eye",
  author: "Toni Morrison",
  year: "1970 ",
},
{
  id: 4,
  name: "Belle du Seigneur",
  author: "Albert Cohen",
  year: "1968",
},
{
  id: 5,
  name: "1984",
  author: "George Orwell",
  year: "1949",
},
{
  id: 6,
  name: "Harry Potter and the Philosopher's stone",
  author: "J. K. Rowling",
  year: "1997",
},
{
  id: 7,
  name: "Les cerfs-volants",
  author: "Romain Gary",
  year: "1997",
},
{
  id: 8,
  name: "Les racines du ciel",
  author: "Romain Gary",
  year: "1997",
},
];

app.get("/products", (req,res) => {
res.json(products);
});

app.get("/products/:id", (req, res) => {
  res.json(products.find((p) => p.id === +req.params.id));
});

app.post('/products', function(req, res) {
  console.log(req.body);
  const newProduct = { ...req.body, id: products.length + 1 };
  products = [ ...products, newProduct];
  res.json(newProduct);
});

app.put('/products', function(req, res) {
  let updatedProduct;
  products = products.map(p => {
    if (p.id === req.body.id) {
      updatedProduct = { ...p, ...req.body };
      return updatedProduct;
    }
    return p;
  })
  res.json(updatedProduct);
});

app.delete('/products/:id', function(req, res) {
  const deletedProduct = products.find(p => p.id === +req.params.id);
  products = products.filter(p => p.id !== +req.params.id);
  res.json(deletedProduct);
});




app.listen(process.env.PORT || 8000, () => {
  console.log(`Server up and listening`);
});
