import express from 'express'
import authMiddle from '../../../../MPR-sem6/PulmoCare/Backend/middleware/auth.js';
import { addToCart, removeFromCart, getCart } from '../../../../MPR-sem6/PulmoCare/Backend/controllers/cartController.js'

const cartRouter = express.Router();

cartRouter.post('/add', authMiddle, addToCart)
cartRouter.post('/remove', authMiddle, removeFromCart)
cartRouter.post('/get', authMiddle, getCart)

export default cartRouter