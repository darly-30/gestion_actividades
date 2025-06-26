import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';
import routes from './routes';

const app = express ()

app.use(morgan('dev'));
app.use(cors()) ;
dotenv.config();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(routes);



export default app;