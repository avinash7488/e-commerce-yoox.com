import {Box, Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
 import {UserDataContext} from "../Context/ContextProvider"

function Login(){
     const {userData,isRegistered,setRegistered,user,setUser}= useContext(UserDataContext);
    const [login,setLogin]= useState(false);
   

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setUser({...user,[name]:value})
       }

       const handleLogin=()=>{
        isRegistered?setLogin(true):setLogin(false)
       }
      
    const handleClick=()=>{
        isRegistered?alert("Login success!"): alert("Ingredients mismatched ! If You are not registered, Register first!");
        handleLogin();
       }

       useEffect(()=>{
        userData.map((el)=>el.email===user.email && el.password===user.password?setRegistered(true):setRegistered(false));
       },[user.email,user.password])

       if(login) return <Navigate to="/" />

    return(
        <Box  m='auto' width='50%'>
    <Button w='90%' mb={5} colorScheme='facebook' >Login with Facebook</Button><br />
    <Button w='90%' mb={5}>Login with Google</Button>
    <Box border='2px solid green' mt={2}>
        <Text fontWeight='bold'>Login with Email</Text>
         <FormControl>
            <FormLabel>Enter Your Email Adress</FormLabel>
            <Input id="email" type='email' name='email' value={user.email} onChange={handleChange}/><br />
            <FormLabel>Enter Your Password</FormLabel>
            <Input id="password" type='password' name='password' value={user.password} onChange={handleChange} /><br />
            <Button colorScheme='blue' w='90%' m={5} onClick={handleClick}>Login</Button>
        </FormControl>
    </Box>
    </Box>
    )
}
export default Login;