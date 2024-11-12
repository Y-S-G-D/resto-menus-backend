import mongoose , { Schema,Document } from "mongoose";
import {v4 as uuidv4} from 'uuid';

export interface IDish {
    dishId:string,
    dishName:string,
    quantity:number,
    rate:number,
    totalPrice:number
}

export interface IOrder  extends Document {
    orderId:string
    name:string,
    phoneNumber:string,
    tableNumber: string,
    dishes:IDish[],
    discount:number,
    gst:string,
    netTotal:number,
    createdAt:Date,
    updatedAt:Date,
}

const  OrderSchema :  Schema<IOrder> = new Schema({
    orderId:{
        type:String,
        default:uuidv4(),
        unique:true,
    },
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    tableNumber: {
        type: String,
        required: true,
    },
    dishes: [{
        dishId: {
            type: String,
            required: true,
            default:uuidv4(),
        },
        dishName: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        rate: {
            type: Number,
            required: true,
        },
        totalPrice: {
            type: Number,
            required: true,
        },
    }],
    discount: {
        type: Number,
        required: true,
    },
    gst: {
        type: String,
        required: true,
    },
    netTotal: {
        type: Number,
        required: true,
    },
},{timestamps:true})

const OrderModel = mongoose.models.Order || mongoose.model<IOrder>('Order',OrderSchema);

export default OrderModel;