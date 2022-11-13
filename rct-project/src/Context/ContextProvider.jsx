import { useState } from "react";
import { createContext} from "react";

export const UserDataContext= createContext();

function UserDataContextProvider({children}){
    const [userData,setUserData]=useState([]);
    const [isRegistered,setRegistered]=useState(false);
    const[user,setUser]= useState({email:"",password:""});
    const[products,setProducts]=useState([]);
    const[cartCount,setCartCount]=useState(0);
    const [cart,setCart]=useState([]);
    
    
    const getData=(data)=>{
        setProducts(data)
    }
    const addUser=(data)=>{
        setUserData([...userData,data])
    }
    const cartHandler=(newItem)=>{
        setCart([...cart,newItem])
    }

return <UserDataContext.Provider 
value={{userData,addUser,isRegistered,setRegistered,user,setUser,getData,products,cartCount,setCartCount,cartHandler,cart}}>
         {children}
      </UserDataContext.Provider>
}

export default UserDataContextProvider