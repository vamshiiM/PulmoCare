import express from 'express'
import authMiddleware from "../../../../MPR-sem6/PulmoCare/Backend/middleware/auth.js"
import { placeOrder } from '../../../../MPR-sem6/PulmoCare/Backend/controllers/orderController.js'

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);

export default orderRouter