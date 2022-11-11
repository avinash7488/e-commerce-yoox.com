import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";

function Women(){
    return <Box>
              <Image src="" alt=""/>
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