import express from 'express';
const router = express.Router();
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';


// @description     fetch all products
// @route fetch     GET /api/products
// @access          Public
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
}));

// @description     fetch single products
// @route fetch     GET /api/products/id
// @access          Public
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params._id);
    if(!!product){
       return res.json(product);
    }
    return res.status(404).json({
        message: 'Product not found'
    });
    
}));


export default router;