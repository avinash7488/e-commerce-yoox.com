import {Routes,Route} from "react-router-dom";
import Admin from "../Components/Admin";
import AllProducts from "./AllProducts";
import Cart from "./Cart";
import Login from "./Login";
import Men from "./Men";
 import Register from "./Register";
import SingleProducts from "./SingleProducts";
import Women from "./Women";
function AllRoute(){
    return(
        <Routes>
         <Route path="/register" element={<Register/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/" element={<Women/>} />
         <Route path="/women" element={<Women/>}/>
         <Route path="/admin" element={<Admin/>}/>
         <Route path="/products" element={<AllProducts/>}/>
         <Route path="/men" element={<Men/>}/>
         <Route path="/products/:id" element={<SingleProducts/>}/>
         <Route path="/cart" element={<Cart/>} />
        </Routes>
    )
} 
export default AllRoute;