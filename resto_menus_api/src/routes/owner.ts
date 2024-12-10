
import express, { Router } from 'express'
import { createOutlet, createOwner, getOutlets, } from '../controllers/owner';
import { authenticateToken } from '../middlewares/authHandler';
// Initialize Express   

const router:Router = express.Router();

router.post('/',createOwner)
router.post('/createOutlet',[authenticateToken],createOutlet)
router.get('/outlets',[authenticateToken],getOutlets)
export default router;