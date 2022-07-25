const express = require('express')
const app = express()
const port = 3000

let bodyParser = require('body-parser');
app.use(bodyParser.json());

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

app.get('/products', (req, res) => {
  const page = +req.query.page;
  const pageSize = +req.query.pageSize;

  if (page && pageSize) {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    res.json(products.slice(start, end));
  } else {
    res.json(products);
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
  
