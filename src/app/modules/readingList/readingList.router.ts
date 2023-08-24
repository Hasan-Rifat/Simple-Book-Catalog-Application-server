import express from 'express';
import { RedingListValidation } from './readingList.validation';
import validateRequest from '../../middleware/handleCastError';
import { ReadingListController } from './readingList.controller';

const router = express.Router();

router.get('/', ReadingListController.getAllReadingList);

router.post(
  '/',
  validateRequest(RedingListValidation.createRedingListZodSchema),
  ReadingListController.createReadingList
);
router.get('/:email', ReadingListController.getReadingListByEmail);
router.get('/:id', ReadingListController.getSingleReadingList);

router.patch(
  '/:email',
  validateRequest(RedingListValidation.updateRedingListZodSchema),
  ReadingListController.updateReadingList
);
router.delete('/:id', ReadingListController.deleteReadingList);

export const ReadingListRoutes = router;
