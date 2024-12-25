const product = require("../models/product.model");

const productController = {
  //POST http://127.0.0.1:5000/api/product/add
  addProduct: async (req, res) => {
    const { name, desc, price } = req.body;
    //console.log('req.body:', req.body)
    if (!name || !desc || !price) {
      return res.status(404).json({
        message: "Please Provide All the Data",
      });
    }
    try {
      const newProduct = new product({ name, desc, price });
      await newProduct.save();
      res.status(201).json({
        message: "Product Add Successfully done...",
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
  viewProduct: async (req, res) => {
    try {
      const existing_product = await product.find({});
      if (!existing_product) {
        return res.status(400).json({
          message: "Product Not Found",
        });
      }
      return res.status(200).json(existing_product);
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  },
  viewProductById: async (req, res) => {
    const { id } = req.params;
    try {
      const existing_product = await product.findById({ _id: id });
      if (!existing_product) {
        return res.status(400).json({
          message: "Product Not Found",
        });
      }
      return res.status(200).json(existing_product);
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  },
  updateProduct: async (req, res) => {
    const { id } = req.params;
    const { name, desc, price } = req.body;
    try {
      const newProduct = await product.findByIdAndUpdate(
        { _id: id },
        { name, desc, price },
        { new: true }
      );
      if (!newProduct) {
        return res.status(400).json({
          message: "Product Not Found",
        });
      }
      return res.status(201).json(newProduct);
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  },
  deleteProduct: async (req, res) => {
    const { id } = req.params;
    try {
      const newProduct = await product.findByIdAndDelete({ _id: id });
      if (!newProduct) {
        return res.status(400).json({
          message: "Product Not Found",
        });
      }
      return res.status(201).json({ message: "Product Delete" });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  },
};

module.exports = productController;
