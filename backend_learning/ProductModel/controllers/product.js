const Product = require('../models/product');
exports.getAllItems = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getItemById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Item not found" });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.createItem = async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedItem = await product.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.updateItem = async (req, res) => {
    try {
        const updatedItem = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: "Item not found" });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.deleteItem = async (req, res) => {
    try {
        const deletedItem = await Product.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: "Item not found" });
        res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};