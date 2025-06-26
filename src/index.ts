import "reflect-metadata"
import app from "./app";
import { AppDataSource } from "./db";
import dotenv from 'dotenv';

async function main() {
    try {
        dotenv.config();
        await AppDataSource.initialize();
        console.log("Database connected...");
        app.listen(4000)
        console.log('Servidor escuchando en el puerto 4000')

    } catch (error) {
        console.log(error)
        
    }

}

main();



