import { Request,Response,NextFunction } from "express";
import { prisma } from "../lib/prisma";
import bcrypt from 'bcrypt';
import { generateToken, setTokensInCookies } from "../middlewares/authHandler";


export const outletLogin = async (req:Request, res:Response, next:NextFunction):Promise<void> => {
    try{
       
        const {email,password} = req.body;

        if(!email || !password){
            res.status(400).json({
                success:false,
                message:"Please provide email and password"
            });
            return;
        }
        
        const outlet = await prisma.outlet.findUnique({
            where:{
                email: email
            }
        })
        if(!outlet){
            res.status(404).json({
                success:false,
                message:"Outlet not found"});
            return;
        }
        const isPasswordValid = await bcrypt.compare(password, outlet.password);
        if(!isPasswordValid){
            res.status(401).json({
                success:false,
                message:"Invalid Userid or Password"
            });
            return;
        }
        const token = generateToken({id:outlet.id,email:outlet.email,role:"outlet"},"access");  
        const refreshToken = generateToken({id:outlet.id,email:outlet.email,role:"outlet"},"refresh");
        setTokensInCookies(res, token, refreshToken);
        res.status(200).json({
            success:true,
            message:"Outlet logged in successfully",
            data:{
                access_token:token,
                email:outlet.email,
                outletName:outlet.outletName,
                role:"outlet"
            }
        });

    }catch(error){
        next(error)
    }
}

export const createItem = async (req:Request, res:Response, next:NextFunction):Promise<void> => {

    try{
        if(req.user?.id === undefined){
            res.status(401).json({
                success:false,
                message:"Unauthorized access"
            });
            return;
        }
        const createdItem = await prisma.item.create({
            data:{
                ...req.body,
                itemPrice: {
                    create: [...req.body.itemPrice]
                },
                outlets: {
                    create: [
                        {
                            outlet: {
                                connect: {
                                    id: req.user?.id, // Ensure this is the ID of the outlet
                                },
                            },
                        },
                    ],
                },
                
            },

        })
        if(!createdItem){
            res.status(400).json({
                success:false,
                message:"Item not created"
            });
            return;
        }
        res.status(201).json({
            success:true,
            message:"Item created successfully",
            data:createdItem
        });
    }catch(e){
        console.log("error ",e)
        next(e)
    }

}

export const deleteItem = async (req:Request, res:Response, next:NextFunction):Promise<void> => {
    try{
        console.log("url ",req.params)
        const itemId = req.params.id;
        if(!itemId){
            res.status(400).json({
                success:false,
                message:"Please provide item id"
            });
            return;
        }
        const deletedItem = await prisma.item.delete({
            where:{
                id:itemId
            }
        });
        res.status(200).json({
            success:true,
            message:"Item deleted successfully",
            data:deletedItem
        });
    }catch(e){
        console.log("error ",e)
        next(e)
    }
}