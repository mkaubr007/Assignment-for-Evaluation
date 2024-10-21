"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
class UserValidator {
    constructor() {
        this.newUser = (req, res, next) => {
            const schema = joi_1.default.object({
                name: joi_1.default.string().min(4).required(),
                email: joi_1.default.string()
                    .pattern(new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
                    .required(),
                password: joi_1.default.string()
                    .min(8)
                    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'))
                    .required()
                    .messages({
                    'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
                }),
            });
            const { error } = schema.validate(req.body);
            if (error) {
                next(error);
            }
            next();
        };
        this.loginUser = (req, res, next) => {
            const schema = joi_1.default.object({
                email: joi_1.default.string()
                    .required(),
                password: joi_1.default.string()
                    .required(),
            });
            const { error } = schema.validate(req.body);
            if (error) {
                next(error);
            }
            next();
        };
    }
}
exports.default = UserValidator;
