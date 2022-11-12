import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import axios from "axios";

function Women(){
const getProducts=()=>{
    axios.get('https://dummyjson.com/products')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

useEffect(()=>{
    getProducts();
},[])

    return <Box>
            <Box w='90%' margin='auto'>
            <Image src="https://www.yoox.com/images/yoox80/banners/6824_2_XmasLaunch_WM_Main.jpg?634485886869569819#width=1380&height=637" alt="banner"/>
            </Box>
              
              <Box w='90%' margin='auto' mt='60px'>
                <SimpleGrid columns={{base:'1',md:'3'}} spacing='40px'>
                    <Box><Image
                     src="https://www.yoox.com/images/yoox80/banners/6824_6_WinterShop_HL_W.jpg?634485886869569819#width=430&height=600" alt="image"/>
                     <Text>BELOW-ZERO BUY</Text>
                     <Button>Shop Now</Button>
                    </Box>
                    <Box>
                        <Image h='100%' src="https://www.yoox.com/images/yoox80/banners/6825_5_SeeByChloe_W_Second.jpg?634485886869569819" alt="image"/>
                        <Text>SEE BY CHLOE</Text>
                        <Button>Shop Now</Button>
                    </Box>
                    <Box><Image
                     src="https://www.yoox.com/images/yoox80/banners/6824_18_ShoesEdit_W_HL.jpg?634485886869569819#width=430&height=600" alt="image"/>
                      <Text>SOLE-SERCHING</Text>
                     <Button>Shop Now</Button>
                    </Box>
                </SimpleGrid>
              </Box>
              <Box>
                <HStack>
                    <Box>
                        <Text>NEW ARRIVAL</Text>
                        <Button>View All <ArrowRightIcon/></Button>
                    </Box>
                    <Box>
                        <SimpleGrid columns={{base:'1',md:'3'}} spacing='20px'>
                            <Box><Image src="" alt=""/></Box>
                            <Box><Image src="" alt=""/></Box>
                            <Box><Image src="" alt=""/></Box>
                        </SimpleGrid>
                    </Box>
                </HStack>
              </Box>
              <Box>

              </Box>
              <Box>
                <HStack>
                    <Box>
                        <Text>ONE OF KIND</Text>
                        <Button>View All <ArrowRightIcon/></Button>
                    </Box>
                    <Box>
                        <SimpleGrid columns={{base:'1',md:'3'}} spacing='20px'>
                            <Box><Image src="" alt=""/></Box>
                            <Box><Image src="" alt=""/></Box>
                            <Box><Image src="" alt=""/></Box>
                        </SimpleGrid>
                    </Box>
                </HStack>
              </Box>
              <Box>
                
              </Box>
           </Box>
}

export default Women;