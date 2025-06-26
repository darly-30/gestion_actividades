import bcrypt from 'bcryptjs';
import { Request, Response } from "express";
import { User } from '../entities/user.entity'
import { AppDataSource } from "../db";
import { generateToken } from "../utils/jwt";


export const registerUser = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User();
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = hashedPassword;

        await user.save();

        res.status(201).json({
          user,
          message: "Usuario creado exitosamente"
        });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
};
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOneBy({ email });

    if (!user) {
       res.status(400).json({ message: "Usuario no encontrado" });
       return;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
       res.status(401).json({ message: "Contraseña incorrecta" });
       return;
    }
    const token = generateToken({ id: user.id, email: user.email });

    res.status(200).json({
      message: "Login exitoso",
      token,
      user
    });

  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};

