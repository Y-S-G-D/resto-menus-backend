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

export async function getMenus(options:IGetMenusOptions){
    try{
        const menus = await ItemModel.find({}).skip((options.page - 1) * options.limit).limit(options.limit).sort({createdAt: -1});
        return menus;
    }
    catch(error){
        console.log(error,"in get menus controller");
        throw error;
    }
}

export async function getItemsCount(){
    const itemsCounts = await ItemModel.countDocuments()
    if(!itemsCounts){
        throw new Error("Not Found")
    }
    return itemsCounts

}

export async function getBrowseMenus(){
    const browseMenus = await ItemModel.find({}).limit(50)
    if(browseMenus.length==0){
        throw new Error("Not Available")
    }
    return browseMenus
}