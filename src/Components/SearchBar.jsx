import { Box, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function SearchBar() {
  return (
    <Flex
      as="nav"
      bg="gray"
      alignItems="center"
      justify="center"
      h="70px"
      w="100%"
      position="fixed"
      top="0"
      left="0"
      zIndex="999"
      px="4"
      transition="background 0.5s ease, transform 0.3s" // Agregamos la propiedad de transición para el fondo y el efecto de agrandamiento
      bgGradient="linear(to-b, #FFFFFF, #E9FF8B)"
    >
      <Box fontWeight="bold" paddingRight="50px" transition="transform 0.3s" _hover={{ transform: "scale(1.1)" }}>
        <NavLink
          exact
          to="/"
          activeStyle={{
            color: 'white',
            borderBottom: '2px solid #ffffff',
          }}
        >
          Inicio
        </NavLink>
      </Box>

      <Box fontWeight="bold" paddingRight="50px" transition="transform 0.3s" _hover={{ transform: "scale(1.1)" }}>
        <NavLink
          to="/Contacto"
          activeStyle={{
            color: '#ffffff',
            borderBottom: '2px solid #ffffff',
          }}
        >
          Contacto
        </NavLink>
      </Box>
    </Flex>
  );
}