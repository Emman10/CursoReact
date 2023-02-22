import React from 'react';
import CartWidget from './CartWidget';
import { Tabs, TabList, Tab, Heading} from '@chakra-ui/react';

const NavBar = () => {
  return (
    <div>
        <Heading>Alfajores Jorgito</Heading>
        <Tabs>
            <TabList>
                <Tab>Dulce de Leche</Tab>
                <Tab>Membrillo</Tab>
                <Tab>Alcayota</Tab>
            </TabList>
        </Tabs>
        <CartWidget/>
    </div>
  );
};

export default NavBar;