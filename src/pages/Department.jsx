import { Box, Card, CardContent, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useDataContext } from "../Context/DataContext";


export const Department = () => {
  const {setDepartment,setSelectedTab}=useDataContext();
  const navigate=useNavigate();
  return (
   <>
   <Box sx={{display:"flex",justifyContent:"space-around",mt:5}}>
    <Card 
    onClick={()=>{
      navigate("/products");
      setSelectedTab("Products");
      setDepartment("Kitchen")
    }}
    sx={{cursor:"pointer",backgroundColor:"#d6dbdb",borderRadius:"15px",padding:"2rem",width:"200px",
    height: "90px"}}>
      <CardContent sx={{textAlign:"center"}}>
        
        <Typography sx={{fontSize:"1.4rem",fontWeight:"650"}}>Kitchen</Typography>

      </CardContent>
    </Card>
    <Card 
    onClick={()=>{
      navigate("/products");
      setSelectedTab("Products");
      setDepartment("Clothing")
    }}
    sx={{cursor:"pointer",backgroundColor:"#d6dbdb",borderRadius:"15px",padding:"2rem",width:"200px",
    height: "90px"}}>
      <CardContent sx={{textAlign:"center"}}>
        
        <Typography sx={{fontSize:"1.4rem",fontWeight:"650"}}>Clothing</Typography>

      </CardContent>
    </Card>
    <Card
    onClick={()=>{
      navigate("/products");
      setSelectedTab("Products");
      setDepartment("Toys")
    }}
    sx={{cursor:"pointer",backgroundColor:"#d6dbdb",borderRadius:"15px",padding:"2rem",width:"200px",
    height: "90px"}}>
      <CardContent sx={{textAlign:"center"}}>
        
        <Typography sx={{fontSize:"1.4rem",fontWeight:"650"}}>Toys</Typography>

      </CardContent>
    </Card>
    </Box>

   </>
  )
}
