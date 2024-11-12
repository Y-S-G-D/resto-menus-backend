import mongoose, { Schema } from "mongoose";

/**
 * Interface representing an Employee.
 * 
 * @interface IEmployee
 * 
 * @property {string} name - The name of the employee.
 * @property {string} employeeId - The unique identifier for the employee.
 * @property {Date} dob - The date of birth of the employee.
 * @property {string} gender - The gender of the employee.
 * @property {string} phoneNo - The phone number of the employee.
 * @property {Date} doj - The date of joining of the employee .
 * @property {string} shift - The shift timing of the employee(morning, evening, night,).
 * @property {string} position - The position or job title of the employee.
 * @property {string} supervisor - The name of the employee's supervisor.
 * @property {number} salary - The salary of the employee.
 * @property {string} accountNo - The bank account number of the employee.
 * @property {string} ifscCode - The IFSC code of the employee's bank.
 * @property {string} accountHolderName - The name of the account holder.
 * @property {string} aadharNo - The Aadhar number of the employee.
 * @property {string} loginId - The login ID for the employee.
 * @property {string} password - The password for the employee's login.
 * @property {Date} createdAt - The date when the employee record was created.
 * @property {Date} updatedAt - The date when the employee record was last updated.
 */
export interface IEmployee {
  name: string;
  employeeId: string;
  dob: Date;
  gender: string;
  phoneNo: string;
  doj: Date;
  shift: string;
  position: string;
  supervisor: string;
  salary: number;
  accountNo: string;
  ifscCode: string;
  accountHolderName: string;
  aadharNo: string;
  loginId: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const employeeSchema: Schema<IEmployee> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    employeeId: {
      type: String,
      required: [true, "Employee Id is required"],
      unique: true,
    },
    dob: {
      type: Date,
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
    },
    phoneNo: {
      type: String,
      required: [true, "Phone Number is required"],
    },
    doj: {
      type: Date,
      default: Date.now,
    },
    shift: {
      type: String,
      required: [true, "Shift is required"],
    },
    position: {
      type: String,
      required: [true, "Position is required"],
    },
    supervisor: {
      type: String,
      default: "NA",
    },
    salary: {
      type: Number,
      required: [true, "Salary is required"],
    },
    accountNo: {
      type: String,
      default: "NA",
    },
    ifscCode: {
      type: String,
      default: "NA",
    },
    accountHolderName: {
      type: String,
      default: "NA",
    },
    aadharNo: {
      type: String,
      default: "NA",
    },
    loginId: {
      type: String,
      required: [true, "Login Id is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
  }
);

const EmployeeModel =
  mongoose.models?.Employee ||
  mongoose.model<IEmployee>("Employee", employeeSchema);

export default EmployeeModel;
