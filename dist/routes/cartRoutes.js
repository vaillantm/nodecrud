"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const cartController_1 = require("../controllers/cartController");
router.get('/:userId', cartController_1.getCart);
router.post('/:userId/items', cartController_1.addItemToCart);
router.put('/:userId/items/:productId', cartController_1.updateCartItem);
router.delete('/:userId/items/:productId', cartController_1.deleteCartItem);
router.delete('/:userId', cartController_1.deleteCart);
exports.default = router;
