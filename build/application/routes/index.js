"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_js_1 = __importDefault(require("./v1/index.js"));
const router = (0, express_1.Router)();
router.use('/v1', index_js_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map