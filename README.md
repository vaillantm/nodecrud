

**GET CATEGORIES**

http://localhost:3091/api/categories

![Image 1](public/images/image1.PNG)

**GET CATEGORIES by id**

http://localhost:3091/api/categories/id

![Image 2](public/images/image2.PNG)

**GET PRODUCTS**

http://localhost:3091/api/products

![Image 3](public/images/image3.PNG)

**GET PRODUCTS by id**

http://localhost:3091/api/products/id


![Image 4](public/images/image4.PNG)

**GET CART**

http://localhost:3091/api/cart/userid

![Image 6](public/images/image6.PNG)

**POST CATEGORIES**

http://localhost:3091/api/categories

```json

{
  "name": "Cars ",
  "description": " For Driving "
}
```

![Image 7](public/images/image7.PNG)



**POST PRODUCTS**
http://localhost:3091/api/products

```json
{
  "name": "Smart Phone",
  "price": 1200,
  "description": "Electronic Device",
  "categoryId": "1",
  "inStock": true,
  "quantity": 10
}
```

![Image 8](public/images/image8.PNG)

**POST product to cart**


http://localhost:3091/api/cart/userid/items

```json
{
  "productId": "2",
  "quantity": 2
}
```
![Image 5](public/images/image5.PNG)


**DELETE CATEGORY**

http://localhost:3091/api/categories/id

![Image 9](public/images/image9.png)


**DELETE PRODUCT**

http://localhost:3091/api/products/id

![Image 10] (public/images/image10.PNG)




**UPDATE CATEGORIES**

http://localhost:3091/api/categories/9fdaa8e1-d791-4199-8c44-836fbc5542de

```json
 {
    
        "name": "Electronic Devices",
        "description": "Gadgets and devices"
    }
 ```

 ![Image 12] (public/images/image12.PNG)





**UPDATE PRODUCTS**
http://localhost:3091/api/products

```json
{
  "name": "Cell Phone",
  "price": 1200,
  "description": "Electronic Device",
  "categoryId": "1",
  "inStock": true,
  "quantity": 10
}
![Image 11] (public/images/image11.PNG)



