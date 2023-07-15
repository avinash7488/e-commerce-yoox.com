import { Image, Text, Grid, GridItem, Box, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../Context/ContextProvider";

function AllProducts(){
    const {products}= useContext(UserDataContext);
console.log(products)
    return( <Box w="90%" m='auto'>
    <Grid mt='10px' templateColumns='repeat(4, 1fr)' gap={5} >
    {products.map((item)=><GridItem   key={item.id}
    boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"
    padding={"5"}
    borderRadius={10}
    >
                <Image objectFit={"contain"} src={item.image1} alt={item.title}/>
                <Text fontWeight='bold'>{item.title}</Text>
                <Text>Sold By: {item.soldby}</Text>
                <Text color={"green"} fontWeight={"bold"}>Price: {item.price}$</Text>
                <Link to={`/products/${item._id}`}><Button color={"white"} bg={"blue.400"}>Buy Now</Button></Link>
            </GridItem>
            )}
    </Grid>
    </Box>
    )
}
export default AllProducts;