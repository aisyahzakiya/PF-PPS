import express from "express";
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "./controller.js";

const router = express.Router();

router.get('/kucing', getProducts);
router.get('/kucing/:id', getProductById);
router.post('/kucing', createProduct); // untuk menambhalan profil kucing baru
router.patch('/kucing/:id', updateProduct);   //untuk edit profil kucing
router.delete('/kucing/:id', deleteProduct);



export default router;