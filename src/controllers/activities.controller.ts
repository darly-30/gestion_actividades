import { Request, Response } from "express";
import { Between, ILike } from "typeorm";
import { Activity } from "../entities/activity.entity";
import { AppDataSource } from "../db";

declare global {
	namespace Express {
		interface Request {
			user?: {
				id: string
				email: string
				[key: string]: any
			}
		}
	}
}

export const createActivity = async (req: Request, res: Response) => {
    try {
        const { title, description, state } = req.body;
        const userId = (req.user as any).id;
        const activity = new Activity();
        activity.title = title;
        activity.description = description;
        activity.state = state;
        activity.user = userId;
        await activity.save();

       res.status(200).json({
           activity, message: "Actividad creada exitosamente"
       });

    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }

}
export const updateActivity = async (req: Request, res: Response) => {

    try {
        const { id, title, description, state } = req.body;
        const activityRepo = AppDataSource.getRepository(Activity)
        const activity = await activityRepo.findOneBy({ id });

        if (!activity) {
            res.status(404).json({ message: "Actividad no encontrada" });
            return;
        }
        activity.title = title;
        activity.description = description;
        activity.state = state;
        await activity.save();

        res.status(200).json({
           activity, message: "Actividad actualizada exitosamente"
       });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export const deleteActivity = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;
        const activityRepo = AppDataSource.getRepository(Activity);
        const activity = await activityRepo.findOneBy({ id });

        if (!activity) {
            res.status(404).json({ message: "Actividad no encontrada" });
            return;
        }
        await activityRepo.remove(activity);
        res.status(200).json({ message: "Actividad eliminada exitosamente" });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export const getActivitiesByUserId = async (req: Request, res: Response) => {
    try {
        const {  from= '1970-01-01' , to = new Date(), page = 1, limit = 10, title='', state  } = req.body;
        const activityRepo = AppDataSource.getRepository(Activity);
        const userId = (req.user as any).id;

        const activities = await activityRepo.find({
            where: { user: { id: userId },
                createdAt: Between(new Date(from), new Date(to)),
                title: title ? ILike(`%${title}%`) : undefined, 
                state: state !== undefined ? state : undefined 
            },
            skip: (page - 1) * limit,
            take: limit,
            order: { createdAt: "DESC" }

        });

        if (activities.length === 0) {
            res.status(404).json({ message: "No se encontraron actividades para este usuario" });
            return;
        }

        res.status(200).json({ activities, message: "Actividades obtenidas exitosamente" });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}


