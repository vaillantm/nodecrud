import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Category } from '../types';
import { categories } from '../data/categories';

export const getCategories = (req: Request, res: Response) => {
    res.json(categories);
};

export const getCategory = (req: Request, res: Response) => {
    const { id } = req.params;
    const category = categories.find(c => c.id === id);
    if (category) {
        res.json(category);
    } else {
        res.status(404).json({ message: 'Category not found' });
    }
};

export const createCategory = (req: Request, res: Response) => {
    const { name, description } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'Name is required' });
    }
    const newCategory: Category = { id: uuidv4(), name, description };
    categories.push(newCategory);
    res.status(201).json(newCategory);
};

export const updateCategory = (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const categoryIndex = categories.findIndex(c => c.id === id);
    if (categoryIndex !== -1) {
        categories[categoryIndex] = { ...categories[categoryIndex], name, description };
        res.json(categories[categoryIndex]);
    } else {
        res.status(404).json({ message: 'Category not found' });
    }
};

export const deleteCategory = (req: Request, res: Response) => {
    const { id } = req.params;
    const categoryIndex = categories.findIndex(c => c.id === id);
    if (categoryIndex !== -1) {
        const deletedCategory = categories.splice(categoryIndex, 1);
        res.status(200).json(deletedCategory);
    } else {
        res.status(404).json({ message: 'Category not found' });
    }
};
