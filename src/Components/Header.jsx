import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerHeader, 
    DrawerOverlay, 
    DrawerContent, 
    DrawerCloseButton, 
    Button,
    useDisclosure,
    VStack,
    HStack} 
    from "@chakra-ui/react";

import {Link} from "react-router-dom";

import {BiMenuAltLeft} from "react-icons/bi"

const Header = () => {
    const {isOpen,onOpen,onClose} = useDisclosure()
    return <>

    <Button
    pos = {"fixed"}
    top={"4"}
    left={"4"}
    colorScheme='purple'
    p={"0"}
    w={"10"}
    h = {"10"}
    zIndex={"overlay"}
    borderRadius={"full"}
    onClick={onOpen}>
    <BiMenuAltLeft size = {"20"}/>

    </Button>
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>

    <DrawerOverlay/>
    <DrawerContent>
        <DrawerCloseButton/>
        <DrawerHeader fontFamily={"sans-serif"}>Video Hub</DrawerHeader>
        <DrawerBody>

            <VStack alignItems={"flex-start"}>

                <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                    <Link to ="./">Home</Link>
                </Button>
                <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                    <Link to ={"./videos"}>Videos</Link>
                </Button>
                <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                    <Link to ={"./videos?catagory=free"}>Free Videos</Link>
                </Button>
                <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                    <Link to ={"./upload"}>Upload</Link>
                </Button>
            </VStack>
            <HStack position={"absolute"} bottom={"10"} w={"full"} justifyContent={"space-evenly"} left={"0"}>

                <Button onClick={onClose} colorScheme={"purple"}>
                    <Link to ={"/login"}>Log In</Link>
                </Button>

                <Button onClick={onClose}  colorScheme={"purple"} variant = {"outline"}>
                    <Link to ={"/signup"}>Sign Up</Link>
                </Button>
            </HStack>


        </DrawerBody>
    </DrawerContent>


    </Drawer>    
    
    
    
    </> 
};

export default Header;