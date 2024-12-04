import express,{ Router} from 'express';
import { login } from '../controllers/login';

const router:Router = express.Router();

router.get('/:role', login)

export default router;