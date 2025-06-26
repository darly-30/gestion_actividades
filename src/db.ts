import { DataSource } from "typeorm";
import {User} from "./entities/user.entity"
import { userInfo } from "os";
import { Activity } from "./entities/activity.entity";
import dotenv from 'dotenv';
dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [User, Activity],
    subscribers: [],
    migrations: [],
})