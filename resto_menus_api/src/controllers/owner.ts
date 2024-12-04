import { prisma } from "../lib/prisma";
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";

export const createOwner = async (req:Request,res:Response,next:NextFunction):Promise<void>=>{

    try {
        /// hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;
        const owner = await prisma.owner.create({
            data: req.body
        });
        res.status(201).json(owner);
    } catch (error) {
        next(error);
    }

}

