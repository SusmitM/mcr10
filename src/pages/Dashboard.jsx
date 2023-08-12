import { Box, Card, CardContent, Typography } from "@mui/material"
import { useDataContext } from "../Context/DataContext"

export const Dashboard = () => {
  const {totalStock,totalDelivered,lowStock}=useDataContext()
  return (
    <>
    <Box sx={{display:"flex",justifyContent:"space-around",mt:5}}>
    <Card sx={{backgroundColor:"#d6dbdb",padding:"2rem",borderRadius:"15px",width:"200px",
    height: "90px"}}>
      <CardContent sx={{display: "flex",
    flexDirection: "column",
    alignItems: "center"}}>
        <Typography sx={{color:"#12f312",fontSize:"1.5rem",fontWeight:"550"}}>{totalStock}</Typography>
        <Typography sx={{fontSize:"1.4rem",fontWeight:"500"}}>Total Stock</Typography>

      </CardContent>
    </Card>

    <Card sx={{backgroundColor:"#d6dbdb",padding:"2rem",borderRadius:"15px",width:"200px",
    height: "90px"}}>
      <CardContent sx={{display: "flex",
    flexDirection: "column",
    alignItems: "center"}}>
        <Typography sx={{color:"#ffff45",fontSize:"1.5rem",fontWeight:"550"}}>{totalDelivered}</Typography>
        <Typography sx={{fontSize:"1.4rem",fontWeight:"500"}}>Total Delivered</Typography>

      </CardContent>
    </Card>

    <Card sx={{backgroundColor:"#d6dbdb",padding:"2rem",borderRadius:"15px",width:"200px",
    height: "90px"}}>
      <CardContent sx={{display: "flex",
    flexDirection: "column",
    alignItems: "center"}}>
        <Typography sx={{color:"red",fontSize:"1.5rem",fontWeight:"550"}}>{lowStock}</Typography>
        <Typography sx={{fontSize:"1.4rem",fontWeight:"500"}}>Low Stock Items</Typography>

      </CardContent>
    </Card>

    </Box>
    </>
  )
}
