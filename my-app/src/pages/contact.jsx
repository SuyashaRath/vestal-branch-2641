import { Box, Button, Center, Flex, Heading, HStack, Img, Spacer, Text,Link} from "@chakra-ui/react";
import "../css/Home.css"
import GetStartBtn from "../components/GetStartBtn"
import { ArrowForwardIcon } from "@chakra-ui/icons";
import pg11 from "./img/pg11.png"

function ContactUs() {
  return (
    <Box  bg="#ffffff">
      <HStack>
        <Box
          width="50%"
          display="flex"
          justifyContent="center"
          alignContent="center"

        >
          <img marginBottom="30px"
          src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Home Page - 2022 Rebrand/customer-support/support_globe.png"
           width={"75%"}></img>

        </Box>
        <Box
          width="50%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          p="100px"
        >
          <Text as='h2' marginTop="" fontSize="45px">
            <b>Supporting</b> your growth every step of the way
          </Text>
          <Text>Our support superheroes are a click away to help you get the most out of monday.com, so you can focus on working without limits.
          </Text>
          <br />
          <Box justifyContent={'space-between'}>
          <HStack>
            <Box> <img width="40px" src='https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/phone.png'>
          </img>
          <Text as="h2" fontWeight='bold' fontSize='22px'>24/7 </Text> 
          <Text as='p' fontSize=''>Support any time any where</Text> 
      </Box>
                    <Spacer></Spacer>
          <Box> <img width="40px" src='https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/heart.png'>
          </img>
          <Text as="h2" fontWeight='bold' fontSize='22px'>Voted #1</Text> 
          <Text as='p'>Most Loved by customers on G2</Text> 
      </Box>
          
          <Spacer></Spacer>
          
          <Box>
          <img width="40px" src='https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/fast.png'>
          </img>
          <Text as="h2" fontWeight='bold' fontSize='22px'>2 hour </Text>
          <Text as='p'>Average response time</Text>  
    
          </Box>

          
      </HStack>
      <HStack>
      <Flex>
        
        {/* <a href="/Contact"> */}
            {" "}
            <Button
              p="20px"
              rounded="3rem"
              marginTop="50px"
              bg="#6C6CFF"
              color="white"
              fontWeight="md"
              fontSize="20px"
              border="none"
              cursor='pointer'
            >
              Get in touch
              <ArrowForwardIcon />
            </Button>
            
          {/* </a> */}
           </Flex>
          <Flex marginBottom='100px'>
          {/* <a href="/help" > */}
            <Text decoration='underline' color="#6C6CFF" cursor='pointer'>visit our support center
            <ArrowForwardIcon /></Text>
            
          {/* </a> */}
          </Flex>

          </HStack>  
      </Box>    
        </Box>
      </HStack>

      <img src={pg11} ></img>
      <Box color="white" bg="#0f1048" overflow="0" marginTop="-0.5"width="100%" height='300px'>
      {/* <Box className='homes'>
      <Box className='pg1'> */}
        <Center>
          <Text  textAlign="center" fontSize="4xl" w="700px">Deliver your best work with monday.com</Text>
        </Center>
        <br />
        <Center>
          <Text textAlign="center" fontSize="xl" w="540px">No credit card needed   ✦   Unlimited time on Free plan</Text>
        </Center>
    
        <br /> <br />
        <Center>
          <GetStartBtn className="pg1btn"></GetStartBtn>
        </Center>
      


{/*        
    </Box>
        </Box>
         */}
  
  
  </Box>
    </Box>
    
    
  );
}

export default ContactUs;
