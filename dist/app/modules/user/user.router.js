"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const user_controller_1 = require("./user.controller");
const express_1 = __importDefault(require("express"));
const user_validation_1 = require("./user.validation");
const handleCastError_1 = __importDefault(require("../../middleware/handleCastError"));
const router = express_1.default.Router();
router.get('/', user_controller_1.UserController.getAllUser);
router.post('/login', (0, handleCastError_1.default)(user_validation_1.UserValidation.loginUserZodSchema), user_controller_1.UserController.userLogin);
router.post('/register', (0, handleCastError_1.default)(user_validation_1.UserValidation.createUserZodSchema), user_controller_1.UserController.createUser);
router.get('/:id', user_controller_1.UserController.getSingleUser);
router.patch('/:id', (0, handleCastError_1.default)(user_validation_1.UserValidation.updateUserZodSchema), user_controller_1.UserController.updateUser);
router.delete('/:id', user_controller_1.UserController.deleteUser);
exports.UserRoutes = router;
