import express from 'express';
const router = express.Router();
import {
    getCart,
    addItemToCart,
    updateCartItem,
    deleteCartItem,
    deleteCart
} from '../controllers/cartController';

router.get('/:userId', getCart);
router.post('/:userId/items', addItemToCart);
router.put('/:userId/items/:productId', updateCartItem);
router.delete('/:userId/items/:productId', deleteCartItem);
router.delete('/:userId', deleteCart);

export default router;
