import { Request, Response, } from 'express';

// Define the error object type
interface AppError extends Error {
  status?: number; // Optional status code property
}

// // Error handler middleware
// function errorHandler(err: AppError, req: Request, res: Response,):void{
//   console.error(err.stack);

//   const statusCode = err.status || 500;
//   res.status(statusCode).json({
//     success: false,
//     message: err.message || 'Internal Server Error',
//   });


const errorHandler = (err: AppError, req: Request, res: Response,) => {
    console.error(err.stack);

    const statusCode = err.status || 500;
    res.status(statusCode).json({
      success: false,
      message: err.message || 'Internal Server Error',
    });
  
};

export default errorHandler;