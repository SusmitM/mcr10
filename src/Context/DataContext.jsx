import { dataReducer, initialDataState } from "../reducers/DataReducer";
import {inventoryData} from "../data/inventoryData";
const { createContext, useContext, useReducer, useEffect, useState } = require("react");

const DataContext=createContext();

export const DataContextProvider=({children})=>{
   
    
    let localStorageData=JSON.parse(localStorage.getItem("data"));

    const initialDataState={inventoryData:localStorageData?.productData.length>0?localStorageData.productData:[...inventoryData]};

    const[productData,productDispatch]=useReducer(dataReducer,initialDataState);

    

  
    const totalStock=productData.inventoryData.reduce((total,crr)=>total+Number(crr.stock),0);
    const totalDelivered=productData.inventoryData.reduce((total,crr)=>total+Number(crr.delivered),0)
    const lowStock=productData.inventoryData.reduce((total,crr)=>Number(crr.stock)<=10?total+1:total,0)

    const [department,setDepartment]=useState("All Department");
  const handleDeptChange = (event) => {
    setDepartment(event.target.value);
  };
    
  const [selectedTab,setSelectedTab]=useState("Dashboard")
    const addDataToMemory=()=>{
        
        localStorage.setItem("data",JSON.stringify({productData:productData.inventoryData}))
    }
    useEffect(() => {
        addDataToMemory();
    }, [productData]);
    return(
        <DataContext.Provider value={{totalStock,totalDelivered,lowStock,productData,productDispatch,department,setDepartment,handleDeptChange,selectedTab,setSelectedTab}}>
            {children}
        </DataContext.Provider>
    )
}




export const useDataContext=()=>useContext(DataContext);