import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";




export const SideBar = () => {
    const navigate=useNavigate();

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
        padding: '5rem',
        width:"300px"
      }}
      >
        <Typography onClick={()=>navigate("/")} sx={{color:"gray", fontSize:"1.25rem", fontWeight:550,cursor:"pointer"}}>Dashboard</Typography>
        <Typography  onClick={()=>navigate("/department")} sx={{color:"gray", fontSize:"1.25rem", fontWeight:550,cursor:"pointer"}}>Departments</Typography>
        <Typography  onClick={()=>navigate("/products")} sx={{color:"gray", fontSize:"1.25rem", fontWeight:550,cursor:"pointer"}}>Products</Typography>

      </Grid>
    </>
  );
};
