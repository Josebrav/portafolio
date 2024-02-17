import React, { useState } from 'react';
import Swal from 'sweetalert2'
import {
  Box, Text, Flex, Container, Image, Heading, Stack,
  Button, Alert, AlertIcon, AlertTitle, AlertDescription
} from "@chakra-ui/react";
import fotocv from '../assets/fotocv.jpg';
import uno from '../Iconos/1.png'
import dos from '../Iconos/2.png'
import tres from '../Iconos/3.png'
import cuatro from '../Iconos/4.png'
import cinco from '../Iconos/5.png'
import seis from '../Iconos/6.png'
import siete from '../Iconos/7.png'
import ocho from '../Iconos/8.png'
import nueve from '../Iconos/9.png'
import diez from '../Iconos/10.png'
import once from '../Iconos/11.png'
import doce from '../Iconos/12.webp'
import trece from '../Iconos/13.png'
import Drivers from '../assets/Drivers.png'
import Vamos from '../assets/vamos.png'
import Rick from '../assets/Rick&Morty.png'
import './home.css'


const Home = () => {



  const abrirRick = () => {

    Swal.fire({
      title: "Rick&Morty",

      html: `
      Rick&Morty fue el primer proyecto que hice en mi trayecto como programador, 
      tiene panel de inicio de sesion, luego se puede interactuar con cartas, agregar, borrar, marcar 
      como favoritas. Utilice React, Redux, Node.js, Express, Api, Sequelize.`,
      confirmButtonText: `
      <i class="fa fa-thumbs-up"></i> OK!
    `,
    confirmButtonAriaLabel: "Thumbs up, great!",

    })
  };

  const abrirVamos = () => {

    Swal.fire({
      title: "Vamos!!",

      html: `
      Proyecto para una ONG de Perú dedicada a prestar servicio de traslado aeropuerto diferentes zonas de la ciudad. Para Front-End se utilizó principalmente React y para Back-End Node.js., express, Sequelize.
      Adicionalmente se integró Mercado Pago, Nodemailer, Firebase, Chakra , Local Storage y Cloudinary`,
      confirmButtonText: `
      <i class="fa fa-thumbs-up"></i> OK!
    `,
    confirmButtonAriaLabel: "Thumbs up, great!",

    })
  };

  const abrirDrivers = () => {

    Swal.fire({
      title: "Drivers",

      html: `
Este proyecto individual fue desarrollado durante mi período de estudios en Henry, 
donde implementé tecnologías como React, Chakra Express, Node.js, Sequelize y Redux.
 Incluye diversas funciones, tales como la creación de conductores, la capacidad de ordenar 
 según diferentes filtros y la implementación de filtros combinados.`,
      confirmButtonText: `
      <i class="fa fa-thumbs-up"></i> OK!
    `,
    confirmButtonAriaLabel: "Thumbs up, great!",

    })
  };


  return (
    <Flex
      display={"flex"}
      flexDirection="column"

    >
      <Container
        marginTop={"100px"}
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={4}
        justifyContent="center"  // Alinea los contenedores en el centro horizontal
        padding={"30px"}
      >
        {/* Primer Box */}
        <Box
          bg={"#E9FF8B"}
          w={{ base: "80%", md: "300px" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          borderRadius={"20px"}
          padding={{ base: "20px", md: "0" }}
          transition="transform 0.3s" // Agregamos una transición para suavizar el efecto
          _hover={{ transform: "scale(1.05)" }} // Aplicamos el efecto de agrandamiento al pasar el mouse
        >
          <Image
            src={fotocv}
            alt='foto'
            borderRadius={"100%"}
            w={"200px"}
            padding={"10px"}
          />
          <Flex flexDirection="column" alignItems="center" mt={4}>
            <Heading>José Bravo</Heading>
            <Text>Full Stack Developer</Text>
          </Flex>
        </Box>

        {/* Segundo Box */}
        <Box
          bg={"#E9FF8B"}
          minW={{ base: "80%", md: "600px" }}
          padding={{ base: "20px", md: "30px" }}
          borderRadius={"20px"}
          maxH={"350px"}
          transition="transform 0.3s"
          _hover={{ transform: "scale(1.05)" }}
        >
          <Heading display="flex"
            justifyContent="center"
            alignItems="center"
            mb={"20px"}>¿Quién soy?</Heading>
          <Text fontFamily={"monospace"} fontSize={"15px"}>
            ¡Hola! 👋 Soy un apasionado Desarrollador Full Stack con casi
            un año de experiencia. Mi enfoque se centra en la creación de soluciones tecnológicas
            eficientes, desde el desarrollo de interfaces dinámicas hasta la implementación
            de funcionalidades avanzadas. Tengo experiencia en integración de pasarela de pagos, autenticación de terceros y
            metodologías ágiles, estoy listo para contribuir con mi pasión y habilidades a un
            equipo dinámico que valore la innovación y la calidad. ¡Espero tener la oportunidad
            de hablar contigo! 📩
          </Text>
        </Box>
      </Container>
      <Container gap={4} w={"1300px"} display="flex"
      >
        <Box
          borderRadius={"20px"}
          w={"1200px"}
          bg={"#E9FF8B"}
          p={"20px"}
          transition="transform 0.3s" // Agregamos una transición para suavizar el efecto
          _hover={{ transform: "scale(1.05)" }} // Aplicamos el efecto de agrandamiento al pasar el mouse
        >
          <Heading
            display="flex"
            justifyContent="center"
            alignItems="center"
          >Skills</Heading>
          <Flex flexWrap="wrap" justifyContent="center" padding={"10px"}>
            {/* Primera fila de iconos */}
            <Image src={uno} boxSize="60px" m={1} />
            <Image src={dos} boxSize="60px" m={1} />
            <Image src={tres} boxSize="60px" m={1} />
            <Image src={cuatro} boxSize="60px" m={1} />
            <Image src={cinco} boxSize="60px" m={1} />
            <Image src={seis} boxSize="60px" m={1} />
          </Flex>
          <Flex flexWrap="wrap" justifyContent="center">
            {/* Segunda fila de iconos */}
            <Image src={siete} boxSize="60px" m={1} />
            <Image src={ocho} boxSize="60px" m={1} />
            <Image src={nueve} boxSize="60px" m={1} />
            <Image src={diez} boxSize="60px" m={1} />
            <Image src={once} boxSize="60px" m={1} />
            <Image src={doce} boxSize="60px" m={1} />

          </Flex>
        </Box>
      </Container>

      <Stack spacing={4} align="center" display={"flex"} marginTop={"30px"} >
        <Heading display="flex"
          justifyContent="flex-start"
          alignItems="center">Proyectos</Heading>
        <Box
          bg={"#E9FF8B"}
          borderRadius={"20px"}

          maxW={{ base: "70%", md: "70%", lg: "90%", xl: "90%" }}
          h={{ base: "200px", md: "250px", lg: "340px" }}
          ml={{ base: 0, md: "0" }}
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
          alignItems={"center"}
          justifyContent={"center"}

          transition="transform 0.3s" // Agregamos una transición para suavizar el efecto
          _hover={{ transform: "scale(1.05)" }}
        >

          <Box w={"300px"} minH={"200px"} m={"40px"} p={0} >
            <Heading display="flex"
              justifyContent="center"
              alignItems="center">Drivers</Heading>
            <a href="https://github.com/Josebrav/Drivers" target="_blank" rel="noopener noreferrer">
              <Image
                w={"300px"}
                h="200px"
                src={Drivers}

                alt="Descripción de la imagen"
                p={0}
              />
            </a>
            <Button mt={"10px"} ml={"90px"} onClick={abrirDrivers}>Detalles</Button>
          </Box>

          <Box w={"300px"} minH={"280px"} m={"40px"}>
            <Heading display="flex"
              justifyContent="center"
              alignItems="center">Vamos</Heading>
            <a href="https://vamos-app.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Image
                w={"300px"}
                h="200px"
                src={Vamos}
              />
            </a>
            <Button mt={"10px"} ml={"90px"} onClick={abrirVamos}>Detalles</Button>
          </Box>

          <Box w={"300px"} minH={"200px"} m={"40px"} p={0}>
            <Heading display="flex" justifyContent="center" alignItems="center">Rick&Morty</Heading>
            <a href="https://github.com/pi-rym/PI-Josebrav" target="_blank" rel="noopener noreferrer">
              <Image
                w={"300px"}
                h="200px"
                src={Rick}
                alt="Descripción de la imagen"
                p={0}
              />
            </a>
            <Button mt={"10px"} ml={"90px"} onClick={abrirRick}>
              Detalles
            </Button>

          </Box>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Home;