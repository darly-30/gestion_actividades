import { Request, Response } from "express";
import {User} from '../entities/User'
import { AppDataSource } from "../db";


export const createUser = async (req: Request, res:Response) =>{
    try {
        const {firstName, lastName, email, password} = req.body;
        const user = new User();
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = password;

        await user.save();

         res.json(user);
        
    } catch (error) {
        if(error instanceof Error){
         res.status(500).json({message: error.message});
        }
    }
};
export const login = async (req: Request, res:Response): Promise<void> =>{
    try{
        const {email, password} = req.body;
        if (!email || !password) {
            res.status(400).json({ message: 'Email y contraseña son requeridos' });
        }else{
            const userRepo = AppDataSource.getRepository(User);
            const user = await userRepo.findOneBy({ email });
            if(user){
                if(user.password == password){
                    res.status(200).json({ message: 'Login exitoso' });

                }else{
                    res.status(401).json({ message: 'Contraseña incorrecta' });
                }
            }else{
                res.status(400).json({ message: 'Usuario no encontrado' });
        }
    

        }
        
        
    }catch (error) {
      if(error instanceof Error){
         res.status(500).json({message: error.message});
        }
    }
}

