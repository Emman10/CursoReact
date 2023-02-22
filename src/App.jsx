import React from 'react';
import ItemListConteiner from './components/ItemListConteiner';
import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  return (
    <>
      <ChakraProvider>
        <NavBar/>
        <ItemListConteiner greeting={"Bienvenidos a la tienda virtual de Alfajores Jorgito"}/>
      </ChakraProvider>
    </>
  );
};

export default App;