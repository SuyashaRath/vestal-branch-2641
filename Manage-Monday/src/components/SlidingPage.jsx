import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react';

let arr = [
  "“monday.com work OS saves us about 1850 hrs of staff time and somewhere in the range of $50,000 a month.”",
  "“Now that we have monday.com work OS as the backbone of our organization I feel that I have an overview I can trust.”",
  "“monday.com Work Os has enabled our group to launch more product categories and expand into more markets in way less time.”",
  "“With monday.com, we're 30% more efficient at delivering hundreds of campaigns seen by millions of customers.”",
  "“monday.com has given me the confidence because when I walk into the room I know that when upper management asks for a certain piece of information I’m able to quickly provide it for them.”"
]
let img = [
  "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/oscar_image.png",
  "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/the_student_hotel_image.png",
  "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/telefonica_image.png",
  "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/zippo_image.png",
  "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/nissan_image.png"
]
let id;



export default function SlidingPage() {
  
  let [c, setC] = useState(0);
  if(id) clearInterval(id);

  id=setInterval(()=>{
    if(c==4) setC(0)
    else  setC(c+1);
  },4000)


  return (
    <Box mt="50px">

      <HStack >
        <Text fontSize="4xl" w="45%" m="30px" >See how our customers drive impact</Text>
        <Box>
        <VStack >

          <Box w="65%" bg="#6C6CFF" borderRadius="20px" h="300px" p="20px" pt="70px" fontSize="25px" color="white">
            {arr[c]}
          </Box>
          <Box>
          <HStack >
            {
              arr.map((e, i) => {
                return (<button className='dotBtn'
                onClick={()=>setC(i)}
                 style={{
                    height: "10px",
                    width: "10px",
                    borderRadius: "50%",
                    border: "1px solid black",
                    margin: "5px",
                    color:"white",
                    backgroundColor:"rgba(61, 61, 179, 0.822)"
                  }}
                >
                </button>)
              })
            }
          </HStack>
          </Box>
        </VStack>
        </Box>
        
      <Image
      style={{
        position:"relative",
        top:"150px",
        left:"-250px",
        borderRadius:"10px"
      }}
      alt='' height="150px" src={img[c]} ></Image>
      </HStack>
    </Box>
  )
}
