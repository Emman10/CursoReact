import React from 'react';
import ItemListConteiner from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart'
import ItemDetailConteiner from './components/ItemDetailContainer'

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Welcome/>}/>
          <Route exact path="/catalogue" element={<ItemListConteiner/>}/>
          <Route exact path="/category/:category" element={<ItemListConteiner/>}/>
          <Route exact path="/item/:id" element={<ItemDetailConteiner/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
        </Routes>

        <Footer/>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;