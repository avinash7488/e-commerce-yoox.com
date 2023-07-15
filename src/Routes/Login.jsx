import {Box, Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import {useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'


function Login(){
    const [user,setUser]= useState(false);
    const [loading,setLoading]=useState("true");
    const navigate=useNavigate();
    const toast = useToast();
    
   

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setUser({...user,[name]:value})
       }

    const loginuser=()=>{
        fetch(`https://real-blue-gosling-coat.cyclic.app/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                
            },
            body:JSON.stringify(user)
        }).then(res=>res.json())
          .then(res=>{
            setLoading("false")
            toast({
                title: `${res.msg}`,
                status: res.msg==="Login Successfull"?"success":"error",
                duration: 1000,
                isClosable: true,
              })
              if(res.msg==="Login Successfull"){
                localStorage.setItem("token",res.token);
                navigate(-1);
              }
          }).catch(err=>{
            toast({
                title: `${err.message}`,
                description: "somthing went wrong",
                status: "error",
                duration: 2000,
                isClosable: true,
              })
          })
    }

    return(
    <Box  m='auto' width='50%' mt={5} >
    <Button w='90%' mb={5} colorScheme='facebook' >Login with Facebook</Button><br />
    <Button w='90%' mb={5}>Login with Google</Button>
    <Box border='2px solid green' mt={2} padding={5}>
        <Text fontWeight='bold'>Login with Email</Text>
         <FormControl>
            <FormLabel>Enter Your Email Adress</FormLabel>
            <Input id="email" type='email' name='email' value={user.email} onChange={handleChange}/><br />
            <FormLabel>Enter Your Password</FormLabel>
            <Input id="password" type='password' name='password' value={user.password} onChange={handleChange} /><br />
            <Button colorScheme='blue' w='90%' m={5} onClick={loginuser} isloading={loading}>Login</Button>
            <p>Dont't have account? <Link to='/login' cursor="pointer"> <Text color={"blue.500"}>Register</Text></Link></p>
        </FormControl>
    </Box>
    </Box>
    )
}
export default Login;