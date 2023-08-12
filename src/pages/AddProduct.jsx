import { Button, TextField, Typography, Box, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { useDataContext } from "../Context/DataContext";

export const AddProduct = () => {
  const {productDispatch}=useDataContext();
  const [newProduct, setNewProduct] = useState({
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    
    productDispatch({
      type:"Add-Item",
      data:newProduct
    })
    setNewProduct({
      department: "",
      name: "",
      description: "",
      price: 0,
      stock: 0,
      sku: "",
      supplier: "",
      delivered: 0,
      imageUrl: "",
    })


  };
  return (
    <>
      <Typography variant="h5">Add New Product</Typography>

      <Box
        component="form"
        onSubmit={(event)=>handleSubmit(event)}
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          padding: "2rem",
        }}
      >
         <Select
          value={newProduct.department}
          label="Department"
          onChange={(e)=> setNewProduct(prev=>{return {...prev,department:e.target.value}})}
          sx={{ mb: 3}}
        >
          <MenuItem value="Kitchen">Kitchen</MenuItem>
          <MenuItem value="Clothing">Clothing</MenuItem>
          <MenuItem value="Toys">Toys</MenuItem>
        </Select>
        <TextField
        
          label="Name"
          onChange={(e) =>
            setNewProduct((prev) => {
              return { ...prev, name: e.target.value };
            })
          }
          size="small"
          halfWidth
          required
          variant="outlined"
          color="secondary"
          type="text"
          sx={{ mb: 3}}
         
          value={newProduct.name}
        />
        <TextField
          label="Description"
          onChange={(e) =>
            setNewProduct((prev) => {
              return { ...prev, description: e.target.value };
            })
          }
          required
          size="small"
          variant="outlined"
          color="secondary"
          type="text"
          sx={{ mb: 3 }}
          halfWidth
          value={newProduct.description}
        />
        <TextField
          label="Price"
          onChange={(e) =>
            setNewProduct((prev) => {
              return { ...prev, price: e.target.value };
            })
          }
          required
          size="small"
          variant="outlined"
          color="secondary"
          type="number"
          sx={{ mb: 3 }}
          halfWidth
          value={newProduct.price}
        />
        <TextField
          label="Stock"
          onChange={(e) =>
            setNewProduct((prev) => {
              return { ...prev, stock: e.target.value };
            })
          }
          required
          size="small"
          variant="outlined"
          color="secondary"
          type="number"
          sx={{ mb: 3 }}
          halfWidth
          value={newProduct.stock}
        />
        <TextField
          label="SKU"
          onChange={(e) =>
            setNewProduct((prev) => {
              return { ...prev, sku: e.target.value };
            })
          }
          required
          size="small"
          variant="outlined"
          color="secondary"
          type="text"
          sx={{ mb: 3 }}
          halfWidth
          value={newProduct.sku}
        />
         <TextField
          label="Supplier"
          onChange={(e) =>
            setNewProduct((prev) => {
              return { ...prev, supplier: e.target.value };
            })
          }
          required
          size="small"
          variant="outlined"
          color="secondary"
          type="text"
          sx={{ mb: 3 }}
          halfWidth
          value={newProduct.supplier}
        />
        <TextField
          label="Delivered"
          onChange={(e) =>
            setNewProduct((prev) => {
              return { ...prev, delivered: e.target.value };
            })
          }
          required
          size="small"
          variant="outlined"
          color="secondary"
          type="number"
          sx={{ mb: 3 }}
          halfWidth
          disabled
          value={newProduct.delivered}
        />
        <TextField
          label="Image Url"
          onChange={(e) =>
            setNewProduct((prev) => {
              return { ...prev, imageUrl: e.target.value };
            })
          }
          required
          size="small"
          variant="outlined"
          color="secondary"
          type="text"
          sx={{ mb: 3 }}
          halfWidth
          value={newProduct.imageUrl}
        />

        <Button variant="contained" type="submit">
          Add Product
        </Button>
      </Box>
    </>
  );
};
