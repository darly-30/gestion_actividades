import  { Request, Response } from "express";
import { Activity } from "../entities/Activity";


export const createActivity = async (req: Request , res: Response) =>{
   
    try {
        const {tittle,description, state , userId} = req.body;
        const activity = new Activity();
        activity.tittle = tittle;
        activity. description = description;
        activity.state = state;
        activity.user =userId;
        await activity.save();

        res.json(activity);
    
    } catch (error) {
        if(error instanceof Error){
         res.status(500).json({message: error.message});
        }
    }

}