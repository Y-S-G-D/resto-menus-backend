import express from 'express'
import {createOutlet,signInOutlet} from '../controllers/outlet'
import { outletErrorHandler } from '../exception_handlers/outlet_err'
import dotenv from 'dotenv'
dotenv.config()
const router = express.Router()

const NODE_ENV = process.env.NODE_ENV ?? "development"


router.post('/',async(req,res)=>{
    try{

        const outlet = await createOutlet(req.body)
        if(outlet){
            res.status(200).json({message:"Outlet Created Successfully"})
            return;
        }
        
    }catch(err:unknown){
        const error = err as Error
        const handledError = outletErrorHandler(error)  
        res.status(handledError.statusCode).json({message:handledError.message})
    }
})


router.post('/login',async(req,res)=>{
    try{
        const {email,password} = req.body
        const authToken = await signInOutlet(email,password)
        if(authToken){
            res.cookie('_authToken',authToken,{httpOnly:true,
                secure:NODE_ENV === "production",
                sameSite:"strict",
                maxAge:1000*60*60*24*15
            })
            res.status(200).json({message:"Outlet Logged In Successfully",authToken})
            return;
        }

    }catch(e:unknown){
        const error = e as Error
        const handledError = outletErrorHandler(error)
        res.status(handledError.statusCode).json({message:handledError.message})

    }
})

export default router