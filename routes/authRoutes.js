import express from "express";
const router = express.Router()

import { register,login, updatedUser } from "../controllers/authController.js";

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/updatedUser').post(updatedUser)

export default router