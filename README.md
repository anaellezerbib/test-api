# test-api

## _API on Books_

This API is managed by an online book retailer. You can ask get information on books, see if they are available and add new books to the retailer. 

## How to run this API? 
- First of all, you need to clone this project on a new github repository. 
- After that, you need to deploy it through heroku
- Finally, you can use either Postman or Insomnia to run every requests you want, every thing is detailled right here...


## Get request 
The get request gives you the title, the author and the released year of the book when you give the id. You can also see the avaibility of this book.
There are two get functions: 
  - one where the route should return a single product using: /products/:id
  
For instance, if you ask this get request:    http://localhost:8000/products/1

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
                    
                    
## Post request 
If you want to add a new ressource, hence a new book, use the post request. 

For example, if I want to add the book Hamlet by Shakespeare written in 1603, I write this post request with 

> {
>	"name": "Hamlet",
>	"author": "Shakespeare",
>	"year": "1603",
>	"availability":"185"
>	}

It will automatically create a new id with those features. To check if the book has been successfully added, I can do a get request!

## Put request
If you want to modify some data, you have to run a put request. 
In the (JSON) text, you indicate the id and then write the modifications. 

For instance, if there is an availability update

> {
> 		"id": 11,
> 		"name": "Anna Karénine",
> 		"author": "Léon Tolstoï",
> 		"year": "1878",
> 		"availability": "235"
> 	} 

becomes: 
	
> 	{
> 		"id": 11,
> 		"name": "Anna Karénine",
> 		"author": "Léon Tolstoï",
> 	"year": "1878",
> 		"availability": "300"
> 	}

## Delete request
If you want to delete some data, you need to run the following request:     https://first-api-of-anaelle.herokuapp.com/products/13

where the last number indicates the id of the book you want to delete. 











