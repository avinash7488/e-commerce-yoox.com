import {Routes,Route} from "react-router-dom";
import Admin from "./Admin";
import Home from "./Home";
import Login from "./Login";
 import Register from "./Register";
import Women from "./Women";
function AllRoute(){
    return(
        <Routes>
         <Route path="/register" element={<Register/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/" element={<Home/>} />
         <Route path="/women" element={<Women/>}/>
         <Route path="/admin" element={<Admin/>}/>
        </Routes>
    )
}
export default AllRoute;