import mongoose, { Schema, model } from "mongoose";

export interface IOutlet extends Document {
  outletId: string;
  logoUrl: string;
  ownerName: string;
  mobileNo: string;
  outletName: string;
  outletType: string;
  email: string;
  city: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const outletSchema: Schema<IOutlet> = new Schema(
  {
    outletId: {
      type: String,
      required: [true,"Outlet Id is required"],
      unique: true,
    },
    logoUrl: {
      type: String,
      required: [true, "Logo Url is required"],
    },
    ownerName: {
      type: String,
      required: [true, "Owner Name is required"],
    },
    mobileNo: {
      type: String,
      required: [true, "Mobile Number is required"],
    },
    outletName: {
      type: String,
      required: [true, "Outlet Name is required"],
    },
    outletType: {
      type: String,
      required: [true, "Outlet Type is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    isPhoneVerified: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
    
  },
  { timestamps: true }
);

const OutletModel =
  mongoose.models?.Outlet || model<IOutlet>("Outlet", outletSchema);

export default OutletModel;
