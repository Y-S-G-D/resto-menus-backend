import OutletModel,{IOutlet} from "../models/Outlet";

export async function createOutlet(outlet:IOutlet){
    try{
        const newOutlet = await OutletModel.create(outlet);
        return newOutlet;
    }
    catch(error:unknown){
        const message = (error as Error).message
        throw new Error(message)        
    }
}

