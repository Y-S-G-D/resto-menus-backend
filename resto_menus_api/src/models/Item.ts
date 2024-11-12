import mongoose , {Schema , Document} from 'mongoose';
import { v4 as uuidv4 } from 'uuid'; // Import uuid

export interface IItem extends Document{
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
