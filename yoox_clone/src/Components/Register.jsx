import {Box, Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react"
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import {UserDataContext} from "../Context/ContextProvider"

const initialUser={
    firstName:"",
    lastName:"",
    email:"",
    password:""
}
function Register(){
    const {userData,addUser}= useContext(UserDataContext);
    const[newUser,setNewUser]= useState(initialUser);
    const[isExist,setIsExist]= useState(false);
    

   const handleChange=(e)=>{
    const{name,value}=e.target;
    setNewUser({...newUser,[name]:value})
   }

   const handleClick=(newUser,addUser)=>{
    isExist?alert("You are already exist ! You can Login."): alert("You are Registered Successfully ! Now You can Login.")
    !isExist?addUser(newUser) : setNewUser(initialUser) ;
    setNewUser(initialUser)
    
   }

   useEffect(()=>{
    userData.map((user)=>user.email===newUser.email?setIsExist(true):setIsExist(false))
   },[userData,newUser])
   

return(
    <Box  m='auto' width='50%'>
    <Button w='90%' mb={5} colorScheme='facebook' >Register with Facebook</Button><br />
    <Button w='90%' mb={5}>Register with Google</Button>
    <Box border='2px solid green' mt={2}>
        <Text fontWeight='bold'>Register with Email</Text>
         <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input type='text' name='firstName' value={newUser.firstName} onChange={handleChange}/><br />
            <FormLabel>Last Name</FormLabel>
            <Input type='text' name='lastName' value={newUser.lastName} onChange={handleChange} /><br />
            <FormLabel>Email adress</FormLabel>
            <Input type='email' name='email' value={newUser.email} onChange={handleChange}/><br />
            <FormLabel>Create a password</FormLabel>
            <Input type='password' name='password' value={newUser.password} onChange={handleChange} /><br />
            <Button colorScheme='green' w='90%' m={5} onClick={()=>handleClick(newUser,addUser)}>Register</Button>
        </FormControl>
    </Box>
    </Box>
)
}
export default Register;