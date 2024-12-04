
import express, { Router } from 'express'
import { createOwner } from '../controllers/owner';
// Initialize Express   

const router:Router = express.Router();

router.post('/',createOwner)

export default router;