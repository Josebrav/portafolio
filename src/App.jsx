import { Container, Stack } from "@chakra-ui/react"
import Home from "./Components/Home"
import {Route,Routes} from 'react-router-dom'
import NavBar from "./Components/Nav"
import image from './assets/fondo5.jpg' 

import InfoContacto from './Components/InfoContacto'

function App() {
   

  return (
    <>
     <Container
  bgImage={image}
  bgSize="cover"
  bgAttachment={"fixed"}
  display={"flex"}
  minHeight="100vh"
  minWidth="100vw"
  maxW={"100%"}
  backgroundPosition="center"
  backgroundRepeat="no-repeat"
>
        <NavBar/>
      <Routes>
      <Route path='/' element={<Home />} />
      
      <Route path='/Contacto' element={<InfoContacto />} />
      </Routes>
      </Container>
      
    </>
  )
}

export default App
