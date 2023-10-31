"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../../../infrastructure/controllers/UserController"));
const router = (0, express_1.Router)();
const userController = new UserController_1.default();
router.get('/registration', userController.register);
exports.default = router;
//# sourceMappingURL=UserRouter.js.map