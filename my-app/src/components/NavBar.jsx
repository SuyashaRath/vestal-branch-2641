import React, { useState } from 'react';
import {Text, Flex, Image, } from '@chakra-ui/react';
import GetStartBtn from './GetStartBtn';
import UseCase from "../components/NavItems/UseCase"
import Resources from "../components/NavItems/Resources"
import Features from "../components/NavItems/Features"
import "../css/navbar.css"
import Product from './NavItems/Product';

const NavBar = () => {
    const [drop, setDrop] = useState(null);
    const Arrow = ["˄", "˄", "˄", "˄"];
    const [arrow, setArrow] = useState(Arrow)
    
    function handleClick(n) {
        const arr = [...arrow]
        arr[n] = arr[n] === "˄" ? "˅" : "˄";
        setArrow(arr)
        drop === n+1 ? setDrop(0) : setDrop(n+1)
    }
    return (
        <header>
            <Flex bg="white" justifyContent={"space-between"} h="60px">
                <Flex justifyContent={"space-evenly"} alignItems="center">
                    <Image w="30%" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png" alt=""></Image>
                    <Text onClick={() => handleClick(0)} className='navItem' color="black" fontSize='1xl'>
                        Products 
                        <span className='arrow'>
                            {arrow[0]}
                        </span>
                        <div className='uLine' style={{}}></div>
                    </ Text>
                    <Text onClick={() => handleClick(1)} className='navItem' color="black" fontSize='1xl'>
                        Use cases
                        <span className='arrow'>
                            {arrow[1]}
                        </span>
                        <div className='uLine' style={{}}></div>
                    </ Text>
                    <Text onClick={() => handleClick(2)} className='navItem' color="black" fontSize='1xl'>
                        Features
                        <span className='arrow'>
                            {arrow[2]}
                        </span>
                        <div className='uLine' style={{}}></div>
                    </ Text>
                    <Text onClick={() => handleClick(3)} className='navItem' color="black" fontSize='1xl'>
                        Resource
                        <span className='arrow'>
                            {arrow[3]}
                        </span>
                        <div className='uLine' style={{}}></div>
                    </Text>
                </Flex>
                <Flex gap={"20px"} alignItems="center">
                    <Text className='navItem' color="black" fontSize='1xl'>Pricing</Text >
                    <Text className='navItem' color="black" fontSize='1xl'>Contact sales</Text >
                    <Text className='navItem' color="black" fontSize='1xl'>Log in</Text >
                    <GetStartBtn></GetStartBtn>
                </Flex>
            </Flex>
            {
                drop === 1 && <Product></Product>
            }
            {
                drop === 2 && <UseCase></UseCase>
            }
            {
                drop === 3 && <Features></Features>
            }
            {
                drop === 4 && <Resources></Resources>
            }
        </header>
    );
}





export default NavBar;
