interface ErroResponse{
    message:string,
    statusCode:number
}

export function outletErrorHandler(err:Error):ErroResponse{
    console.log(err)
    if(err.message.includes("E11000")){
        return {message:"Email or Outlet Id already exists",statusCode:400}
    }
    if (err.message.includes("validation failed")) {
        const fieldMatch = err.message.match(/failed: (\w+)/);
        const field = fieldMatch ? fieldMatch[1] : "unknown field";
        return { message: `Validation failed: ${field}`, statusCode: 400 }
    }
    if(err.message.includes("Invalid Credentials")){
        return {message:err.message,statusCode:401}
    }
    return { message: err.message, statusCode: 500 }
}