import { Box} from '@chakra-ui/react'
import React from 'react'
import "../css/Home.css"
import EndToEndProduct from './endToProduct';
import FirstPart from "./FirstPage";
import Workflow from './workflow';
import Contact from './contact'
import Footer from '../components/Footer';


function Homepage1(){
    return (
        <Box>
           <FirstPart></FirstPart>
           <Workflow></Workflow> 
           <EndToEndProduct></EndToEndProduct>
           <Contact></Contact>
           <Footer></Footer>
        </Box>
    )
}

export default Homepage1