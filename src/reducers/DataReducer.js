import {inventoryData } from "../data/inventoryData";
import { v4 as uuidv4 } from 'uuid';
export const initialDataState={inventoryData:[...inventoryData]};

export const dataReducer=(dataState,action)=>{
    
    switch(action.type){

        case "Add-Item":{
            alert("Product Has been added")
            return{
                inventoryData:[...dataState.inventoryData,{
                    id: uuidv4(),
                    department: action.data.department,
                    name: action.data.name,
                    description:
                    action.data.description,
                    price: action.data.price,
                    stock: action.data.stock,
                    sku: action.data.sku,
                    supplier: action.data.supplier,
                    delivered: action.data.delivered,
                    imageUrl: action.data.imageUrl,
                  },]
            }
            
        }
         default: return dataState
    }
}