import { Box, Button,HStack,IconButton,Text,Image,Link } from "@chakra-ui/react";
import React from "react";
import "../../css/work.css";
// import Link from "react-router-dom"


export default function One() {
  return (
    <Box className="pg1w">
      <HStack className="h1">
        <Box>
          <h3>Hello, Suyasha!</h3>
          <h2>Let's start the day of your project with your project planning :)</h2>
        </Box>
        <Link to="/">
        <img
          src="https://cdn.monday.com/images/homepage-desktop/header-background-v2.svg"
          alt=""
        />
      
        </Link>
        
        <Box className="spc"></Box>
        <HStack>
        <Text as="h3"> Give feedback
        <Image width="30px" src="https://cdn-icons-png.flaticon.com/512/768/768788.png"/>
         
        </Text>  </HStack>
        <Button bg="#0073EA" color="white">
          quick search</Button>
      </HStack>
      
    </Box>
    

  );
}
