import { Box, Button, Flex, HStack, Heading,Image, Text, VStack,useToast } from "@chakra-ui/react";
import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useParams, useNavigate} from "react-router-dom"
import { UserDataContext } from "../Context/ContextProvider";


function SingleProducts(){
    const params= useParams();
    const[data,setData]= useState({});
    const Toast= useToast();
    const navigate= useNavigate();
    const {id}=params
    const{setCartCount,cart}=useContext(UserDataContext);

    const getDetails=(id)=>{
            axios.get(`https://real-blue-gosling-coat.cyclic.app/products/${id}`)
            .then(function (response) {
                setData(response.data);
                console.log(response);
             })
             .catch(function (error) {
             console.log(error);
             });
         };

    useEffect(()=>{
      getDetails(params.id)
    },[]);
    
    const handleClick=()=>{
        setCartCount(cart.length+1);
        Addtocart();
    }

    const Addtocart = async () => {
        console.log("clicked");
        try {
          let r = await fetch(
            `https://real-blue-gosling-coat.cyclic.app/users/cart_product/add/${id}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
              },
              body: JSON.stringify(),
            }
          );
          let d = await r.json();
          Toast({
            title: `${d.msg}`,
            status: d.msg === "Product added to cart" ? "success" : "error",
            duration: 1000,
            isClosable: true,
          });
          if(d.msg!=="Product added to cart"){
            navigate("/login")
          }
        } catch (error) {
          console.log(error);
          Toast({
            title: `${error.message}`,
            status: "error",
            duration: 1000,
            isClosable: true,
          });
        }
      };


//   console.log(data)
   
    return(
        <Box w='50%' m='auto' mt='20px'>
            <Flex gap='100px'>
              <VStack>
                 <Image objectFit={"contain"} src={data.image1} alt="image"/>
             </VStack>
             <Box textAlign='left' fontWeight={"bold"} mt={10}>
                <Text fontWeight='bold'>{data.title}</Text><br />
                 <Text>Category: {data.category}</Text><br />
                <Text color={"green"}>Price: {data.price}$</Text><br />
                 <Button w='100%' bg="gray.700" color='white' bgColor={"blue.400"} onClick={handleClick}>ADD TO SHOPPING BAG</Button><br />
             </Box>
         </Flex>
         </Box>
    )
}
export default SingleProducts;