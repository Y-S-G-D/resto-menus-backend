import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { Prisma } from '@prisma/client';

interface CustomError extends Error {
  status?: number;
}

const errorHandler: ErrorRequestHandler = (
  err: CustomError | Prisma.PrismaClientKnownRequestError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let status = 500;
  let message = "Internal Server Error";

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2002":
        status = 400;
        message = `${(err.meta as { target: string[] })?.target} Already exist`;
        break;
      case "P2025":
        status = 404;
        message = "Record not found.";
        break;
      default:
        status = 500;
        message = "Database error occurred.";
    }
  } else if (err instanceof Prisma.PrismaClientValidationError) {
    status = 400;
    message = "Validation error occurred with the database query.";
  } else if (err instanceof Prisma.PrismaClientInitializationError) {
    status = 500;
    message = "Database initialization error occurred.";
  } else if (err instanceof Prisma.PrismaClientRustPanicError) {
    status = 500;
    message = "Unexpected database error occurred.";
  }

  res.status(status).json({
    success: false,
    message,
  });
  return next();
};

export default errorHandler;