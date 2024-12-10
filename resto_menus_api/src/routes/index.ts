import menuRouter from './menus'
import seedRouter from './seed'
import ownerRouter from './owner'
import loginRouter from './login'
import outletRouter from './outlet'

import express, { Router } from 'express'
// Initialize Express   

const router:Router = express.Router();

router.use('/menus', menuRouter)
router.use('/seed', seedRouter)
router.use('/owner', ownerRouter)
router.use('/login', loginRouter)
router.use('/outlet',outletRouter)


export default router;
