import { Container, Flex } from "@chakra-ui/react";
import Home from "./Components/Home";
import { Route, Routes } from 'react-router-dom';
import NavBar from "./Components/Nav";
import image from './assets/fonblan.jpg';
import InfoContacto from './Components/InfoContacto';

function App() {
  return (
    <Flex
      p={0}  // Eliminamos el relleno del Container
      m={0}  // Eliminamos el margen del Container
      bgImage={image}
      bgSize="cover"
      bgAttachment="fixed"
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      minWidth="100vw"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contacto' element={<InfoContacto />} />
      </Routes>
    </Flex>
  );
}

export default App;
