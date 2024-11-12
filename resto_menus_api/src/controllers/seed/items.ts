import ItemModel from "../../models/Item";

interface SeedItem {
  name: string;
  description: string;
  halfPrice: number;
  fullPrice: number;
  image: string;
  category: string;
  section: string;
  itemType: string;
}

function generateRandomItem(): SeedItem {
  const categories = ["Fast Food", "Italian", "Asian", "Mexican", "Dessert",];
  const sections = ["Appetizers", "Main", "Sides", "Drinks", "Desserts", "Specials",];
  const itemTypes = ["Veg", "Non-Veg", "NA"];

  return {
    name: `Test Item ${Math.floor(Math.random() * 1000)}`,
    description: `A delicious test item for your enjoyment `,
    halfPrice: Number((Math.random() * 10 + 2).toFixed(2)),
    fullPrice: Number((Math.random() * 20 + 5).toFixed(2)),
    image: "",
    category: categories[Math.floor(Math.random() * categories.length)],
    section: sections[Math.floor(Math.random() * sections.length)],
    itemType: itemTypes[Math.floor(Math.random() * itemTypes.length)],

  };
}

export async function seedMenus() {
  try {
    const item = generateRandomItem();
    await ItemModel.create(item);
  } catch (error) {
    console.error("Error seeding menu:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
}
