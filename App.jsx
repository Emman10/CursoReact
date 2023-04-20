import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import ItemDetailConteiner from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Footer from './components/Footer';
import ShoppingCartPovider from './context/ShoppingCartPovider'

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <ShoppingCartPovider>
          <NavBar/>
            <Routes>
              <Route exact path="/" element={<Welcome/>}/>
              <Route exact path="/catalogue" element={<ItemListConteiner/>}/>
              <Route exact path="/category/:category" element={<ItemListConteiner/>}/>
              <Route exact path="/item/:id" element={<ItemDetailConteiner/>}/>
              <Route exact path="/cart" element={<Cart/>}/>
            </Routes>
          <Footer/>
        </ShoppingCartPovider>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;