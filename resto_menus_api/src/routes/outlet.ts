import express from 'express'
import {createOutlet} from '../controllers/outlet'
import { outletErrorHandler } from '../exception_handlers/outlet_err'
const router = express.Router()


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

export default router