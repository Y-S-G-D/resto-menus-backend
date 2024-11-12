import jsonwebtoken from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const AUTH_TOKEN = process.env.AUTH_TOKEN

export interface TokenPayload{
    userId:string,
    email:string
}
/**
 * Generates a JSON Web Token (JWT) for the given payload.
 *
 * @param {TokenPayload} payload - The payload to be encoded in the token.
 * @returns {string} - The generated JWT as a string.
 */
export const generateToken = (payload:TokenPayload):string=>{
    const token = jsonwebtoken.sign(payload,AUTH_TOKEN as string,{expiresIn:"15d"})
    return token
}
/**
 * Verifies the provided JWT token and returns the decoded payload.
 *
 * @param token - The JWT token to verify.
 * @returns The decoded token payload.
 */
export const verifyToken = (token:string):TokenPayload=>{
    const payload = jsonwebtoken.verify(token,AUTH_TOKEN as string) as TokenPayload
    return payload
}

