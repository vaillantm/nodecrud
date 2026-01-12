

**GET CATEGORIES**

http://localhost:8080/api/categories

![Image 1](public/images/image1.PNG)

**GET CATEGORIES by id**

http://localhost:3091/api/categories/2

![Image 2](public/images/image2)


**GET PRODUCTS**

http://localhost:8080/api/products




**GET PRODUCTS by id**

http://localhost:3091/api/products/204b0527-c13c-48d3-babf-e67767647f6d


**GET CART**

http://localhost:8080/api/cart/userid



**POST CATEGORIES**

http://localhost:8080/api/categories

```json
{
  "name": "Furniture",
  "description": "Equipment for house"
}
```
**POST PRODUCTS**
http://localhost:8080/api/products
```json

{
  "name": "Table",
  "price": 1200,
  "description": "Furtniture",
  "categoryId": "6aadc8fe-e4d4-4e70-864b-ebd13aa97976",
  "inStock": true,
  "quantity": 10
}
```
**POST product to cart**


http://localhost:8080/api/cart/userid/items

```json
{
  "productId": "1",
  "quantity": 2
}
```


**DELETE CATEGORY**

http://localhost:3091/api/categories/


**DELETE PRODUCT**

http://localhost:3091/api/products/


**DELETE CART**

http://localhost:8080/api/cart/userid


**UPDATE CATEGORIES**

http://localhost:3091/api/categories/9fdaa8e1-d791-4199-8c44-836fbc5542de

```json
 { 
   "name": "Veggies", 
 "description": "Fresh vegitables" }
 ```





**UPDATE PRODUCTS**



