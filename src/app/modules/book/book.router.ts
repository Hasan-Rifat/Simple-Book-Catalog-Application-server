import express from 'express';
import { BookController } from './book.controller';
import { BookValidation } from './book.validation';
import validateRequest from '../../middleware/handleCastError';

const router = express.Router();

router.get('/', BookController.getAllBooks);
router.post(
  '/',
  validateRequest(BookValidation.createBookZodSchema),
  BookController.createBook
);
router.get('/:id', BookController.getSingleBook);

router.patch(
  '/:id',
  validateRequest(BookValidation.updateBookZodSchema),
  BookController.updateBook
);
router.delete('/:id', BookController.deleteBook);

export const BookRoutes = router;
