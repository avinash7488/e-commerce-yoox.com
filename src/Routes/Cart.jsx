import { ChevronRightIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex, FormControl, FormLabel, Grid, Heading,
    Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent,
     ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, useToast } from "@chakra-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserDataContext } from "../Context/ContextProvider";
import { BsDashLg, BsPlusLg, BsXLg } from "react-icons/bs";

function Cart(){
    const {cartCount,setCartCount,cart,setCart}=useContext(UserDataContext);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = useRef(null);
    const [totalPrice,setTotalPrice]= useState();
    const Toast= useToast();

    const handleFilter=(id)=>{
      let newcart= cart.filter((item)=>item.id!==id);
      setCart(newcart)
      setCartCount(cartCount-1)
    }
    const handleAlert=()=>{
      Toast({
        title: "Products Order Successfully",
        status: "success",
        duration: 1000,
        isClosable: true,
      })
    }
    const handleClick=()=>{
        handleAlert();
        handleClearCart();
        onClose();
    }

    const getCartProducts = () => {
      fetch("https://real-blue-gosling-coat.cyclic.app/users/cart_product", {
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

    const handleUpdateCart = (val, id) => {
      if (val < 1) {
        val = 1;
      }
      fetch(
        `https://real-blue-gosling-coat.cyclic.app/users/cart_product/update/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({ qty: val }),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          getCartProducts();
        })
        .catch((err) => console.log(err.message));
    };


    const handleClearCart = () => {
      fetch(`https://real-blue-gosling-coat.cyclic.app/users/clear_cart`, {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          getCartProducts();
        })
        .catch((err) => console.log(err.message));
    };


    //Update Total Price--------------------------------------------------------->
  let total = 0;
  const handlePrice = () => {
    cart?.map((el) => {
      return (total += Number(el.productID.price) * el.qty);
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    handlePrice();
  });

 //while cart is empty-------------------------------------------------------->
 if (cart?.length === 0) {
  return (
    <>
      <Box
        m={"auto"}
        p={50}
        w={"60%"}
        mt={"50px"}
        boxShadow="rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
      >
        
        <Center>
          <Stack>
            <Image
              m={"auto"}
              src={
                "https://thumbs.gfycat.com/SlushyObedientGrackle-max-1mb.gif"
              }
              w={{ base: "100px", md: "150px", lg: "250px" }}
              h={{ base: "100px", md: "150px", lg: "250px" }}
            />
            <Text
              mt={10}
              fontWeight={"bold"}
              color={"gray.500"}
              fontSize={30}
            >
              Looks like you have no items in your shopping cart
            </Text>
            <Link to="/">
              <Button
                color={"white"}
                mt={10}
                bg={"pink.600"}
                w={300}
                fontSize={20}
              >
                Return to shop
              </Button>
            </Link>
          </Stack>
        </Center>
      </Box>
    </>
  );
}


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
                  color={"green.500"}
                >{`PROCEED WITH YOUR ORDER ${totalPrice}/-`}<ChevronRightIcon/></Button>
              
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
        {cart.map((item)=><Grid templateColumns='repeat(6, 1fr)' gap={6} key={item.id}
        boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"
        p={5}
        >
        
              <Image h='100px' w='100px' src={item.productID.image1} alt="image"/> 
              
                <Text>{item.productID.title}</Text>
                <Text>{item.productID.category}</Text>
             
        
            <Stack direction={{ base: "column", md: "row" }}>
                            <Box
                              onClick={() =>
                                handleUpdateCart(item.qty - 1, item._id)
                              }
                            >
                              <BsDashLg cursor={"pointer"} />
                            </Box>
                            <Box color={"gray.700"} fontWeight="semibold">
                              {item.qty}
                            </Box>
                            <Box
                              onClick={() =>
                                handleUpdateCart(item.qty + 1, item._id)
                              }
                            >
                              <BsPlusLg cursor={"pointer"} />
                            </Box>
                          </Stack>
            <Box fontWeight='bold'>{item.productID.price}$</Box>
            <Button onClick={()=> handleFilter(item.id) }><CloseIcon/>REMOVE</Button>
        </Grid>)}
        </Box>
    </Box>
  </Box>
}

export default Cart;