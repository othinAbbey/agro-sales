import { Router } from 'express';
const router = Router();
import { getUsers,register,login } from "../controllers/userController"; // we import the userController from the controllers 
//
router.get('/', getUsers);
router.post('/register', register);
router.post('/login', login);
export default router;