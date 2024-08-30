import express from "express"
import { loginController, registerController, testController } from "../controllers/authController.js"
import { requireSignIn } from "../middlewares/authMiddleware.js";
// import {registerController}



// router object
const router = express.Router()

// routing
// REGISTER || METHOD POST
router.post('/register', registerController);

// LOGIN || METHOD POST
router.post('/login', loginController);

// test
router.get('/test', requireSignIn, testController);

export default router;