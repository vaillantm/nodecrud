"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCart = exports.deleteCartItem = exports.updateCartItem = exports.addItemToCart = exports.getCart = void 0;
const uuid_1 = require("uuid");
const carts_1 = require("../data/carts");
const products_1 = require("../data/products");
const getCart = (req, res) => {
    const { userId } = req.params;
    if (typeof userId !== 'string') {
        return res.status(400).json({ message: 'userId must be a string' });
    }
    const cart = carts_1.carts[userId];
    if (cart) {
        res.json(cart);
    }
    else {
        // Return an empty cart if not found
        res.json({ id: (0, uuid_1.v4)(), userId, items: [] });
    }
};
exports.getCart = getCart;
const addItemToCart = (req, res) => {
    const { userId } = req.params;
    if (typeof userId !== 'string') {
        return res.status(400).json({ message: 'userId must be a string' });
    }
    const { productId, quantity } = req.body;
    if (!productId || !quantity) {
        return res.status(400).json({ message: 'productId and quantity are required' });
    }
    const product = products_1.products.find(p => p.id === productId);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    let cart = carts_1.carts[userId];
    if (!cart) {
        cart = { id: (0, uuid_1.v4)(), userId, items: [] };
        carts_1.carts[userId] = cart;
    }
    const existingItemIndex = cart.items.findIndex((item) => item.productId === productId);
    if (existingItemIndex !== -1) {
        cart.items[existingItemIndex].quantity += quantity;
    }
    else {
        const cartItem = { productId, quantity };
        cart.items.push(cartItem);
    }
    res.status(201).json(cart);
};
exports.addItemToCart = addItemToCart;
const updateCartItem = (req, res) => {
    const { userId, productId } = req.params;
    if (typeof userId !== 'string') {
        return res.status(400).json({ message: 'userId must be a string' });
    }
    if (typeof productId !== 'string') {
        return res.status(400).json({ message: 'productId must be a string' });
    }
    const { quantity } = req.body;
    if (!quantity) {
        return res.status(400).json({ message: 'quantity is required' });
    }
    const cart = carts_1.carts[userId];
    if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
    }
    const itemIndex = cart.items.findIndex((item) => item.productId === productId);
    if (itemIndex !== -1) {
        cart.items[itemIndex].quantity = quantity;
        res.json(cart.items[itemIndex]);
    }
    else {
        res.status(404).json({ message: 'Item not found in cart' });
    }
};
exports.updateCartItem = updateCartItem;
const deleteCartItem = (req, res) => {
    const { userId, productId } = req.params;
    if (typeof userId !== 'string') {
        return res.status(400).json({ message: 'userId must be a string' });
    }
    if (typeof productId !== 'string') {
        return res.status(400).json({ message: 'productId must be a string' });
    }
    const cart = carts_1.carts[userId];
    if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
    }
    const itemIndex = cart.items.findIndex((item) => item.productId === productId);
    if (itemIndex !== -1) {
        const deleted = cart.items.splice(itemIndex, 1);
        res.status(200).json(deleted);
    }
    else {
        res.status(404).json({ message: 'Item not found in cart' });
    }
};
exports.deleteCartItem = deleteCartItem;
const deleteCart = (req, res) => {
    const { userId } = req.params;
    if (typeof userId !== 'string') {
        return res.status(400).json({ message: 'userId must be a string' });
    }
    if (carts_1.carts[userId]) {
        delete carts_1.carts[userId];
        res.status(204).send();
    }
    else {
        res.status(404).json({ message: 'Cart not found' });
    }
};
exports.deleteCart = deleteCart;
