import React from 'react'
import { Text, Box, Button, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="welcome">
<Box maxW='32rem'>
  <Heading mb={4}>Bienvenidos a Alfajores Jorgito</Heading>
  <Link to="/catalogue">
  <Button size='lg' colorScheme='yellow' mt='24px'>Comenzar</Button>
  </Link>
</Box>
    </div> 
  )
}

export default Welcome