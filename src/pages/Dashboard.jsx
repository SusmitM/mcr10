import { Box, Card, CardContent, Typography } from "@mui/material"
import { useDataContext } from "../Context/DataContext"

export const Dashboard = () => {
  const {totalStock,totalDelivered,lowStock}=useDataContext()
  return (
    <>
    <Box sx={{display:"flex",justifyContent:"space-around"}}>
    <Card sx={{backgroundColor:"#d6dbdb",height:"50px",padding:"2.5rem",borderRadius:"15px",justifyContent:"center"}}>
      <CardContent sx={{display: "flex",
    flexDirection: "column",
    alignItems: "center"}}>
        <Typography sx={{color:"green",fontSize:"1.5rem",fontWeight:"550"}}>{totalStock}</Typography>
        <Typography sx={{fontSize:"1.4rem",fontWeight:"500"}}>Total Stock</Typography>

      </CardContent>
    </Card>

    <Card sx={{backgroundColor:"#d6dbdb",height:"50px",padding:"2.5rem",borderRadius:"15px",justifyContent:"center"}}>
      <CardContent sx={{display: "flex",
    flexDirection: "column",
    alignItems: "center"}}>
        <Typography sx={{color:"yellow",fontSize:"1.5rem",fontWeight:"550"}}>{totalDelivered}</Typography>
        <Typography sx={{fontSize:"1.4rem",fontWeight:"500"}}>Total Delivered</Typography>

      </CardContent>
    </Card>

    <Card sx={{backgroundColor:"#d6dbdb",height:"50px",padding:"2.5rem",borderRadius:"15px",justifyContent:"center"}}>
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
