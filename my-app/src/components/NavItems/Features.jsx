import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

function Resources() {
  return (
    <div style={{margin:"30px"}}>
      <h3>Key features-</h3>
      <Flex mt="30px" height="300px">
        <SimpleGrid columns={4} spacing={2}>
          <Box  _hover={{ cursor: "pointer",bg:"rgb(24, 4, 82,0.1)" }} height='80px'>
            <Text fontSize={"1xl"}>
              <img width={"30px"} src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:6C6CFF/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/dashboard_icon.svg"/>
              Dashboards
            </Text>
            <Text fontSize={"1xl"}>
          Simplyfy decision making with real-time insights
            </Text>
          </Box>
          <Box  _hover={{ cursor: "pointer",bg:"rgb(24, 4, 82,0.1)" }} height='80px'>
            <Text fontSize={"1xl"}>
              <img width={"30pc"} src=
            "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:6C6CFF/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/automations_icon.svg"/>
            Automations

            </Text>
            <Text fontSize={"1xl"}>
            Save time nd leave repetitive work behind
            </Text>
          </Box>
          <Box  _hover={{ cursor: "pointer",bg:"rgb(24, 4, 82,0.1)" }} height='80px'>
            <Text fontSize={"1xl"}>
              <img width={"30px"} src="https://kanbanzone.com/wp-content/uploads/2018/05/Trello-logo-icon-blue-200x200.png"/>
              Kanban
            </Text>
            <Text fontSize={"1xl"}>
            Prioritize tasks and balance demands according to capacity     </Text>
          </Box>
          <Box  _hover={{ cursor: "pointer",bg:"rgb(24, 4, 82,0.1)" }} height='80px'>
            <Text fontSize={"1xl"}>
              <img width={"30px"}
            src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:6C6CFF/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/docs_icon.svg"/>
          Files
            </Text>
            <Text fontSize={"1xl"}>
              Add context to your tasks by uploading any file type
            </Text>
          </Box>
          <Box  _hover={{ cursor: "pointer",bg:"rgb(24, 4, 82,0.1)" }} height='80px'>
            <Text fontSize={"1xl"}>
            <img width={"30pc"} src=
            "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:6C6CFF/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/integrations_icon.svg"/>
              Integrations
            </Text>
            <Text fontSize={"0.5xl"}>
            Keep your business tools all in one place
            </Text>
          </Box>
          <Box  _hover={{ cursor: "pointer",bg:"rgb(24, 4, 82,0.1)" }} height='80px'>
            <Text fontSize={"1xl"}>
              <img width={"30px"} src="https://uploads-ssl.webflow.com/5a723458b5e4b70001aa226c/5cfc6f3a71000a135b506beb_Webclip%20Instagantt.png"/>
              Gantt
            </Text>
            <Text fontSize={"0.5xl"}>
            Visualize project milestones and dependencies
            </Text>
          </Box>
          <Box  _hover={{ cursor: "pointer",bg:"rgb(24, 4, 82,0.1)" }} height='80px'>
            <Text fontSize={"1xl"}>
            <img width={"30pc"} src=
            "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:6C6CFF/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/integrations_icon.svg"/>
          
              Docs
            </Text>
            <Text fontSize={"0.5xl"}>
            Turn words into workflows and collaborate in real-time        </Text>
          </Box>
          <Box  _hover={{ cursor: "pointer",bg:"rgb(24, 4, 82,0.1)" }} height='80px'>
            <Text fontSize={"1xl"}>
              <img width={"30px"}
              src="https://e7.pngegg.com/pngimages/865/224/png-clipart-computer-icons-google-docs-google-blue-angle.png"/>
            Forms
            </Text>
            <Text fontSize={"0.5xl"}>
            Collect manage work requests in one place
            </Text>
          </Box>
         
        </SimpleGrid>
       </Flex>
    </div>
  )
}

export default Resources