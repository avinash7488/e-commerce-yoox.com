import { ChevronRightIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, FormControl, FormLabel, Grid, Heading, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { useContext, useEffect, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserDataContext } from "../Context/ContextProvider";

function Cart(){
    const {cartCount,setCartCount,cart,setCart}=useContext(UserDataContext);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = useRef(null);
    const handleFilter=(id)=>{
      let newcart= cart.filter((item)=>item.id!==id);
      setCart(newcart)
      setCartCount(cartCount-1)
    }
    const handleAlert=()=>{
        alert("Payment Successful");
    }
    const handleClick=()=>{
        handleAlert();
       onClose();
    }

    const getCartProducts = () => {
      fetch("https://cyan-light-walkingstick.cyclic.app/users/cart_product", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setCart(res);
        })
        .catch((err) => console.log(err.message));
    };

    useEffect(()=>{
      getCartProducts()
    },[])

    console.log(cart)
  return <Box w='90%' m='auto'>
    <Heading>SHOPPING BAG</Heading>
    <Box>
        <Flex justifyContent='space-around' mt='50px' mb='100px'>
            <Link to='/women' fontWeight='bold'><u> BACK TO SHOPPING</u></Link>
            <Button bg='yellow' w='300px' fontSize='2xl' fontWeight='bold'>
                <Text color='blue.600'>Pay</Text>
                <Text color='cyan.500'>Pal</Text>
            </Button>
            <Text>or</Text> 
            <Button
                  onClick={onOpen}
                >PROCEED WITH YOUR ORDER<ChevronRightIcon/></Button>
              
            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
              >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Enter your card details</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Card Number</FormLabel>
                        <Input ref={initialRef} placeholder='card number' type='number' />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>CVV</FormLabel>
                        <Input type='number' placeholder='Enter CVV' />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>OTP</FormLabel>
                        <Input type='password' placeholder='Enter OTP' />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Link to="/women"><Button onClick={handleClick} colorScheme='blue' mr={3}>
                        Pay
                    </Button></Link>
                    <Button><Link to='/women'>Go back to Home Page</Link></Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
        </Flex>
        <hr style={{height:'3px',backgroundColor:'gray'}}/>

        <Box mt='100px'>
        {cart.map((item)=><Grid templateColumns='repeat(3, 1fr)' gap={6} key={item.id}>
            <Flex>
              <Image h='100px' w='100px' src={item.image1} alt="image"/> 
              <Box>
                <Text>{item.title}</Text>
                <Text>{item.category}</Text>
              </Box>
            </Flex>
            <Button onClick={()=> handleFilter(item.id) }><CloseIcon/>REMOVE</Button>
            <Box fontWeight='bold'>{item.price}$</Box>
        </Grid>)}
        </Box>
    </Box>
  </Box>
}

export default Cart;