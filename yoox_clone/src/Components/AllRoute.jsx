import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
function AllRoute(){
    return(
        <Routes>
         <Route path="/register" element={<Register/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/" element={<Home/>} />
         <Route></Route>
        </Routes>
    )
}
export default AllRoute;