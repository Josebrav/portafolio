import React from 'react';
import { Box, Text, Container, Image, Button, Input, FormLabel, Heading } from "@chakra-ui/react";
import cv from '../assets/curriculum.png';
import cvJoseBravo from './cvJoseBravo.docx'

const InfoContacto = () => {

    const handleDescargarCV = () => {
        const link = document.createElement('a');
        link.href = cvJoseBravo;
        link.download = 'cvJoseBravo.docx'; // Nombre del archivo que se descargará
        link.click();
    };
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
            <Image src={cv} alt='cv' />
            <Button marginTop={"10px"} onClick={handleDescargarCV}>Descargar CV</Button>
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
            <Heading  bg={"white"} borderRadius={"25px"}>Correo Electrónico</Heading>
            <Text fontSize={"15px"} padding={"10px"}>josebravoparada@gmail.com</Text>

            <Heading bg={"white"} borderRadius={"25px"}>WhatsApp</Heading>
            <Text padding={"10px"} bg={""}>+54 299 6262455</Text>

            <Heading bg={"white"} borderRadius={"25px"}>LinkedIn</Heading>
            <Text padding={"10px"} bg={""}>https://www.linkedin.com/in/josesantosbravo/</Text>
          </Box>
        </Container>
      );
    };

export default InfoContacto;