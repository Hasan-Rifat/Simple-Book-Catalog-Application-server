import { UserController } from './user.controller';
import express from 'express';
import { UserValidation } from './user.validation';
import validateRequest from '../../middleware/handleCastError';

const router = express.Router();

router.get('/', UserController.getAllUser);

router.post(
  '/login',
  validateRequest(UserValidation.loginUserZodSchema),
  UserController.userLogin
);

router.post(
  '/register',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser
);

router.get('/:id', UserController.getSingleUser);

router.patch(
  '/:id',
  validateRequest(UserValidation.updateUserZodSchema),
  UserController.updateUser
);
router.delete('/:id', UserController.deleteUser);

export const UserRoutes = router;
