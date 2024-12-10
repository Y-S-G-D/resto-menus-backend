import { NextFunction,Request,Response } from "express";
import { ownerLogin } from "./owner";
import { outletLogin } from "./outlet";



export const login = async (req: Request, res: Response, next:NextFunction) => {
    try{
        const role = req.params.role;
        if(role === "owner"){
            return ownerLogin(req,res,next);
        }
        if(role === "outlet"){
            return outletLogin(req,res,next);
        }
        res.status(404).json({message:"Invalid Role"});
        return;
    }catch(err){
        next(err);
    }
}
