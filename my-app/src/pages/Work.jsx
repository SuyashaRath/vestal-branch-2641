import { Box, Container, Flex, HStack, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import "../css/work.css"
import One from "./workComponent/one"
import Two from "./workComponent/two"
import Three from "./workComponent/three"
import Four from "./workComponent/four"
import Five from "./workComponent/five"
import Six from "./workComponent/six"
import Seven from "./workComponent/seven"
import Eight from "./workComponent/eight"
import Nine from "./workComponent/nine"
import Ten from "./workComponent/ten"
import Eleven from "./workComponent/eleven"



export default function Work() {


  let [icon, setIcon] = useState([]);
  let [logo, setLogo] = useState(1);

  function handleClick(n) {
    for (let i of icon) i = 0;
    icon[n] = 1;
    setIcon(icon);
    setLogo(n);
    let img = document.querySelectorAll('.sidebarChild>img');

    for (let i = 0; i < img.length; i++) {
      img[i].style.background = ""
    }

    img[n - 1].style.background = "transparent";

  }

  useEffect(()=>{

  })

  const comps = [One, Two, Three, Four, Five, 'Six', 'Seven', "Eight", "Nine", "Ten"];

  return (
    <Box>
      <HStack>

        {/* sidbar */}
        <VStack className='sidebar'>

          <VStack className='sidebarChild'>
            <img onClick={(e) => { handleClick(1) }} src="https://cdn.monday.com/images/logos/monday_logo_icon.png" alt="" />
            <img onClick={(e) => { handleClick(2) }} src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/wm_icon_footer.png" alt="" />
            <img onClick={(e) => { handleClick(3) }} src="https://cdn-icons-png.flaticon.com/512/3239/3239952.png" alt="" />
            <img onClick={(e) => { handleClick(4) }} src="https://cdn-icons-png.flaticon.com/512/711/711155.png" alt="" />
            <img onClick={(e) => { handleClick(5) }} src="https://cdn-icons-png.flaticon.com/512/1063/1063376.png" alt="" />
            <img onClick={(e) => { handleClick(6) }} src="https://cdn-icons-png.flaticon.com/512/3916/3916582.png" alt="" />
            <Box className='spacer'>see plans ✦</Box>
            <img onClick={(e) => { handleClick(7) }} src="https://cdn-icons-png.flaticon.com/512/359/359657.png" alt="" />
            <img onClick={(e) => { handleClick(8) }} src="https://cdn-icons-png.flaticon.com/512/49/49116.png" alt="" />
            <img onClick={(e) => { handleClick(9) }} src="https://cdn-icons-png.flaticon.com/512/2984/2984971.png" alt="" />
            <img onClick={(e) => { handleClick(10) }} src="https://img.icons8.com/ios/512/circled-men.png" alt="" />
            <img onClick={(e) => { handleClick(11) }} src="https://cdn1.monday.com/dapulse_default_photo.png" alt="" />
          </VStack>
        

        </VStack>



        {/* main page */}
        <Container className='mainSpace'>


          {(logo == 1) && <One></One>}
          {(logo == 2) && <Two></Two>}
          {(logo == 3) && <Three></Three>}
          {(logo == 4) && <Four></Four>}
          {(logo == 5) && <Five></Five>}
          {(logo == 6) && <Six></Six>}
          {(logo == 7) && <Seven></Seven>}
          {(logo == 8) && <Eight></Eight>}
          {(logo == 9) && <Nine></Nine>}
          {(logo == 10) && <Ten></Ten>}
          {(logo == 11) && <Eleven></Eleven>}




        </Container>

      </HStack>
    </Box>
  )
}
