import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Button, FormControl, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent,
     ModalFooter, ModalHeader, ModalOverlay, Select, Text, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import React, { useRef, useState } from "react";

const initialData={
  title:"",
  imgURL:"",
  price:"",
  category1:"",
  category:""
}
function Admin(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = useRef(null);
    const [BtnValue, setBtnValue] =useState('login');
    const[login,setLogin]=useState(false);
    const[data,setData]=useState(initialData);

    
    console.log(BtnValue)
  const handleSizeClick = (val) => {
    setBtnValue(val)
    onOpen()
  };
  const handleAdd=()=>{
    axios({
      method: 'post',
      url: 'http://localhost:8080/posts',
      data: initialData
    })
  }
  const handleChange2=(e)=>{
   const {name,value}=e.target;
   setData({...data,[name]:value})
  }
  const handleClick1=()=>{
    setLogin(true)
    onClose();
    alert("Login Success")
  }
  const handleClick2=()=>{
    handleAdd();
    onClose();
  }
  const handleClick3=()=>{
    onClose();
  }
  const handleClick4=()=>{
    onClose();
  }
  const value = ['Add', 'Update', 'Delete'];
    return(
        <Box margin='auto' mt="50px" mb='50px' shadow="2xl" w='60%' p={10}>
            <Heading>ADMIN SITE</Heading>
            <Text fontSize={20}>This site is only for Admin! <InfoOutlineIcon/></Text>
            <Box mt='2rem'>
            {!login? <Button onClick={onOpen}>Login</Button> : 
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
              {BtnValue==="login" && <ModalContent>
                <ModalHeader>Login Here</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input ref={initialRef} placeholder='Email' type='email' />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Password</FormLabel>
                        <Input type='password' placeholder='Password' />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={handleClick1} colorScheme='blue' mr={3}>
                        LOGIN
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>}

              {BtnValue==="Add" && <ModalContent>
                <ModalHeader>Add Products</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Product Name</FormLabel>
                        <Input ref={initialRef}  type='text' name="title" value={data.ProductName} onChange={handleChange2}/>
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Image URL</FormLabel>
                        <Input type='url' name="imgURL" value={data.imgURL} onChange={handleChange2}/>
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Product price</FormLabel>
                        <Input type='number' name="price" value={data.price} onChange={handleChange2}/>
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Category1</FormLabel>
                        <Select name="category1" value={data.category1} onChange={handleChange2}>
                          <option value='designers'>Designers</option>
                          <option value='clothing'>Clothing</option>
                          <option value='shoes'>Shoes</option>
                          <option value='accessories & bag'>Accessories & bag</option>
                        </Select>
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Category2</FormLabel>
                        <Select name="category2" value={data.category2} onChange={handleChange2}>
                          <option value='women'>women</option>
                          <option value='men'>men</option>
                          <option value='kids'>kids</option>
                          <option value='design & art'>design & art</option>
                        </Select>
                    </FormControl>
                    
                </ModalBody>

                <ModalFooter>
                    <Button onClick={handleClick2} colorScheme='blue' mr={3}>
                        ADD
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>}

              {BtnValue==="Update" && <ModalContent>
                <ModalHeader>Update Product</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Product ID</FormLabel>
                        <Input ref={initialRef}  type='number' />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Image URL</FormLabel>
                        <Input type='url' name="imgURL" />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Product price</FormLabel>
                        <Input type='number' name="productPrice" />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Category1</FormLabel>
                        <Select placeholder='Select Category1'>
                          <option value='designers'>Designers</option>
                          <option value='clothing'>Clothing</option>
                          <option value='shoes'>Shoes</option>
                          <option value='accessories & bag'>Accessories & bag</option>
                        </Select>
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Category2</FormLabel>
                        <Select placeholder='Select Category2'>
                          <option value='women'>women</option>
                          <option value='men'>men</option>
                          <option value='kids'>kids</option>
                          <option value='design & art'>design & art</option>
                        </Select>
                    </FormControl>
                    
                </ModalBody>

                <ModalFooter>
                    <Button onClick={handleClick3} colorScheme='blue' mr={3}>
                        UPDATE
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>}

              {BtnValue==="Delete" && <ModalContent>
                <ModalHeader>Delete Product</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Product ID</FormLabel>
                        <Input ref={initialRef} type='number' />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={handleClick4} colorScheme='blue' mr={3}>
                        Delete
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>}
            </Modal>
            </Box>
        </Box>
    )
}
export default Admin;