import express,{Router} from 'express'
import { createItem, deleteItem } from '../controllers/outlet';
import { authenticateToken } from '../middlewares/authHandler';

const router:Router = express.Router();

router.post('/item',[authenticateToken],createItem)
router.delete('/item/:id',[authenticateToken],deleteItem)

export default router;
