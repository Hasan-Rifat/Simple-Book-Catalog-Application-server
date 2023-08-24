"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadingListRoutes = void 0;
const express_1 = __importDefault(require("express"));
const readingList_validation_1 = require("./readingList.validation");
const handleCastError_1 = __importDefault(require("../../middleware/handleCastError"));
const readingList_controller_1 = require("./readingList.controller");
const router = express_1.default.Router();
router.get('/', readingList_controller_1.ReadingListController.getAllReadingList);
router.post('/', (0, handleCastError_1.default)(readingList_validation_1.RedingListValidation.createRedingListZodSchema), readingList_controller_1.ReadingListController.createReadingList);
router.get('/:email', readingList_controller_1.ReadingListController.getReadingListByEmail);
router.get('/:id', readingList_controller_1.ReadingListController.getSingleReadingList);
router.patch('/:id', (0, handleCastError_1.default)(readingList_validation_1.RedingListValidation.updateRedingListZodSchema), readingList_controller_1.ReadingListController.updateReadingList);
router.delete('/:id', readingList_controller_1.ReadingListController.deleteReadingList);
exports.ReadingListRoutes = router;
