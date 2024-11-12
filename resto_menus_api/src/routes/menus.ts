import express from 'express'
import { getMenus } from '../controllers/menus'

const router = express.Router()

router.get('/:page/:limit', async (req,res)=>{
    try{
        console.log(req)
        const page = parseInt(req.params.page || '1')
        const limit = parseInt(req.params.limit || '10')
        const menus = await getMenus({page,limit})
        res.json(menus)
    }catch(err: unknown){
        res.status(500).json({message: (err as Error).message})
    }
})




export default router
