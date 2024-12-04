import mongoose , {Schema , Document} from 'mongoose';
import { v4 as uuidv4 } from 'uuid'; // Import uuid

/**
 * Interface representing an item in the menu.
 * 
 * @interface IItem
 * @extends {Document}
 * 
 * @property {Schema.Types.ObjectId} outletId - The ID of the outlet to which the item belongs.
 * @property {string} itemId - The unique identifier for the item.
 * @property {string} name - The name of the item.
 * @property {string} description - A description of the item.
 * @property {number} halfPrice - The price for a half portion of the item.
 * @property {number} fullPrice - The price for a full portion of the item.
 * @property {(string | null)} image - The URL of the item's image, or null if no image is available.
 * @property {string} category - The category to which the item belongs.
 * @property {string} itemType - The type of the item (e.g., veg or non-veg).
 * @property {string} section - The section of the menu where the item is listed.
 * @property {Date} createdAt - The date when the item was created.
 * @property {Date} updatedAt - The date when the item was last updated.
 */
export interface IItem extends Document{
    outletId: Schema.Types.ObjectId;
    itemId: string; // Change type from uuidv4 to string
    name: string;
    description: string;
    halfPrice: number;
    fullPrice: number;
    image: string | null;
    category: string;
    itemType: string; // Add itemType field veg/non-veg
    section: string;
    createdAt: Date;
    updatedAt: Date;

}

const ItemSchema: Schema<IItem> = new Schema({
    outletId: {
        type: Schema.Types.ObjectId,
        ref: 'Outlet',
        required: true,
    },
    itemId:{
        type: String,
        default: uuidv4(), // Call uuidv4() to generate a new UUID
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    halfPrice: {
        type: Number,
    },
    fullPrice: {
        type: Number,
    },
    image: {
        type: String,
        default: '',
    },
    itemType: {
        type: String,
        default:"NA",
    },
    category: {
        type: String,
        required: true,
    },
    section: {
        type: String,
        required: true,
    },
},{timestamps: true})

const ItemModel = mongoose.models.Item || mongoose.model<IItem>('Item', ItemSchema);

export default ItemModel;
