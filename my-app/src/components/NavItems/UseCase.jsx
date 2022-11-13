import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

function Resources() {
  return (
    <div style={{margin:"30px"}}>
      <h3>-By workflow</h3>
      <Flex mt="30px" height="200px">
        <SimpleGrid columns={4} spacing={2}>
          <Box  _hover={{ cursor: "pointer",bg:"rgb(24, 4, 82,0.1)" }} height='80px'>
            <Text fontSize={"1xl"}>
              <img width={"30px"} src="https://icons.veryicon.com/png/o/miscellaneous/20-classification-function-icon/6_2-project-management-1.png"/>
              project management
            </Text>
            <Text fontSize={"1xl"}>
          Plan, track and manage any project form start to finish
            </Text>
          </Box>
          <Box  _hover={{ cursor: "pointer",bg:"rgb(24, 4, 82,0.1)" }} height='80px'>
            <Text fontSize={"1xl"}>
              <img width={"30pc"} src=
            "https://icdleurope.org/app/uploads/2020/10/Remote-Work-Icon.png"/>
            Remote work

            </Text>
            <Text fontSize={"1xl"}>
            Stay productive nd collaborative, whereever you are
            </Text>
          </Box>
          <Box  _hover={{ cursor: "pointer",bg:"rgb(24, 4, 82,0.1)" }} height='80px'>
            <Text fontSize={"1xl"}>
              <img width={"30px"} src="https://toppng.com/uploads/preview/301-x-251-png-3kb-inventory-control-icon-images-inventory-icon-png-blue-11562937718rimgqyzary.png"/>
              Ineventory tracking
            </Text>
            <Text fontSize={"1xl"}>
            Monitor your stock from point of collection to final delivery    </Text>
          </Box>
          <Box  _hover={{ cursor: "pointer",bg:"rgb(24, 4, 82,0.1)" }} height='80px'>
            <Text fontSize={"1xl"}>
              <img width={"30px"}
            src="https://toppng.com/uploads/preview/lus-icon-blue-plus-icon-11563730393c5etlxssn5.png"/>
          200+ workflows
            </Text>
            <Text fontSize={"1xl"}>
              Discover proven industry workflows to hit the ground running
            </Text>
          </Box>
         
        </SimpleGrid>
       </Flex>
       
    </div>
    
  )
}

export default Resources