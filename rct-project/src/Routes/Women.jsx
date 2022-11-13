import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button,  Image, SimpleGrid, Text } from "@chakra-ui/react";

import axios from "axios";
import { useContext } from "react";
import { UserDataContext } from "../Context/ContextProvider";
import { Link } from "react-router-dom";


function Women(){
    const{getData}=useContext(UserDataContext);

const getProducts=()=>{
    axios.get(`https://fakestoreapi.com/products/category/women's clothing`)
  .then(function (response) {
    getData(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

const handleClick=()=>{
    getProducts();
}


    return <Box>
            <Box w='90%' margin='auto'>
            <Image src="https://www.yoox.com/images/yoox80/banners/6824_2_XmasLaunch_WM_Main.jpg?634485886869569819#width=1380&height=637" alt="banner"/>
            </Box>
              
              <Box w='90%' margin='auto' mt='60px'>
                <SimpleGrid columns={{base:'1',md:'3'}} spacing='40px'>
                    <Box><Image h='90%'
                     src="https://www.yoox.com/images/yoox80/banners/6824_6_WinterShop_HL_W.jpg?634485886869569819#width=430&height=600" alt="image1"/>
                     <Text fontWeight='bold'>BELOW-ZERO BUY</Text>
                   
                    </Box>
                    <Box>
                        <Image h='90%' src="https://www.yoox.com/images/yoox80/banners/6825_5_SeeByChloe_W_Second.jpg?634485886869569819" alt="image2"/>
                        <Text fontWeight='bold'>SEE BY CHLOE</Text>
                        
                    </Box>
                    <Box><Image h='90%'
                     src="https://www.yoox.com/images/yoox80/banners/6824_18_ShoesEdit_W_HL.jpg?634485886869569819#width=430&height=600" alt="image3"/>
                      <Text fontWeight='bold'>SOLE-SERCHING</Text>
                     
                    </Box>
                </SimpleGrid>
              </Box>
                    <Box margin='auto'>
                    <Link to='/products'>   <Button w='20rem' onClick={handleClick}>View All <ArrowRightIcon/></Button></Link>
                    </Box>
              
                    <Box  w='90%' margin='auto' mt='30px'>
                        <SimpleGrid columns={{base:'1',md:'3'}} spacing='20px'>
                            <Box>
                                <Image src="https://www.yoox.com/images/yoox80/banners/6825_1_Hugo_Tris_W.jpg?634485886869569819#width=473&height=660" alt="image4"/>
                                <Text fontWeight='bold'>HUGO</Text>
                                <Text fontWeight="light">Express Yourself</Text>
                            </Box>
                            <Box>
                                <Image src="https://www.yoox.com/images/yoox80/banners/6825_6_Montblanc_W_Tris.jpg?634485886869569819#width=473&height=660" alt="image5"/>
                                <Text fontWeight='bold'>MONTBLANC</Text>
                                <Text fontWeight="light">It's gifting season!</Text>
                            </Box>
                            <Box>
                                <Image src="https://www.yoox.com/images/yoox80/banners/6825_5_Furla_W_Tris.jpg?634485886869569819#width=473&height=660" alt="image6"/>
                                <Text fontWeight='bold'>FURLA</Text>
                                <Text fontWeight="light">Fall/Winter 2022 Collection</Text>
                            </Box>
                        </SimpleGrid>
                    </Box>
                    <Link to='/products'> <Button w='20rem' m='20px' onClick={handleClick}>View All <ArrowRightIcon/></Button></Link>
    
                    <Box w='90%' m='auto'>
                        <SimpleGrid columns={{base:'1',md:'2'}} spacing='0px'>
                            <Box><Image w='100%' src="https://www.yoox.com/images/yoox80/banners/6769_1_DesignArtHomedecor_WM_Bottom.png?634485886869569819#width=690&height=637" alt="image7"/></Box>
                            <Box><Image w='100%' src="https://www.yoox.com/images/yoox80/banners/6895_2_GenZ_W_Bottom.jpg?634485886869569819#width=690&height=637" alt="image8"/></Box>
                        </SimpleGrid>
                    </Box>
              
           </Box>
}

export default Women;