
import { Route, Routes } from 'react-router-dom'

import {Dashboard} from "../pages/Dashboard";
import { Layout } from '../layout/Layout';
import {Department} from "../pages/Department";
import {Products} from "../pages/Products";
import {AddProduct} from "../pages/AddProduct";
import {ProductDetail} from "../pages/ProductDetail";


export const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Layout><Dashboard/></Layout>} />
        <Route path="/department" element={<Layout><Department/></Layout>} />
        <Route path="/products" element={<Layout><Products/></Layout>} />
        <Route path="/addProduct" element={<Layout><AddProduct/></Layout>} />
        <Route path="/productDetails/:productId" element={<Layout><ProductDetail/></Layout>} />
    </Routes>
    </>
  )
}
