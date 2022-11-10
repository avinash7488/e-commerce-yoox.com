import { EmailIcon } from "@chakra-ui/icons";
import { Box, Button, Checkbox, Heading, Input, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Footer(){
    return(
    <Box mt='50px'>
        <Stack direction={['column', 'row']} spacing='24px' w='70%' margin="auto" >
            <Box w='20%'>
              <Heading fontSize='lg'>NEW TO YOOX</Heading>
              <Link>Shopping guide</Link><br />
              <Link>iphone/ipad/Android</Link><br />
              <Link>Browse all Designers</Link><br />
              <Link>Browse all Designers</Link>
            </Box>
            <Box w='20%'>
            <Heading fontSize='lg'>HELP</Heading>
               <Link>Shipping times & costs</Link><br />
              <Link>payments and web security</Link><br />
              <Link>product quality</Link><br />
              <Link>Track yout products</Link><br />
              <Link>Return & refunds</Link>
             </Box>
            <Box w='25%' shadow='md' p={8}>
            <EmailIcon/>
            <Heading fontSize='lg' >YOOX NEWS</Heading>
              <Text fontSize={12}>Sign up for the newsletter
              and discover the latest arrivals and promotions</Text>
              <Input placeholder="INSERT YOUR EMAIL ADDRESS"/>
              <RadioGroup>
                    <Stack direction='row'>
                    <Radio value='Woman'>Woman</Radio>
                     <Radio value='Man'>Man</Radio>
                     </Stack>
           </RadioGroup>
           <Checkbox defaultChecked ><Text fontSize={11} color='gray.400' fontStyle='italic'> I consent to recieve YOOX newsletters via email.
                            For future information, please consult the 
                            Privacy Policy
                            </Text>
            </Checkbox>
            <Button bg='gray.700' color='white' mt={10}>SIGN UP</Button>
            </Box>
           <Box w='20%'>
           <Heading fontSize='lg'>MYOOX</Heading>
                <Link>Login</Link><br />
            <Link>My Orders</Link><br />
            <Link>My Details</Link><br />
            <Link>Dream Box</Link><br />
            <Link>Premeire</Link>
            </Box>
            <Box w='20%'>
            <Heading fontSize='lg'>ABOUT US</Heading>
               <Link>Company info</Link><br />
              <Link>press</Link><br />
              <Link>Affiliation</Link><br />
              <Link>Careers</Link>
            </Box>
        </Stack>
</Box>
    )
}
export default Footer;