"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategory = exports.getCategories = void 0;
const uuid_1 = require("uuid");
const categories_1 = require("../data/categories");
const getCategories = (req, res) => {
    res.json(categories_1.categories);
};
exports.getCategories = getCategories;
const getCategory = (req, res) => {
    const { id } = req.params;
    const category = categories_1.categories.find(c => c.id === id);
    if (category) {
        res.json(category);
    }
    else {
        res.status(404).json({ message: 'Category not found' });
    }
};
exports.getCategory = getCategory;
const createCategory = (req, res) => {
    const { name, description } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'Name is required' });
    }
    const newCategory = { id: (0, uuid_1.v4)(), name, description };
    categories_1.categories.push(newCategory);
    res.status(201).json(newCategory);
};
exports.createCategory = createCategory;
const updateCategory = (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const categoryIndex = categories_1.categories.findIndex(c => c.id === id);
    if (categoryIndex !== -1) {
        categories_1.categories[categoryIndex] = Object.assign(Object.assign({}, categories_1.categories[categoryIndex]), { name, description });
        res.json(categories_1.categories[categoryIndex]);
    }
    else {
        res.status(404).json({ message: 'Category not found' });
    }
};
exports.updateCategory = updateCategory;
const deleteCategory = (req, res) => {
    const { id } = req.params;
    const categoryIndex = categories_1.categories.findIndex(c => c.id === id);
    if (categoryIndex !== -1) {
        const deletedCategory = categories_1.categories.splice(categoryIndex, 1);
        res.status(200).json(deletedCategory);
    }
    else {
        res.status(404).json({ message: 'Category not found' });
    }
};
exports.deleteCategory = deleteCategory;
