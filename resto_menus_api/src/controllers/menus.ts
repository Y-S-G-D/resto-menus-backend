import ItemModel, { IItem } from "../models/Item";



export async function saveMenus(menus:IItem){
    try{
        const newMenus = await ItemModel.create(menus);
        return newMenus;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

export interface IGetMenusOptions{
    page: number;
    limit: number;
}

/**
 * Retrieves a paginated list of menus from the database.
 *
 * @param {IGetMenusOptions} options - The options for retrieving menus.
 * @param {number} options.page - The page number to retrieve.
 * @param {number} options.limit - The number of items per page.
 * @returns {Promise<IItem[]>} A promise that resolves to an array of menu items.
 * @throws Will throw an error if there is an issue retrieving the menus.
 */
export async function getMenus(options:IGetMenusOptions):Promise<IItem[]>{
    try{
        const menus = await ItemModel.find({}).skip((options.page - 1) * options.limit).limit(options.limit).sort({createdAt: -1});
        return menus;
    }
    catch(error){
        console.log(error,"in get menus controller");
        throw error;
    }
}

/**
 * Retrieves the count of items from the database.
 * 
 * @returns {Promise<number>} The count of items.
 * @throws {Error} If no items are found.
 */
export async function getItemsCount():Promise<number>{
    const itemsCounts = await ItemModel.countDocuments()
    if(!itemsCounts){
        throw new Error("Not Found")
    }
    return itemsCounts

}

export async function getBrowseMenus():Promise<IItem[]>{
    const browseMenus = await ItemModel.find({}).limit(50)
    if(browseMenus.length==0){
        throw new Error("Not Available")
    }
    return browseMenus
}