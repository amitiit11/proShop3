import express from "express";
const router = express.Router();
// import products from '../data/products.js';
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../model/productModel.js";

router.get("/", asyncHandler(async(req, res)=>{
    const products = await Product.find({});

    res.json(products);
}))
router.get("/:id", asyncHandler(async(req, res)=>{
    const product = await Product.findById(req.params.id)
    res.json(product);
}))

export default router;