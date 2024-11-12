import express from 'express'
import {seedMenus} from '../controllers/seed/items'

const router = express.Router()

router.post('/menus', async (req,res)=>{
    try{
        console.log(req.body)
        const {numberOfMenus} = req.body
        for(let i=0; i < numberOfMenus; i++){
            await seedMenus()
        }
        res.json({message: "Items seeded successfully"})
    }catch(err: unknown){
        res.status(500).json({message: (err as Error).message})
    }
})

export default router