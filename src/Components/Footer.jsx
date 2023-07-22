import { Box, Heading, VStack, Stack, HStack,Button, Input,Text  } from '@chakra-ui/react';

import {AiOutlineSend, AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import React from 'react';


const Footer = () => {
    return (
        <Box bg={"blackAlpha.900"} minH={"40"} p = {"16"} color={"white"}>

            <Stack direction={["column","row"]}>
                <VStack alignItems={"stretch"} w="full" px={"4"}>
                    <Heading Size="md" textAlign={["center","left"]}> Subscribe For News</Heading>

                    <HStack
                    borderBottom={"2px"}
                    py={'2'}
                    >
                        <Input placeholder='Enter Your Email Here...' 
                        border={"None"} 
                        borderRadius={"none"}
                        outline={"none"}
                        focusBorderColor='none'
                        />
                        <Button 
                        p={"0"}
                        color={"purple"}
                        variant={"ghost"}
                        borderRadius={"20px 20px 20px 20px"}
                        > 
                            <AiOutlineSend size={"20"}/>
                        </Button>
                    </HStack>
                </VStack>

                <VStack borderLeft={["none", "1px solid white"]}
                borderRight={["none", "1px solid white"]}
                
                w= "full"
                >
                    <Heading Size="md"> Video Hub</Heading>   
                    <Text>All rights reserved</Text>

                </VStack>
                <VStack 
                w= "full"
            
                >
                    <Heading size="md" textTransform={"uppercase"}>Social Media</Heading>
                    <Button variant={"ghost"} colorScheme={'purple'}> 
                    <a target={" blank"} href='https://www.youtube.com/'> Youtube</a>
                    </Button>
                    <Button variant={"ghost"} colorScheme={'purple'}> 
                    <a target={" blank"} href='https://www.github.com'> Github</a>
                    </Button>
                    <Button variant={"ghost"} colorScheme={'purple'}> 
                    <a target={" blank"} href='https://www.linkedin.com'> LinkedIn</a>
                    </Button>

                </VStack>

            </Stack>
            
    </Box>


    );
};

export default Footer;