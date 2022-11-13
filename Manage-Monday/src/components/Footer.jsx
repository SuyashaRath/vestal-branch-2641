import {
  Box,
  Heading,
  Flex,
  List,
  ListItem,
  Link,
  Text,
  Image,
  HStack,
  VStack
} from "@chakra-ui/react";
import { BsFacebook,BsReddit,BsLinkedin,BsInstagram,BsTwitter,BsYoutube, } from "react-icons/bs";


const LinkItem = ({ text, isTag = false, tagText })=> {
  return (
    <ListItem display="flex">
      <Link fontWeight="500" color="rgba(113, 128, 150, 1)">
        {text}
      </Link>
      {isTag && (
        <Text
          as="span"
          bg="#008F94"
          px="0.25rem"
          display="inline-flex"
          alignItems="center"
          color="#fff"
          height="1.25rem"
          borderRadius="0.25rem"
          ml="0.25rem"
          mt="0.25rem"
          fontSize="0.75rem"
        >
          {tagText}
        </Text>
      )}
    </ListItem>
  );
};
const Footer = () => {
  return (
    <Box
      as="footer"
      bg="white"
      borderTop="1px solid"
      borderColor="gray.300"
      py="2.5rem"
      fontSize="0.875rem"
      p="10"

    >
      <Box
        maxW="64rem"
        marginX="auto"
        pb="2rem"
        mb="1.5rem"
        px={{ base: "1rem", lg: "0" }}
        borderBottom="1px solid"
        borderColor="gray.300"
      >
        <Flex justify="start" flexWrap="wrap" lg="row">
          <Box w={{ base: "100%", lg: 1 / 6}} mb={{ base: "1.5rem", lg: "0" }}>
            <Heading
              // as="h5"
              // color="gray.700"
              // mb="0.5rem"
              // fontSize="0.875rem"
              // fontWeight="600"
            >
              <Link to="/">
           <Image
              width="120px"
              src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png"
            ></Image>
            </Link>
            </Heading>
            <List lineHeight="2">
              <LinkItem text="Pricing" />
              <LinkItem text="Contact us" />
              <LinkItem text="Templates" />
              <LinkItem text="SMB" />
              <LinkItem text="Enterprise" />
              <LinkItem text="Nonprofits"/>
              <LinkItem text="Apps marketplace"/>
              <LinkItem text="24/7 support"/>
            </List>
          </Box>
          <Box w={{ base: "100%", lg: 1 / 6 }} mb={{ base: "1.5rem", lg: "0" }}>
            <Heading
              as="h5"
              color="gray.700"
              mb="0.5rem"
              fontSize="0.875rem"
              fontWeight="600"
            >
              Features
            </Heading>
            <List lineHeight="2">
              <LinkItem text="Docs" />
              <LinkItem text="Integrations" />
              <LinkItem text="Automobiles" />
              <LinkItem text="Files" />
              <LinkItem text="Dashboards" />
              <LinkItem text="Kanabn" />
              <LinkItem text="Gantt" />

            </List>
          </Box>
          <Box w={{ base: "column", lg: 1 / 6 }} mb={{ base: "1.5rem", lg: "0" }}>
            <Heading
              as="h5"
              color="gray.700"
              mb="0.5rem"
              fontSize="0.875rem"
              fontWeight="600"
            >
              monday products
            </Heading>
            <List lineHeight="2">
              <LinkItem text="monday work management" />
              <LinkItem text="monday sales CRM" />
              <LinkItem text="monday marketer" />
              <LinkItem text="monday projects" />
              <LinkItem text="monday dev" /> <br />
              <Heading 
              as="h5"
              color="gray.700"
              mb="0.5rem"
              fontSize="0.875rem"
              fontWeight="600">
                Manage by monday.com</Heading>
              <LinkItem text="Canvas" />
              <LinkItem text="WorkForms"/>
            </List>
          </Box>
          <Box w={{ base: "100%", lg: 1 / 6 }} mb={{ base: "1.5rem", lg: "0" }}>
            <Heading
              as="h5"
              color="gray.700"
              mb="0.5rem"
              fontSize="0.875rem"
              fontWeight="600"
            >
              Use cases
            </Heading>
            <List lineHeight="2">
              <LinkItem text="Marketing" />
              <LinkItem text="Project management" />
              <LinkItem text="Sales" />
              <LinkItem text="Developers" />
              <LinkItem text="HR" />
              <LinkItem text="IT" />
              <LinkItem text="Operations" />
              <LinkItem text="Construction" />
              <LinkItem text="Education" />

            </List>
          </Box>

           <Box w={{ base: "100%", lg: 1 / 6 }} mb={{ base: "1.5rem", lg: "0" }}>
            <Heading
              as="h5"
              color="gray.700"
              mb="0.5rem"
              fontSize="0.875rem"
              fontWeight="600"
            >
              Company
            </Heading>
            <List lineHeight="2">
              <LinkItem text="About us" />
              <LinkItem text="Careers- We're hiring!" />
              <LinkItem text="monday-U" />
              <LinkItem text="Press" />
              <LinkItem text="Customer stories" />
              <LinkItem text="Become a partner" />
              <LinkItem text="Sustainability & ESG" />
              <LinkItem text="Affiliates" />
              <LinkItem text="Education" />

            </List>
          </Box>
          <Box w={{ base: "100%", lg: 1 / 6 }} mb={{ base: "1.5rem", lg: "0" }}>
            <Heading
              as="h5"
              color="gray.700"
              mb="0.5rem"
              fontSize="0.875rem"
              fontWeight="600"
            >
              Resources
            </Heading>
            <List lineHeight="2">
              <LinkItem text="Help Center" />
              <LinkItem text="Community" />
              <LinkItem text="Blog" />
              <LinkItem text="Webinars" />
              <LinkItem text="Startup for startup" />
              <LinkItem text="Global events" />
              <LinkItem text="App development" />
              <LinkItem text="Find a partner" />
              <LinkItem text="Compare" />

            </List>
          </Box>
         
         
          <Box w={{ base: "100%", lg: 1 / 6 }} mb={{ base: "1.5rem", lg: "0" }} >
           
            
          </Box>
        </Flex>
      </Box>
      <Flex
          maxW="64rem"
          mx="auto"
          alignItems="center"
          px={{ base: "1rem", lg: "0" }}
        >
           <Flex justify="start" mb="0.5rem" alignItems="baseline">
            
              <Link href="https://www.reddit.com/r/mondaydotcom/" mr="0.5rem" fontSize='1.5rem' color="rgb(83, 87, 104)">
              <BsReddit/>
              </Link>
              <Link href="https://www.linkedin.com/company/mondaydotcom" mr="0.5rem" fontSize='1.5rem' color="rgb(83, 87, 104)">
              <BsLinkedin/>
              </Link>
              <Link href="https://www.facebook.com/mondaydotcom/" mr="0.5rem" fontSize='1.5rem' color="rgb(83, 87, 104)">
              <BsFacebook/>
              </Link>
              <Link href="https://www.youtube.com/c/mondaydotcom" mr="0.5rem" fontSize='1.5rem' color="rgb(83, 87, 104)">
              <BsYoutube/>
              </Link>
              <Link href="https://twitter.com/mondaydotcom" mr="0.5rem" fontSize='1.5rem' color="rgb(83, 87, 104)">
              <BsTwitter/>
              </Link>
              <Link href="https://www.instagram.com/mondaydotcom/" mr="0.5rem" fontSize='1.5rem' color="rgb(83, 87, 104)">
                <BsInstagram/>
              </Link>
              
              
                        </Flex>
                        <Box>
              <HStack w={{ base: "100%", lg: 1 / 6 }} mb={{ base: "1.5rem", lg: "0" }}>
                
              <Image src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Badge-Logo.wine.svg"></Image>
              <Image src="https://www.logo.wine/a/logo/App_Store_(iOS)/App_Store_(iOS)-Badge-Logo.wine.svg"></Image>
              </HStack>
              
            </Box>
            </Flex>
           
          <Box>
            <VStack><Text color="gray.600" fontSize="0.875rem" pl="0.5rem">
            All rights Reserved &copy; monday.com
          </Text>
          </VStack>
          </Box>
          <Flex>
                
          <Link href="https://monday.com/accessibility-statement/" mr="0.5rem">
            </Link>
              

          </Flex>
          
        {/* </Flex> */}
    </Box>
  );
};

export default Footer;
