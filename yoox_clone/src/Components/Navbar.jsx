import { Box, Button,  FormControl,  FormLabel,  HStack, Image, Input, Menu,
     MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent,
      ModalHeader, ModalOverlay, Popover,  PopoverBody, PopoverCloseButton, PopoverContent,
       PopoverHeader, PopoverTrigger, SimpleGrid,  useDisclosure,  VStack } from "@chakra-ui/react";
import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import {EditIcon, EmailIcon, PhoneIcon, Search2Icon, UnlockIcon} from "@chakra-ui/icons"
import {Link} from "react-router-dom";
import React,{ useState,useEffect } from "react";
import axios from "axios";
import {Logo} from "./logo";

//AiOutlineHeart

function Navbar(){
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    
  
      const[countryData,setCountryData]=useState([]);
      const[countryName,setCountryName]=useState("UNITED STATES");

   //getting country name through api
   const getCountryName=()=>{
  return axios.get(`https://restcountries.com/v3.1/all`)
   .then(res=>setCountryData(res.data));
  
   }

   useEffect(()=>{
    getCountryName();
   },[])

return(
    <div>
        <VStack fontSize={13} fontWeight='bold'>
            <HStack justifyContent='space-evenly'  w='100%' p={2} borderBottom="1px solid lightGray">

{/* select country------------> */}
            <SimpleGrid columns={{base:'1',md:'2'}} spacing='20px'>
            <Menu bg="transparent">
                <MenuButton fontSize={12} fontWeight='bold' >{countryName.toUpperCase()}</MenuButton>
              
                    <MenuList>
                    <SimpleGrid columns={{base:"2",md:"4"}} spacingX='10px' spacingY='5px'>
                        {countryData.map((data)=>
                        <MenuItem key={data.name.common} onClick={()=>setCountryName(data.name.common)}>
                            <Image h={4} w={6} src={data.flags.png} alt="flag"/>
                            {data.name.common}
                        </MenuItem>)}
                    </SimpleGrid>    
                    </MenuList>
            </Menu>

{/* customer care----------------> */}
            <Box >
            <Popover placement='top-start'>
                <PopoverTrigger>
                    <Button fontSize={12} fontWeight='bold' bg='transparent'>CUSTOMER CARE</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverHeader fontWeight='bold'>CONTACT US</PopoverHeader>
                 
                 <PopoverCloseButton />
                 <PopoverBody>
                     <SimpleGrid columns={2} spacing="10px">
                        <Box bg='gray.100'><PhoneIcon/><br /> 18005558696</Box>
                        <Box bg='gray.100'><EmailIcon/><br /> support@yoox.com</Box>
                     </SimpleGrid>
                </PopoverBody>
                </PopoverContent>
            </Popover>
            </Box>
            </SimpleGrid>
               
            <Box>
                 FREE STANDARD SHIPPING ON ORDERS OVER $250
            </Box>

            <SimpleGrid columns={{base:'1',md:'2'}} spacing='20px'>
                <Box ><Link to="/register"><EditIcon/>REGISTER</Link></Box>
                <Box ><Link to="/login"> <UnlockIcon/>LOGIN</Link></Box>
            </SimpleGrid>
            
            </HStack>
            
            <HStack justifyContent='space-evenly'  w='100%' fontSize={13} fontWeight='bold'>


            <SimpleGrid columns={{base:'1',md:'2',lg:'4'}} spacing='20px'>
                <Box ><Link to="/women">WOMEN</Link></Box>
                <Box ><Link to="/men">MEN</Link></Box>
                <Box><Link to="/kids">KIDS</Link></Box>
                <Box> <Link to="/design">DESIGN+ART</Link></Box>
            </SimpleGrid>
                     
                <Box  >
                    <Image  ml='-5' h='7rem' w='14rem' mt='-2' src={Logo} alt="yoox logo"></Image>
                    
                </Box>

                <SimpleGrid columns={{base:'1',md:'3'}} spacing='20px'>
            <Box >
            <Button onClick={onOpen}><Search2Icon/></Button>
                  <Modal
                      initialFocusRef={initialRef}
                      isOpen={isOpen}
                      onClose={onClose}
                 >
                <ModalOverlay />
                  <ModalContent>
                      <ModalHeader>Search products</ModalHeader>
                      <ModalCloseButton />
                     <ModalBody pb={6}>
                       <FormControl>
                        <FormLabel>Type products category or name</FormLabel>
                         <Input ref={initialRef} placeholder='Products' />
                      </FormControl>

                     </ModalBody>
                      <Button colorScheme='blue' mr={3}>
                       Search
                     </Button>
               </ModalContent>
                 </Modal>
            </Box>
                <Box ><Button bg='white' ><AiOutlineHeart/></Button> </Box>
                <Box><Button bg='white' ><AiOutlineShopping/>  </Button></Box>
                
            </SimpleGrid>
               
            </HStack>
            
        </VStack>
        
    </div>
)
}
export default Navbar;