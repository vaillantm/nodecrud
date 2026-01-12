import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Product } from '../types';
import { products } from '../data/products';
import { categories } from '../data/categories';

export const getProducts = (req: Request, res: Response) => {
    res.json(products);
};

export const getProduct = (req: Request, res: Response) => {
    const { id } = req.params;
    const product = products.find(p => p.id === id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

export const createProduct = (req: Request, res: Response) => {
    const { name, price, description, categoryId, inStock, quantity } = req.body;
    if (!name || !price || !categoryId) {
        return res.status(400).json({ message: 'Name, price, and categoryId are required' });
    }
    const category = categories.find(c => c.id === categoryId);
    if (!category) {
        return res.status(400).json({ message: 'Invalid categoryId' });
    }
    const newProduct: Product = { id: uuidv4(), name, price, description, categoryId, inStock, quantity };
    products.push(newProduct);
    res.status(201).json(newProduct);
};

export const updateProduct = (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, price, description, categoryId, inStock, quantity } = req.body;
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        if (categoryId) {
            const category = categories.find(c => c.id === categoryId);
            if (!category) {
                return res.status(400).json({ message: 'Invalid categoryId' });
            }
        }
        products[productIndex] = { ...products[productIndex], name, price, description, categoryId, inStock, quantity };
        res.json(products[productIndex]);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

export const deleteProduct = (req: Request, res: Response) => {
    const { id } = req.params;
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        const deleted = products.splice(productIndex, 1);
        res.status(200).json(deleted);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};
