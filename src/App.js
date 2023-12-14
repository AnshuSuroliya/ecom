//import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/navigation';
import Homepage from './customer/pages/homepage/Homepage';
import Registration from './customer/Authorization/Registration';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './customer/Authorization/login';
import User from './customer/profile/User';
import Product from './customer/components/product/Product';
import Cart from './customer/components/cart/Cart';
import AddProduct from './customer/components/product/AddProduct';
import ProductDetail from './customer/components/product/ProductDetail';
import Order from './customer/components/order/Order';
import Payment from './customer/components/payment/Payment';
import SearchProduct from './customer/components/product/SearchProduct';
import DeleteProduct from './customer/components/product/DeleteProduct';
import AllUser from './customer/profile/AllUser';
import ShowOrders from './customer/components/order/ShowOrders';
import ShowAllOrders from './customer/components/order/ShowAllOrders';
function App() {
  return (

    
    <Router>
      <Routes>
        {/* <Route exact path="/**" element={<Homepage/>}/> */}
        
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/navigation" element={<Navigation/>}/>
        <Route exact path='/signin' element={<Login/>}/>
        <Route exact path='/register' element={<Registration/>}/>
        <Route exact path="/profile" element={<User/>}/>
        <Route exact path="/addProduct" element={<AddProduct/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/productDetail" element={<ProductDetail/>}/>
        <Route exact path="/cart/checkout" element={<Order/>}/>
        <Route exact path="/cart/checkout/payment" element={<Payment/>}/>
        <Route exact path="/searchProduct" element={<SearchProduct/>}/>
        <Route exact path="/deleteProduct" element={<DeleteProduct/>}/>
        <Route exact path="/showAll" element={<AllUser/>}/>
        <Route exact path="/showOrders" element={<ShowOrders/>}/>
        <Route exact path="/showAllOrders" element={<ShowAllOrders/>}/>
      </Routes>
    </Router>
  );
}

export default App;
