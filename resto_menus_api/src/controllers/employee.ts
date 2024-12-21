import { Request, Response, NextFunction } from 'express';
import { prisma } from '../lib/prisma';


export const createEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const employee = await prisma.employee.create({
            data: {
                ...req.body,
                outlet: {
                    connect: {
                        id: req.user?.id
                    }
                }
            },

        })
        if (!employee) {
            res.status(400).json({
                success: false,
                message: "Employee not created"
            });
            return;
        }
        res.status(201).json({ message: 'Employee created successfully' });
    } catch (error) {
        next(error);
    }
}

export const getEmployees = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { skip = 0, limit = 10 } = req.query;
        const employees = await prisma.employee.findMany({
            where: {
            outletId: req.user?.id,
            },
            select: {
            id: true,
            name: true,
            phoneNo: true,
            employeeId: true,
            aadharNo: true,
            accountHolderName: true,
            accountNo: true,
            ifscCode: true,
            position: true,
            dob: true,
            doj: true,
            salary: true,
            shift: true
            },
            skip: Number(skip),
            take: Number(limit)
        });
        res.status(200).json({
            success: true,
            data: employees
        });
    } catch (error) {
        next(error)
    }
}

export const getEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const employeeId = req.params.id;
        if (!employeeId) {
            res.status(400).json({
                success: false,
                message: "Please provide employee id"
            });
            return;
        }
        const employee = await prisma.employee.findUnique({
            where: {
                id: employeeId
            }
        });
        res.status(200).json({
            success: true,
            data: employee
        });
    } catch (error) {
        next(error)
    }
}

export const updateEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const employeeId = req.params.id;
        if (!employeeId) {
            res.status(400).json({
                success: false,
                message: "Please provide employee id"
            });
            return;
        }
        const updatedEmployee = await prisma.employee.update({
            where: {
                id: employeeId
            },
            data: {
                ...req.body,
                outlet: {
                    connect: {
                        id: req.user?.id
                    }
                }
            }
        });
        if(!updateEmployee){
            res.status(400).json({
                success: false,
                message: "Employee not updated"
            });
            return
        }
        res.status(200).json({
            success: true,
            message: "Employee updated successfully",
            data: updatedEmployee
        });
    } catch (error) {
        next(error)
    }
}

export const deleteEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const employeeId = req.params.id;
        if (!employeeId) {
            res.status(400).json({
                success: false,
                message: "Please provide employee id"
            });
            return;
        }
        const deletedEmployee = await prisma.employee.delete({
            where: {
                id: employeeId
            }
        });

        if(!deletedEmployee){
            res.status(400).json({
                success: false,
                message: "Employee not deleted"
            });
            return;
        }

        res.status(200).json({
            success: true,
            message: "Employee deleted successfully",
            data: deletedEmployee
        });
    } catch (error) {
        next(error)
    }
}