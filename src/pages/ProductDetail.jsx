import { useParams } from "react-router-dom"
import { useDataContext } from "../Context/DataContext"
import { Container, Typography } from "@mui/material";


export const ProductDetail = () => {
  const {productData}=useDataContext();
  const selectedId=useParams("productId");
  const selectedProduct=productData?.inventoryData.find(({id})=>id.toString()===selectedId.productId)
  return (
    <>
    <Container sx={{margin:"auto"}}>
      <Typography variant="h5" fontWeight={600}> {selectedProduct.name}</Typography>
      <img  style={{width:"350px",aspectRatio:"1/1"}} src={selectedProduct.imageUrl} alt={selectedProduct.name}/>
      <Typography>Price: ${selectedProduct.price}</Typography>
      <Typography>Stock: {selectedProduct.stock}</Typography>
      <Typography>Supplier: ${selectedProduct.supplier}</Typography>
      <Typography>SKU: ${selectedProduct.sku}</Typography>
      <Typography>Delivered: ${selectedProduct.delivered}</Typography>
      <Typography>Description: ${selectedProduct.description}</Typography>
    </Container>
    </>
  )
}
