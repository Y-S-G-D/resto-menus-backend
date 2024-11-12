import OutletModel,{IOutlet} from "../models/Outlet";
import { hashPassword,comparePassword } from "../services/password_hasing";
import { generateToken } from "../services/token_service";


/**
 * Signs in an outlet using the provided email and password.
 * 
 * @param email - The email of the outlet.
 * @param password - The password of the outlet.
 * @returns A promise that resolves to a JWT token if the credentials are valid.
 * @throws Will throw an error if the credentials are invalid.
 */
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

/**
 * Creates a new outlet with the provided details.
 * 
 * This function hashes the outlet's password before saving the outlet to the database.
 * 
 * @param outlet - The outlet details to be created.
 * @returns A promise that resolves to the newly created outlet.
 * @throws An error if the outlet creation fails.
 */
export async function createOutlet(outlet: IOutlet): Promise<IOutlet>{
    try{
        outlet.password = await hashPassword(outlet.password);
        const newOutlet = await OutletModel.create(outlet);
        return newOutlet;
    }
    catch(error:unknown){
        throw new Error((error as Error).message)        
    }
}

