import React from 'react'
import { Spinner, Text } from '@chakra-ui/react'

const Loader = () => {
  return (
    <div className='loaderComponent'>
        <Text fontSize='2xl'>Cargando</Text>
        <Spinner size='xl'/>
    </div>
  )
}

export default Loader