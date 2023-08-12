import { dataReducer, initialDataState } from "../reducers/DataReducer";

const { createContext, useContext, useReducer, useEffect } = require("react");

const DataContext=createContext();

export const DataContextProvider=({children})=>{
    
    let localStorageData=JSON.parse(localStorage.getItem("data"));
    const[productData,productDispatch]=useReducer(dataReducer,initialDataState);
    console.log(localStorageData?localStorageData?.productData:initialDataState)

  
    const totalStock=productData.inventoryData.reduce((total,crr)=>total+crr.stock,0);
    const totalDelivered=productData.inventoryData.reduce((total,crr)=>total+crr.delivered,0)
    const lowStock=productData.inventoryData.reduce((total,crr)=>crr.stock<=10?total+1:total,0)
    // console.log(productData.inventoryData)


    const addDataToMemory=()=>{
        
        localStorage.setItem("data",JSON.stringify({productData:productData.inventoryData}))
    }
    useEffect(() => {
        addDataToMemory();
    }, [productData]);
    return(
        <DataContext.Provider value={{totalStock,totalDelivered,lowStock,productData,productDispatch}}>
            {children}
        </DataContext.Provider>
    )
}




export const useDataContext=()=>useContext(DataContext);