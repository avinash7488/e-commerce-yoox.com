import { Box, Button, ButtonGroup, HStack, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import {EditIcon, Search2Icon, UnlockIcon} from "@chakra-ui/icons"
import {Link} from "react-router-dom";
//AiOutlineHeart

function Navbar(){
return(
    <div>
        <VStack fontSize={11} fontWeight='bold'>
            <HStack justifyContent='space-evenly'  w='100%' p={2} borderBottom="1px solid lightGray">

            <SimpleGrid columns={{base:'1',md:'2'}} spacing='20px'>
                <Box ><Link to="">UNITED STATES</Link></Box>
                <Box ><Link to="">CUSTOMER CARE</Link></Box>
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
                    <Image  h='70px' w='120px' mt={-2} src="C:\Users\Avinash singh\Downloads\Y.png" alt="yoox logo"></Image>
                    
                </Box>

                <SimpleGrid columns={{base:'1',md:'3'}} spacing='20px'>
                <Box ><Button bg='white' ><Search2Icon/></Button></Box>
                <Box ><Button bg='white' ><AiOutlineHeart/></Button> </Box>
                <Box><Button bg='white' ><AiOutlineShopping/>  </Button></Box>
                
            </SimpleGrid>
               
            </HStack>
            
        </VStack>
        
    </div>
)
}
export default Navbar;