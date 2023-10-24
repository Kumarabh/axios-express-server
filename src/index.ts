import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import { userRoutes } from './routes/user.route';

dotenv.config({path: './config/.env'});
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1/users', userRoutes)


app.listen(process.env.PORT, () => console.log(`Server is listening at port ${process.env.PORT}`))