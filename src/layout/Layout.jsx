import { Box, Stack } from "@mui/material"
import { SideBar } from "../components/SideBar";



export const Layout = ({children}) => {
  return (
    <>
     <Stack direction="row" spacing={2} sx={{ height: '100vh' }}>
      <Box flex={1}>
        <SideBar />
      </Box>
      <Box flex={4}>
        {children}
      </Box>
    </Stack>
     
    </>
   
  )
}
