import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent,
     ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";


function Admin(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const [BtnValue, setBtnValue] = React.useState('login');

  const handleSizeClick = (val) => {
    setBtnValue(val)
    onOpen()
  };
  const value = ['Add', 'Update', 'Delete'];
    return(
        <div>
            <h1>ADMIN SITE</h1>
            <Text>This site is only for Admin! <InfoOutlineIcon/></Text>
            <Box mt='2rem'>
            {BtnValue=="login"? <Button onClick={onOpen}>Login</Button> : 
            value.map((val) => (
                <Button
                  onClick={() => handleSizeClick(val)}
                  key={val}
                  m={10}
                >{`${val} Products`}</Button>
              ))
            }
            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
              >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Login Here</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>First name</FormLabel>
                        <Input ref={initialRef} placeholder='First name' />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Last name</FormLabel>
                        <Input placeholder='Last name' />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3}>
                        Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            </Box>
        </div>
    )
}
export default Admin;