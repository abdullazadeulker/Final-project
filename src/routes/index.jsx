import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Product from '../pages/Product';
import Cart from '../pages/Cart';
import ProductList from '../pages/ProductList';


const WebsiteRouting = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/product' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product_list' element={<ProductList />} />
        </Routes>
    )
}
export default WebsiteRouting;