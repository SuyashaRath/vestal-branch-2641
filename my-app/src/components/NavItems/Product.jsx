import React from 'react';
import { Box,Flex,SimpleGrid, Text } from '@chakra-ui/react'
const Product = () => {
    return (
        <>
            <Text ml="25px" as="b" color="grey">monday products</Text>
            <Flex ml="25px">
                <SimpleGrid columns={2} width="70%">
                    <Box _hover={{ bg: "#E9D8FD" }} height='100px'>
                        <Flex gap="20px">
                            <img width="35px" src='https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/wm_icon_footer.png'/>
                            <Text fontSize='2xl'>monday work management</Text>
                        </Flex>
                        <Text fontSize='1xl'>For managing any project, task, and workflow</Text>
                        Top use cases:{" "}<Text color="purple.500" as="span">Project & task management Operations  Build your own</Text>
                    </Box>
                    <Box _hover={{ bg:"#FED7E2" }} height='100px'>
                        <Flex gap="20px">
                        <img width="35px" src='https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/marketer_icon_footer.png'/>
                            <Text fontSize='2xl'>monday marketer</Text>
                            </Flex>
                            <Text fontSize='1xl'>For marketing and creative teams</Text>
                        Top use cases:{" "}<Text color="pink.500" as="span">Content calender  Marketing strategy  
                         Creative requests</Text>
                    </Box>
                    <Box _hover={{ bg:"#C4F1F9" }} height='100px'>
                        <Flex gap="20px">
                             <img width="35px" src='https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/crm_icon_footer.png'/>
    
                            <Text fontSize='2xl'>monday sales CRM</Text>   
                        </Flex>
                        <Text fontSize='1xl'>For sales and customer-facing teams</Text>
                        Top use cases:{" "}<Text color="cyan.500" as="span">Contact management  Sales pipeline  
                         Lead management</Text>
 
                    </Box>
                    <Box _hover={{ bg:"#FEEBC8" }} height='100px'>
                        <Flex gap="20px">
                            <img width="35px" src='https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/projects_icon_footer.png'/>
                            <Text fontSize='2xl'>monday projects</Text>
                        </Flex>
                        <Text fontSize='1xl'>For PMO teams and project managers</Text>
                        Top use cases:{" "}<Text color="orange.500" as="span">Advanced projects  Portfolio management  
                         Critical path</Text>
 
                    </Box>
                    <Box _hover={{ bg: "#C6F6D5" }} height='100px'>
                        <Flex gap="20px">
                            <img width="35px" src='https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/monday_dev_product_management_software.png'/>
                            <Text fontSize='2xl'>monday dev</Text>
                        </Flex>
                        <Text fontSize='1xl'>For development and product teams</Text>
                        Top use cases:{" "}<Text color="green.500" as="span">Roadmap Planning  Sales pipeline  
                         Scrum & kanban</Text>
 
                    </Box>
                </SimpleGrid>
                <Flex direction="column" gap="20px">
                    <Text fontSize='1xl'>-More by work form</Text>
                    <Flex alignItems="center" _hover={{ bg: "#FAF5FF" }} height="60px">
                        <img width="25px" src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/workforms_icon_footer.png" alt="" />
                        <Text fontSize='xl'>WorkForms</Text>
                    </Flex>
                    <Flex alignItems="center" _hover={{ bg: "#FAF5FF" }} height="60px">
                        <img width="25px" src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/canvas_icon_footer.png" alt="" />
                        <Text fontSize='xl'>Canvas</Text>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};




export default Product;


