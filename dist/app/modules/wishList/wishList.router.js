"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishListRoutes = void 0;
const express_1 = __importDefault(require("express"));
const handleCastError_1 = __importDefault(require("../../middleware/handleCastError"));
const wishList_controller_1 = require("./wishList.controller");
const wishList_validation_1 = require("./wishList.validation");
const router = express_1.default.Router();
router.get('/', wishList_controller_1.WishListController.getAllWishList);
router.post('/', (0, handleCastError_1.default)(wishList_validation_1.WishListValidation.createWishListZodSchema), wishList_controller_1.WishListController.createWishList);
router.get('/:email', wishList_controller_1.WishListController.getWishListByEmail);
router.get('/:id', wishList_controller_1.WishListController.getSingleWishList);
router.patch('/:email', (0, handleCastError_1.default)(wishList_validation_1.WishListValidation.updateWishListZodSchema), wishList_controller_1.WishListController.updateWishList);
router.delete('/:id', wishList_controller_1.WishListController.deleteWishList);
exports.WishListRoutes = router;
