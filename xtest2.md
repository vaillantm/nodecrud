Here are **3 complete working API endpoints** you can immediately test in **Postman** with real URLs and JSON bodies.

Base URL

```
http://localhost:8080
```

---

# 1️⃣ CREATE CATEGORY

**POST**

```
http://localhost:8080/api/categories
```

**Headers**

```
Content-Type: application/json
```

**Body → raw → JSON**

```json
{
  "name": "Electronics"
}
```

---

# 2️⃣ CREATE PRODUCT

**POST**

```
http://localhost:8080/api/products
```

**Headers**

```
Content-Type: application/json
```

**Body → raw → JSON**

```json
{
  "name": "HP Pavilion 15",
  "price": 300000,
  "description": "HP laptop with good battery life",
  "categoryId": "1",
  "inStock": true,
  "quantity": 78
}
```

---

# 3️⃣ ADD PRODUCT TO CART

**POST**

```
http://localhost:8080/api/cart/1/items
```

**Headers**

```
Content-Type: application/json
```

**Body → raw → JSON**

```json
{
  "productId": "1",
  "quantity": 2
}
```

---

# CHECK DATA

### Get Cart

**GET**

```
http://localhost:8080/api/cart/1
```

### Get Products

**GET**

```
http://localhost:8080/api/products
```

### Get Categories

**GET**

```
http://localhost:8080/api/categories
```

---

# UPDATE TEST

### Update cart item quantity

**PUT**

```
http://localhost:8080/api/cart/1/items/1
```

**Body**

```json
{
  "quantity": 5
}
```

---
