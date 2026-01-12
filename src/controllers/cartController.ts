import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Cart, CartItem } from '../types';
import { carts } from '../data/carts';
import { products } from '../data/products';

export const getCart = (req: Request, res: Response) => {
    const { userId } = req.params;
    if (typeof userId !== 'string') {
        return res.status(400).json({ message: 'userId must be a string' });
    }
    const cart = carts[userId];
    if (cart) {
        res.json(cart);
    } else {
        // Return an empty cart if not found
        res.json({ id: uuidv4(), userId, items: [] });
    }
};

export const addItemToCart = (req: Request, res: Response) => {
    const { userId } = req.params;
    if (typeof userId !== 'string') {
        return res.status(400).json({ message: 'userId must be a string' });
    }
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
        return res.status(400).json({ message: 'productId and quantity are required' });
    }

    const product = products.find(p => p.id === productId);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    let cart = carts[userId];
    if (!cart) {
        cart = { id: uuidv4(), userId, items: [] };
        carts[userId] = cart;
    }

    const existingItemIndex = cart.items.findIndex((item: CartItem) => item.productId === productId);
    if (existingItemIndex !== -1) {
        cart.items[existingItemIndex].quantity += quantity;
    } else {
        const cartItem: CartItem = { productId, quantity };
        cart.items.push(cartItem);
    }

    res.status(201).json(cart);
};

export const updateCartItem = (req: Request, res: Response) => {
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

    const cart = carts[userId];
    if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
    }

    const itemIndex = cart.items.findIndex((item: CartItem) => item.productId === productId);
    if (itemIndex !== -1) {
        cart.items[itemIndex].quantity = quantity;
        res.json(cart.items[itemIndex]);
    } else {
        res.status(404).json({ message: 'Item not found in cart' });
    }
};

export const deleteCartItem = (req: Request, res: Response) => {
    const { userId, productId } = req.params;
    if (typeof userId !== 'string') {
        return res.status(400).json({ message: 'userId must be a string' });
    }
    if (typeof productId !== 'string') {
        return res.status(400).json({ message: 'productId must be a string' });
    }
    const cart = carts[userId];
    if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
    }

    const itemIndex = cart.items.findIndex((item: CartItem) => item.productId === productId);
    if (itemIndex !== -1) {
        const deleted = cart.items.splice(itemIndex, 1);
        res.status(200).json(deleted);
    } else {
        res.status(404).json({ message: 'Item not found in cart' });
    }
};

export const deleteCart = (req: Request, res: Response) => {
    const { userId } = req.params;
    if (typeof userId !== 'string') {
        return res.status(400).json({ message: 'userId must be a string' });
    }
    if (carts[userId]) {
        delete carts[userId];
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Cart not found' });
    }
};
