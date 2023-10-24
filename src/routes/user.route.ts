import express from 'express';
import { getUsers } from '../controllers/user.controller';
const userRoutes = express.Router();

userRoutes.route('/')
.get(getUsers)
.post()

export { userRoutes }
