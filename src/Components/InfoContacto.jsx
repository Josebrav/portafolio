import React from 'react';
import { Box, Text, Container, Image, Button, Input, FormLabel, Heading,Link } from "@chakra-ui/react";
import cv from '../assets/curriculum.png';
import cvJoseBravo from './cvJoseBravo.docx'
import WSP from "../assets/wspicon.png"

const InfoContacto = () => {

    const handleDescargarCV = () => {
        const link = document.createElement('a');
        link.href = cvJoseBravo;
        link.download = 'cvJoseBravo.docx'; // Nombre del archivo que se descargará
        link.click();
    };

    const whatsappLink = "https://wa.me/542996262455"
    return (
        <Container
          marginTop={"150px"}
          display={"grid"}
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={{ base: 4, md: 8 }}
        >
          {/* Primer cuadro */}
          <Box
            
            padding={"5px"}
            
            
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            maxH={"250px"}
            borderRadius={"20px"}
            
        
          >
            <Image src={cv} alt='cv' border={"solid"} borderColor={"gray"}/>
            <Button border={"solid"} borderColor={"gray"} marginTop={"10px"} onClick={handleDescargarCV} bg={"#E9FF8B"}>Descargar CV</Button>
          </Box>
    
          {/* Segundo cuadro */}
          <Box
            
            padding={"5px"}
            bg={"#E9FF8B"}
           
            minW={"400px"}
            maxH={"300px"}
            borderRadius={"25px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}  
            position={"relative"}
            
          >
            <Heading  bg={"white"} borderRadius={"25px"} fontSize={"30px"} p={2}>Correo Electrónico</Heading>
            <Text fontSize={"15px"} padding={"10px"}>josebravoparada@gmail.com</Text>

            <Heading bg={"white"} borderRadius={"25px"} fontSize={"30px"} p={2}>WhatsApp</Heading>
            <Button  color={'white'} fontWeight={'bold'} mt={'0.5rem'} variant={'link'} mb={"10px"}>
                  <Link href={whatsappLink} isExternal>
                    <Box
                      w="30px"
                      h="30px"
                    >
                      <Image src={WSP} alt="WhatsApp" w="100%" h="100%" />
                    </Box>
                  </Link>
                </Button>

            <Heading bg={"white"} borderRadius={"25px"} fontSize={"30px"} p={2}>LinkedIn</Heading>
            <Text padding={"10px"} bg={""}>https://www.linkedin.com/in/josesantosbravo/</Text>
          </Box>
        </Container>
      );
    };

export default InfoContacto;