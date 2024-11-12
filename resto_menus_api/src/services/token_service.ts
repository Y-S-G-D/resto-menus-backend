import jsonwebtoken from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const AUTH_TOKEN = process.env.AUTH_TOKEN

export interface TokenPayload{
    userId:string,
    email:string
}
export const generateToken = (payload:TokenPayload):string=>{
    const token = jsonwebtoken.sign(payload,AUTH_TOKEN as string,{expiresIn:"15d"})
    return token
}
export const verifyToken = (token:string):TokenPayload=>{
    const payload = jsonwebtoken.verify(token,AUTH_TOKEN as string) as TokenPayload
    return payload
}

