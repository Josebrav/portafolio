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
      transition="background 0.5s ease"
      bgGradient="linear(to-b, #F4FFC5, #A5C136)"
    >
      <Box fontWeight="bold" paddingRight="50px">
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

      <Box fontWeight="bold" paddingRight="50px">
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