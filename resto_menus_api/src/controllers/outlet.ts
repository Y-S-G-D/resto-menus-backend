import OutletModel,{IOutlet} from "../models/Outlet";
import { hashPassword,comparePassword } from "../services/password_hasing";
import { generateToken } from "../services/token_service";


export async function signInOutlet(email:string,password:string):Promise<string>{
    const outlet = await OutletModel.findOne({email:email}).select("+password");
    if(!outlet){
        throw new Error("Invalid Credentials")
    }
    const isMatch = await comparePassword(password,outlet.password);
    if(!isMatch){
        throw new Error("Invalid Credentials")
    }
    const token = generateToken({userId:outlet._id,email:outlet.email});
    return token;
}

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

