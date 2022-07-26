# test-api

This API is managed by an online book retailer. You can ask get, post or put requests. 

The get request gives you the title, the author and the released year of the book when you give the id. (maybe add the number of books available)
There are two get functions: 
  - one where the route should return a single product using: /products/:id
  For instance: if you ask this get request:    http://localhost:8000/products/1
  it will display:
                      [{
                       "id": 1,
                       name: "Ivanhoe",
                       author: "Sir Walter Scott",
                       year: "1819",}]

  - one where the route should return all products, or as many products that query parameters ask for using: /products
  For instance: if you ask this get request:    http://localhost:3000/products?page=1&pageSize=2
  it will display: 
                      [{
                      "id": 1,
                      "name": "Ivanhoe",
                      "author": "Sir Walter Scott"
                    },
                    {
                      "id": 2,
                      "name": "Colour Magic",
                      "author": "Terry Pratchett"
                    }]
                    
                    
The post function 
