import React from 'react';
import {Box, Heading, Image, Container, Stack, Text} from "@chakra-ui/react"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../Assets/1.jpg"
import img2 from "../Assets/2.jpg"
import img3 from "../Assets/3.jpg"
import img4 from "../Assets/4.jpg"
import img5 from "../Assets/5.png"


const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
  };

const Home = () => {
    return (
    <Box>
    <MyCarousel/>

    <Container maxW={"container.xl"} minH={"100vh"} p ="16">

    <Heading textTransform={'uppercase'} py="2" w = {"fit-content"} borderBottom="2px" m="auto">Services</Heading>

    <Stack
    h = {"full"}
    p={"4"}
    alignItems={"center"}
    direction={['column','row']} 
    >
    <Image src={img5} filter={"hue-rotate(-130deg)"} h={["40","400"]}/>
    <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
    Collaboratively administrate empowered markets via plug-and-play networks.

    Dynamically procrastinate B2C users after 
    installed base benefits. Dramatically visualize
    customer directed convergence without revolutionary ROI.

    </Text>
    </Stack>

    </Container>
    </Box>
    )
};

const MyCarousel = ()=>(

    <Carousel autoPlay infiniteLoop interval={10000} showStatus={false} showThumbs={false} showArrows={false}>
    <Box w = "full" h = {"100vh"}>

        <Image src={img1}/>
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
            Watch The Future
        </Heading>
    </Box>
    <Box w = "full" h = {"100vh"}>

        <Image src={img2}/>
        <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
            Future Is Gaming
        </Heading>
    </Box>

    <Box w = "full" h = {"100vh"}>

        <Image src={img3}/>
        <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
            Gaming on Console
        </Heading>
    </Box>

    <Box w = "full" h = {"100vh"}>

        <Image src={img4}/>
        <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
            Enjoy The Stars
        </Heading>
    </Box>

    </Carousel>
)

export default Home;
