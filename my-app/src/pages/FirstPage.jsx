import { Box, Image, Center,Flex, Text, HStack, VStack ,Img,Checkbox,Spacer,Heading,Link} from '@chakra-ui/react'
import React from 'react'
import "../css/Home.css"
import GetStartBtn from "../components/GetStartBtn"
import pg5 from "./img/pg5.png"
import ReactPlayer from "react-player";

const OsBox = [
  {
    img: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/design_icon.png",
    text: "Creative & design",
    
  },
  {
    img: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/dev_icon.png",
    text: "Software development",
    borderColor:"black",
  },
  {
    img: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/marketing_icon.png",
    text: "Marketing",
  },
  {
    img: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/pmo_icon.png",
    text: "Project management",
  },
  {
    img: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/crm_icon.png",
    text: "Sales & CRM",
  },
  {
    img: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/task_icon.png",
    text: "Task Management",
  },
  ,
  {
    img: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/hr_icon.png",
    text: "HR",
  },
  {
    img: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/operations_icon.png",
    text: "Operations",
  },
  {
    img: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/workflows_icon.png",
    text: "More workflow",
  },
];
const customLogo = [
  `https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hulu.png`,
  `https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/bd.png`,
  `https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/canva.png`,
  `https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nhl.png`,
  `https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/coca_cola.png`,
  `https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hubspot.png`,
  `https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/Electronic_Arts.png`,
  `https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nautica.png`,
  `https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/universal.png`,
];

export default function FirstPart() {
  return (
    
      <Box className='homes'>
      <Box className='pg1'>
        <Center>
          <Text fontSize="7xl" w="700px">A platform built for a new way of working</Text>
        </Center>
        <Center>
          <Text fontSize="xl" w="550px">what would you like to manage with monday.com Work OS</Text>
        </Center>


        <HStack justifyContent="center" marginTop="50px" marginBottom="20px">
        {OsBox.map((el) => {
          return (
            <Box
              p="5px"
              width="120px"
              height="140px"
              border="1px"
              rounded="md"
              // borderColor="grey"
            >
              <VStack>
                <Checkbox colorScheme="cyan"></Checkbox>
                <Img width="50px" src={el.img}></Img>
                <Text>{el.text}</Text>
              </VStack>
            </Box>
          );
        })}
      </HStack>
      <Spacer></Spacer>
        <Center>
          <GetStartBtn className="pg1btn"></GetStartBtn>
        </Center>
        <Center>
          
      <Text fontSize="xm"marginTop={"20px"}fontFamily="sofia-pro,Roboto,Helvetica,Arial,sans-serif" >
        No credit card needed ✦ Unlimited time on Free plan
      </Text></Center>
      </Box>
      
      <Box className='pg2img'> </Box>
      <Center>
          <Text fontSize="2xl" fontFamily="sofia-pro,Roboto,Helvetica,Arial,sans-serif">Trusted by 152,000+ customers worldwide</Text>
        </Center>

        <HStack gap="0px" justifyContent="center" margin="auto" wrap="wrap"  width="80%" marginTop="40px">
     {customLogo .map((el)=>{
         return <Img width="100px" src={el}></Img>
     })}
   </HStack>  
     <Box className='pg4'>
        <Flex mr="30px">
          <Text fontSize="4xl">The Work OS that lets you
            shape workflows, your way
          </Text>
          <Text fontSize="2xl">
            Boost your team’s alignment, efficiency, and productivity by customizing any workflow to fit your needs.
          </Text>
        </Flex>
        <Center>
          <GetStartBtn></GetStartBtn>
        </Center>
      </Box>
      <Box className='pg5img'>
        <Img src={pg5}></Img> </Box>
        
        <HStack height="500px" color="white" bg="#0f1048" overflow="auto" marginTop="-0.5"width="100vw">
  
  
          <Box width="50%">
            <Box margin="auto" marginTop="1200px" width="70%">
              <Heading>Streamline your work for maximum productivity</Heading>
  
              <Text fontSize="18px" marginTop="30px">
                Centralize all you r work, processes, tools, and files into one
                Work OS. Connect teams, bridge silos, and maintain one source of
                truth across your organization.
              </Text>
            </Box>
  
            <Box margin="auto" marginTop="100px" width="70%">
              <HStack>
                <Img
                  width="50px"
                  src="https://dapulse-res.cloudinary.com/image/upload/r_400/f_auto,q_auto/remote_mondaycom_static/uploads/BarBen/jane.jpeg"
                ></Img>
                <Text>
                  “ We use monday.com for a plethora of use cases, the
                  opportunities this platform provides are limitless.” Jane Than |
                  VP of Collaboration Technologies Universal Music Group
                </Text>
              </HStack>
            </Box>
  
            <Box margin="auto" marginTop="200px" width="65%">
              <Heading>Bring teams together to drive business impact</Heading>
  
              <Text fontSize="18px" marginTop="30px">
                Collaborate effectively organization-wide to get a clear picture
                of all your work. Stay in the loop with easy-to-use automations
                and real-time notifications.
              </Text>
            </Box>
  
            <Box margin="auto" marginTop="100px" width="70%">
              <HStack>
                <Img
                  width="80px"
                  src="https://dapulse-res.cloudinary.com/image/upload/r_400/f_auto,q_auto/remote_mondaycom_static/uploads/BarBen/sarah.jpeg"
                ></Img>
                <Text>
                  “ Since adopting monday.com, our global marketing department has
                  seen a 40% improvement in cross-team collaboration.” Sarah Pharr
                  |<br></br>
                  AVP Marketing Genpact
                </Text>
              </HStack>
            </Box>
  
             
            <Box margin="auto" marginTop="200px" width="65%">
              <Heading>Stay on track to reach your goals, faster</Heading>
  
              <Text fontSize="18px" marginTop="30px">
              Get a high-level overview of your organization with customizable dashboards. Make confident decisions and easily scale workflows for your evolving needs.
              </Text>
              
              <br />
  
              <Link to="/" >
              {" "}
            <GetStartBtn></GetStartBtn>
            </Link>
  
            </Box>
  
            <Box margin="auto" marginTop="100px" width="70%">
              <HStack>
                <Img
                  width="80px"
                  src="https://dapulse-res.cloudinary.com/image/upload/r_400/f_auto,q_auto/remote_mondaycom_static/uploads/BarBen/baptiste.jpeg"
                ></Img>
                <Text>
                “monday.com allows banks to be synchronized between the top-level management figures and local KPIs.”
                <br></br>
                <span fontWeight="bold"> Baptiste Ancey Head of Innovation Indosuez Wealth Management </span>
                </Text>
              </HStack>
            </Box>
  
  
          </Box>{" "}
          <Box>
            <Box  position="absolute" top="2800px" right="50px">
              <ReactPlayer
              playing
                loop
                muted
                url="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/goals_dashboard.mp4"
              />
            </Box>
          </Box>
          //not
        </HStack>
        <Img width="100%" src="https://i.ibb.co/sQH7FvN/homepage05.png"></Img>
      </Box> 
    //   </Box>
  )
}

