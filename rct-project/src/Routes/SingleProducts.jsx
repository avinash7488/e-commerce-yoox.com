
import { Box, Button, Flex, Heading,Image, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useParams} from "react-router-dom"
import { UserDataContext } from "../Context/ContextProvider";


function SingleProducts(){
    const params= useParams();
    const[data,setData]= useState({});
    
    const{cartCount,setCartCount,cartHandler}=useContext(UserDataContext);

    const getDetails=(id)=>{
            axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(function (response) {
                setData(response.data);
             })
             .catch(function (error) {
             console.log(error);
             });
         };

    useEffect(()=>{
      getDetails(params.id)
    },[]);
    
    const handleClick=()=>{
        setCartCount(cartCount+1);
        cartHandler(data);
    }
  console.log(data)
   
    return(
        <Box w='50%' m='auto' mt='20px'>
            <Flex gap='100px'>
              <VStack>
                 <Image h='350px' w='300px' src={data.image} alt="image"/>
             </VStack>
             <Box textAlign='left' >
                <Text  fontWeight='bold'>Brand:{data.brand}</Text><br />
                <Text fontWeight='bold'>{data.title}</Text><br />
                 <Text>Category:{data.category}</Text><br />
                <Text>Price:{data.price}$</Text><br />
                 <Button w='100%' bg="gray.700" color='white' onClick={handleClick}>ADD TO SHOPPING BAG</Button><br />
             </Box>
         </Flex>
         <Box>
            <Heading>DETAILS</Heading>
            <Text>{data.description}</Text>
         </Box>
         </Box>
    )
}
export default SingleProducts;