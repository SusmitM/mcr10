import { Button, Checkbox, Container, FormControlLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useState } from "react"
import { useDataContext } from "../Context/DataContext";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const {productData}=useDataContext();
  //

  const [department,setDepartment]=useState("All Department");
  const handleDeptChange = (event) => {
    setDepartment(event.target.value);
  };

  const [lowStock,setLowStock]=useState(false);
  const handelStockChange=()=>{
    setLowStock(prev=>!prev)
  }

  const [filterType,setFilterType]=useState("name");
  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };
  
  const filteredData=()=>{
    let ProductsToShow=productData?.inventoryData;
    if(department!=="All Department"){
      ProductsToShow=ProductsToShow.filter((data)=>data.department===department)
    }
    if(lowStock){
      ProductsToShow=ProductsToShow.filter((data)=>data.stock<=10)

    }
    if(filterType){
      ProductsToShow = [...ProductsToShow].sort((a, b) => {
        if (filterType === "name") {
          return a.name.localeCompare(b.name);
        } else if (filterType === "price") {
          return a.price - b.price;
        } else if (filterType === "stock") {
          return a.stock - b.stock;
        }
      });

    }

    return ProductsToShow

  }
  
function createData(image,name,description,price,stock,supplier) {
  return { image,name,description,price,stock,supplier };
}
const rows=filteredData().map(data=>createData(data.imageUrl,data.name,data.description,data.price,data.stock,data.supplier))
  
const navigate=useNavigate();
  
  return (
   <>
   <Container>
    <div style={{display:"flex",justifyContent:"space-around"}}>
      <Typography variant="h5">Products</Typography>

      <Select
          value={department}
          label="Department"
          onChange={handleDeptChange}
        >
          <MenuItem value="All Department">All Department</MenuItem>
          <MenuItem value="Kitchen">Kitchen</MenuItem>
          <MenuItem value="Clothing">Clothing</MenuItem>
          <MenuItem value="Toys">Toys</MenuItem>
        </Select>
        <FormControlLabel
            control={
              <Checkbox checked={lowStock} onChange={handelStockChange} name="Low Stock Items" />
            }
            label="Low Stock Items"
          />
          <Select
          
          value={filterType}
          label="Filters"
          onChange={handleFilterChange}
        >
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="price">Price</MenuItem>
          <MenuItem value="stock">Stock</MenuItem>
        </Select>

        <Button sx={{padding:"0rem 1.75rem"}} onClick={()=>navigate("/addProduct")}  variant="contained">New</Button>

    </div>
    <div style={{marginTop:"15px"}}>
    <TableContainer component={Paper}>
      <Table aria-label="product table">
        <TableHead sx={{backgroundColor:"grey"}}>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Stock</TableCell>
            <TableCell align="center">Supplier</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img style={{aspectRatio:"1/1",width:"80px"}} src={row.image} alt={row.name}/>
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.stock}</TableCell>
              <TableCell align="center">{row.supplier}</TableCell>
            </TableRow>
          ))}

        </TableBody>
        </Table>
        </TableContainer>

    </div>
   </Container>
   </>
  )
}
