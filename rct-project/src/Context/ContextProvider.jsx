import { useState } from "react";
import { createContext} from "react";

export const UserDataContext= createContext();

function UserDataContextProvider({children}){
    const [userData,setUserData]=useState([]);
    const [isRegistered,setRegistered]=useState(false);
    const[user,setUser]= useState({email:"",password:""});

    const addUser=(data)=>{
        setUserData([...userData,data])
    }
return <UserDataContext.Provider value={{userData,addUser,isRegistered,setRegistered,user,setUser}}>
         {children}
      </UserDataContext.Provider>
}

export default UserDataContextProvider