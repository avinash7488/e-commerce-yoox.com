import { Image, Text, Grid, GridItem, Box, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../Context/ContextProvider";

function AllProducts(){
    const {products}= useContext(UserDataContext);
console.log(products)
    return( <Box w="90%" m='auto'>
    <Grid mt='50px' templateColumns='repeat(3, 1fr)' gap={5}>
    {products.map((item)=><GridItem   key={item.id}>
                <Image h='300px' w='50%' ml="25%" src={item.image1} alt={item.title}/>
                <Text fontWeight='bold'>{item.title}</Text>
                <Text>Price:{item.price}$</Text>
                <Text>Sold By:{item.soldby}</Text>
                <Link to={`/products/${item.id}`}><Button>Buy Now</Button></Link>
            </GridItem>
            )}
    </Grid>
    </Box>
    )
}
export default AllProducts;