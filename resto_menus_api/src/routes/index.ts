import menuRouter from './menus'
import outletRouter from './outlet'
import seedRouter from './seed'

import express, { Router } from 'express'
// Initialize Express   

const router:Router = express.Router();

router.use('/menus', menuRouter)
router.use('/outlet', outletRouter)
router.use('/seed', seedRouter)

export default router;
