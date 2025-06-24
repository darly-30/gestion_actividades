import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRoute from './routes/user.routes'

const app = express ()

app.use(morgan('dev')) //para que me muestre las peticiones que mando
app.use(cors()) //para conectar con frontend
app.use(express.json());
app.use(userRoute)


export default app;