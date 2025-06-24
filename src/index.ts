import "reflect-metadata"
import app from "./app";
import { AppDataSource } from "./db";

async function main() {
    try {
        await AppDataSource.initialize();
        console.log("Database connected...");
        app.listen(4000)
        console.log('Servidor escucahndo en el puerto 4000')

    } catch (error) {
        console.log(error)
        
    }

}

main();



