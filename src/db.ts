import { DataSource } from "typeorm";
import {User} from "./entities/User"
import { userInfo } from "os";
import { Activity } from "./entities/Activity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345678",
    database: "gestion",
    synchronize: true,
    logging: true,
    entities: [User, Activity],
    subscribers: [],
    migrations: [],
})