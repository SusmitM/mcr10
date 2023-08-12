import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../Context/DataContext";




export const SideBar = () => {
    const navigate=useNavigate();
    const {selectedTab,setSelectedTab}=useDataContext();

  return (
    <>
      <Grid
      container
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        background: 'black',
        height: '100%',
        width:"150px"
      }}
      >
        <Typography onClick={()=>{navigate("/");setSelectedTab("Dashboard")}} sx={{color:selectedTab==="Dashboard"?"white":"gray", fontSize:"1.25rem", fontWeight:550,cursor:"pointer"}}>Dashboard</Typography>
        <Typography  onClick={()=>{navigate("/department");setSelectedTab("Departments")}} sx={{color:selectedTab==="Departments"?"white":"gray", fontSize:"1.25rem", fontWeight:550,cursor:"pointer"}}>Departments</Typography>
        <Typography  onClick={()=>{navigate("/products");setSelectedTab("Products")}} sx={{color:selectedTab==="Products"?"white":"gray", fontSize:"1.25rem", fontWeight:550,cursor:"pointer"}}>Products</Typography>

      </Grid>
    </>
  );
};
