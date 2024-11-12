import OrderModel, { IOrder } from "../models/Order";

export async function saveOrders(order: IOrder) {
  try {
    const newOrder = await OrderModel.create(order);
    return newOrder;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
