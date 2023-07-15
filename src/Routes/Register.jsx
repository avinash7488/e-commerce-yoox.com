import {Box, Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react"
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'

const initialUser={
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    is_admin: false,
    is_active: false,
}
function Register(){
    const[newUser,setNewUser]= useState(initialUser);
    const navigate=useNavigate();
    const toast = useToast();
    

   const handleChange=(e)=>{
    const { name } = e.target
    setNewUser({ ...newUser, [name]: e.target.type==="checkbox"?e.target.checked:e.target.value })
   }

//    const handleAlert=()=>{
//     isExist?alert("You are already exist ! You can Login."): alert("You are Registered Successfully ! Now You can Login.");
//    }

   const registeruser=()=>{
    fetch(`https://real-blue-gosling-coat.cyclic.app/register`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(newUser)
    }).then(res=>res.json())
      .then(res=>{
        toast({
            title: `${res.msg}`,
            status: res.msg==="You have been registered successfully"?"success":"error",
            duration: 1000,
            isClosable: true,
          })
          if(res.msg==="You have been registered successfully"){
            navigate("/login");
          }
      }).catch(err=>{
        toast({
            title: `${err}`,
            description: "somthing went wrong",
            status: "error",
            duration: 2000,
            isClosable: true,
          })
      })
}
   

return(
    <Box  m='auto' width='50%' mt={5}>
    <Button w='90%' mb={5} colorScheme='facebook' >Register with Facebook</Button><br />
    <Button w='90%' mb={5}>Register with Google</Button>
    <Box border='2px solid green' mt={2}>
        <Text fontWeight='bold'>Register with Email</Text>
         <FormControl padding={5}>
            <FormLabel>First Name</FormLabel>
            <Input id="firstName" type='text' name='firstName' value={newUser.firstName} onChange={handleChange}/><br />
            <FormLabel>Last Name</FormLabel>
            <Input id="lastName" type='text' name='lastName' value={newUser.lastName} onChange={handleChange} /><br />
            <FormLabel>Email adress</FormLabel>
            <Input id="email" type='email' name='email' value={newUser.email} onChange={handleChange}/><br />
            <FormLabel>Create a password</FormLabel>
            <Input id="password" type='password' name='password' value={newUser.password} onChange={handleChange} /><br />
            <input type="checkbox" name="is_admin" onChange={handleChange} />
            <label for="true"> I want to become Admin</label>
            <Button colorScheme='green' w='90%' m={5} onClick={registeruser}>Register</Button>
            <p>Already have account? <Link to='/login' cursor="pointer"> <Text color={"blue.500"}>Login</Text></Link></p>
        </FormControl>
    </Box>
    </Box>
)
}
export default Register;