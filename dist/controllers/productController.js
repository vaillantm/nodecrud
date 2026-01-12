"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProduct = exports.getProducts = void 0;
const uuid_1 = require("uuid");
const products_1 = require("../data/products");
const categories_1 = require("../data/categories");
const getProducts = (req, res) => {
    res.json(products_1.products);
};
exports.getProducts = getProducts;
const getProduct = (req, res) => {
    const { id } = req.params;
    const product = products_1.products.find(p => p.id === id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({ message: 'Product not found' });
    }
};
exports.getProduct = getProduct;
const createProduct = (req, res) => {
    const { name, price, description, categoryId, inStock, quantity } = req.body;
    if (!name || !price || !categoryId) {
        return res.status(400).json({ message: 'Name, price, and categoryId are required' });
    }
    const category = categories_1.categories.find(c => c.id === categoryId);
    if (!category) {
        return res.status(400).json({ message: 'Invalid categoryId' });
    }
    const newProduct = { id: (0, uuid_1.v4)(), name, price, description, categoryId, inStock, quantity };
    products_1.products.push(newProduct);
    res.status(201).json(newProduct);
};
exports.createProduct = createProduct;
const updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, price, description, categoryId, inStock, quantity } = req.body;
    const productIndex = products_1.products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        if (categoryId) {
            const category = categories_1.categories.find(c => c.id === categoryId);
            if (!category) {
                return res.status(400).json({ message: 'Invalid categoryId' });
            }
        }
        products_1.products[productIndex] = Object.assign(Object.assign({}, products_1.products[productIndex]), { name, price, description, categoryId, inStock, quantity });
        res.json(products_1.products[productIndex]);
    }
    else {
        res.status(404).json({ message: 'Product not found' });
    }
};
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => {
    const { id } = req.params;
    const productIndex = products_1.products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        const deleted = products_1.products.splice(productIndex, 1);
        res.status(200).json(deleted);
    }
    else {
        res.status(404).json({ message: 'Product not found' });
    }
};
exports.deleteProduct = deleteProduct;
