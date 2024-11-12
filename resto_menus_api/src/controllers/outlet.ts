import OutletModel,{IOutlet} from "../models/Outlet";
import { hashPassword } from "../services/password_hasing";
export async function createOutlet(outlet:IOutlet):Promise<IOutlet>{
    try{
        outlet.password = await hashPassword(outlet.password);
        const newOutlet = await OutletModel.create(outlet);
        return newOutlet;
    }
    catch(error:unknown){
        const message = (error as Error).message
        throw new Error(message)        
    }
}

