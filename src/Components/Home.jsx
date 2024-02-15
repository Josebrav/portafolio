import React from 'react';
import { Box, Text, Flex, Container, Image, Heading } from "@chakra-ui/react";
import fotocv from '../assets/fotocv.jpg';

const Home = () => {
  return (
    <Container
      marginTop={"100px"}
      display="grid"
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gap={4}
      justifyContent="center"  // Alinea los contenedores en el centro horizontal
    >
      {/* Primer Box */}
      <Box
        bg={"#CFE477"}
        w={{ base: "80%", md: "300px" }} // Hace que el ancho sea más grande en pantallas pequeñas
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        borderRadius={"20px"}
        padding={{ base: "20px", md: "0" }} // Agrega relleno solo en pantallas pequeñas
      >
        <Image
          src={fotocv}
          alt='foto'
          borderRadius={"100%"}
          w={"200px"}
        />
        <Flex flexDirection="column" alignItems="center" mt={4}>
          <Heading>José Bravo</Heading>
          <Text>Full Stack Developer</Text>
        </Flex>
      </Box>

      {/* Segundo Box */}
      <Box
        bg={"gray.300"}
        minW={{ base: "80%", md: "600px" }} // Hace que el ancho sea más grande en pantallas pequeñas
        padding={{ base: "20px", md: "30px" }} // Agrega relleno solo en pantallas pequeñas
borderRadius={"20px"}
maxH={"340px"}
      >
        <Heading display="flex"
        justifyContent="center"
        alignItems="center">¿Quién soy?</Heading>
        <Text>
        ¡Hola! 👋 Soy José Bravo, un apasionado Desarrollador Full Stack con casi un año de experiencia. Mi enfoque se centra en la creación de soluciones tecnológicas eficientes, desde el desarrollo de interfaces dinámicas hasta la implementación de funcionalidades avanzadas. Mi mayor fortaleza radica en mi facilidad para aprender nuevas tecnologías y mi entusiasmo por mantenerme actualizado en el mundo del desarrollo. Con experiencia en integración de pasarela de pagos, autenticación de terceros y metodologías ágiles, estoy listo para contribuir con mi pasión y habilidades a un equipo dinámico que valore la innovación y la calidad. ¡Espero tener la oportunidad de hablar contigo! 📩
        </Text>
      </Box>
      

      <Box w={"500px"}>

      </Box>
    </Container>
  );
};

export default Home;