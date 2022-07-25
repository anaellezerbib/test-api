require("dotenv").config();
const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", (req,res) => {
  const products = [
{
  id: 1,
  name: "Ivanhoe",
  author: "Sir Walter Scott",
},
{
  id: 2,
  name: "Colour Magic",
  author: "Terry Pratchett",
},
{
  id: 3,
  name: "The Bluest eye",
  author: "Toni Morrison",
},
{
  id: 4,
  name: "Belle du Seigneur",
  author: "Albert Cohen",
},
{
  id: 5,
  name: "1984",
  author: "George Orwell",
},
{
  id: 6,
  name: "Harry Potter and the Philosopher's stone",
  author: "J. K. Rowling",
},
];

app.post('/products', function(req, res) {
  const newProduct = { ...req.body, id: products.length + 1 }
  products = [ ...products, newProduct]
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


 res.json(products);
});



app.listen(process.env.PORT || 8000, () => {
  console.log(`Server up and listening`);
});
