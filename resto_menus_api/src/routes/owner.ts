
import express, { Router } from 'express'
import { createOutlet, createOwner, } from '../controllers/owner';
import { authenticateToken } from '../middlewares/authHandler';
// Initialize Express   

const router:Router = express.Router();

router.post('/',createOwner)
router.post('/createOutlet',[authenticateToken],createOutlet)
export default router;