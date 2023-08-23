import express from 'express';
import validateRequest from '../../middleware/handleCastError';
import { WishListController } from './wishList.controller';
import { WishListValidation } from './wishList.validation';

const router = express.Router();

router.get('/', WishListController.getAllWishList);

router.post(
  '/',
  validateRequest(WishListValidation.createWishListZodSchema),
  WishListController.createWishList
);

router.get('/:id', WishListController.getSingleWishList);

router.patch(
  '/:email',
  validateRequest(WishListValidation.updateWishListZodSchema),
  WishListController.updateWishList
);
router.delete('/:id', WishListController.deleteWishList);

export const WishListRoutes = router;
