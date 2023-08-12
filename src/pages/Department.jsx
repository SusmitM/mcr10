import { Box, Card, CardContent, Typography } from "@mui/material"


export const Department = () => {
  return (
   <>
   <Box sx={{display:"flex",justifyContent:"space-around"}}>
    <Card sx={{backgroundColor:"#d6dbdb",borderRadius:"15px",justifyContent:"center",padding:"2rem",boxShadow:1}}>
      <CardContent>
        
        <Typography sx={{fontSize:"1.4rem",fontWeight:"650"}}>Kitchen</Typography>

      </CardContent>
    </Card>
    <Card sx={{backgroundColor:"#d6dbdb",borderRadius:"15px",justifyContent:"center",padding:"2rem",boxShadow:1}}>
      <CardContent>
        
        <Typography sx={{fontSize:"1.4rem",fontWeight:"650"}}>Clothing</Typography>

      </CardContent>
    </Card>
    <Card sx={{backgroundColor:"#d6dbdb",borderRadius:"15px",justifyContent:"center",padding:"2rem",boxShadow:1}}>
      <CardContent>
        
        <Typography sx={{fontSize:"1.4rem",fontWeight:"650"}}>Toys</Typography>

      </CardContent>
    </Card>
    </Box>

   </>
  )
}
