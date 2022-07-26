require("dotenv").config();
const express = require('express')
const app = express()
//const port = 3000

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
  availability: "100",
},
{
  id: 2,
  name: "Colour Magic",
  author: "Terry Pratchett",
  year: "1983",
  availability: "298",
},
{
  id: 3,
  name: "The Bluest eye",
  author: "Toni Morrison",
  year: "1970 ",
  availability: "87",
},
{
  id: 4,
  name: "Belle du Seigneur",
  author: "Albert Cohen",
  year: "1968",
  availability: "203",
},
{
  id: 5,
  name: "1984",
  author: "George Orwell",
  year: "1949",
  availability: "157",
},
{
  id: 6,
  name: "Harry Potter and the Philosopher's stone",
  author: "J. K. Rowling",
  year: "1997",
  availability: "235",
},
{
  id: 7,
  name: "Les cerfs-volants",
  author: "Romain Gary",
  year: "1980",
  availability: "156",
},
{
  id: 8,
  name: "Les racines du ciel",
  author: "Romain Gary",
  year: "1956",
  availability: "160",
},
{
  id: 9,
  name: "My life in Tel Aviv",
  author: "Me",
  year: "2022",
  availability: "255",
}
];

app.get("/products", (req,res) => {
res.json(products);
});

app.get("/products/:id", (req, res) => {
  res.json(products.find((p) => p.id === +req.params.id));
});

//console.log(req.products[0].name);

app.get("/books/:name", (req, res) => { //API endpoint to your API on Heroku that get a GET request for a book name, p.name only exists inside the find, find iterates through the data, evaluates if it's true
  res.json(products.find((p) => {
                                                    //console.log(p.name); //help find 
                                                    //console.log(String(p.name));
                                                    if (String(p.name) == String(req.params.name)){
                                                        console.log(String(p.name), String(req.params.name));
                                                        return true;
                                                        } // IT WORKS 
                                                        // Then we have to stock the data in a field 
                                                }));
  console.log('data from books name:',req.params.name);
});

app.get("/writer/:author", (req, res) => { // on veut qu'il affiche tous les livres 
    res.json(products.filter((p) => {
                                //on veut tester sur tous les livres 
                               // console.log(products.length)
                                //for(let i = 0; i< products.length; i++){
                                        if (String(p.author) == String(req.params.author)){
                                                       console.log("The name of the book is ", String(p.name), "by", String(req.params.author));
                                                        return true;
                                  }
                    //}
     }));
    //console.log('data from books name:', req.params.author);
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

try {
  const result = JSON.stringify('');
  console.log(result);
} catch (err) {
  //SyntaxError: Unexpected end of JSON input
  console.log('error', err);
}


app.listen(process.env.PORT || 8000, () => {
  console.log(`Server up and listening`);
});
