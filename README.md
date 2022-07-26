# test-api

## _API on Books_

This API is managed by an online book retailer. You can ask get information on books, see if they are available and add new books to the retailer. 


## Get request 
The get request gives you the title, the author and the released year of the book when you give the id. You can also see the avaibility of this book.
There are two get functions: 
  - one where the route should return a single product using: /products/:id
  For instance: if you ask this get request:    http://localhost:8000/products/1
  it will display:
                      > [{
                      > "id": 1,
                      > name: "Ivanhoe",
                      > author: "Sir Walter Scott",
                      > year: "1819",}]

  - one where the route should return all products, or as many products that query parameters ask for using: /products
  For instance: if you ask this get request:    http://localhost:3000/products?page=1&pageSize=2
  it will display: 
                      > [{
                      >"id": 1,
                      > "name": "Ivanhoe",
                      > "author": "Sir Walter Scott"
                   >  },
                    > {
                    >  "id": 2,
                      >"name": "Colour Magic",
                      >"author": "Terry Pratchett"
                  >  }]
                    
                    
The post function 
