import { Button, Flex, Image, Input, Spacer, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import "../css/GetStart.css";


export default function GetStart({setGets}) {

  let gts = document.querySelector('.getStart');

  

 return (
    <Flex direction="column" className='getStart' justifyContent="center" gap="20px" alignItems="center">
      <Button className='btn' w="30px" ml="280px" onClick={()=>setGets(false)} border="0px">X</Button>
        <Text as='h2' fontSize='25px' fontFamily='Arial' >Sign up for free</Text>
        <h2>Full access. No credit card needed.</h2>
        <Input variant={"filled"} placeholder='Enter your work email' 
        w={"70%"} h={"40px"} borderRadius={"20px"} bg="#f5f5f5" textAlign="center" borderColor="grey"></Input>
        <Button color="#ffffff" bg="#6C6CFF" borderRadius="20px" className='bt'>Continue</Button>
         <Text color="#676879">Or</Text>
        <Button borderRadius="20px" className='bt btn' borderColor="#6C6CFF" >
            <Text>Sign up with</Text> 
          <Image w="30px" src='https://img.icons8.com/fluency/2x/google-logo.png'></Image>
        </Button>
    </Flex>
  )
}
