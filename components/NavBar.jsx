import React from 'react'
import CartWidget from './CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='NavBarContainer'>
        <Link to="/">
        <h1 className='brand'>Alfajores Jorgito</h1>
        </Link>
        <Link to="/catalogue">
        <Button color='blue.600'>Catálogo</Button>
        </Link>
        <Menu>
            <MenuButton as={Button} color='blue.600'>Categorías</MenuButton>
            <MenuList>
                <Link to={`/category/${"dulce de leche"}`}>
                <MenuItem >
                    <span>Dulce de Leche</span>
                </MenuItem>
                </Link>
                <Link to={`/category/${"membrillo"}`}>
                <MenuItem >
                    <span>Membrillo</span>
                </MenuItem>
                </Link>
                <Link to={`/category/${"alcayota"}`}>
                <MenuItem >
                    <span>Alcayota</span>  
                </MenuItem>
                </Link>
            </MenuList>
        </Menu>
        <Link to="/cart">
        <CartWidget/>
        </Link>
    </div>
  )
}
export default NavBar;