
export enum StorageLocation {
    Fridge = "fridge", 
    Pantry = "pantry",
    Freezer = "freezer",
}

export interface FoodItem {
    id: string;
    name: string;
    quantity: number;
    storageLocation: StorageLocation;
    purchaseDate: string;
    expirationDate: string;
}