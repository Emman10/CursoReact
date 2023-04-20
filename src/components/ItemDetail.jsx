import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, Image, Stack, Heading, Text, CardBody, CardFooter, Button } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/ShoppingCartPovider'

const ItemDetail = ({alfajor}) => {

  const {addItem} = useContext(CartContext)
    
  //Evento para indicar cantidad y agregar al carrito, se envía como prop a ItemCount.
  const handleClickCart = (quantity) => {
    addItem(alfajor, quantity)
  }

  return (
    <>
      {
        <div key={alfajor.id}>
            <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            className='cardItem_detail'
            backgroundColor='lightblue'
            >
              <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '500px' }}
              src={alfajor.image}
              alt=''
              />
              <Stack>
                <CardBody>
                  <Heading size='md'>{alfajor.title}</Heading>
                  <Text py='2'>{alfajor.description}</Text>
                  <br />
                  <Text as='b'>Categoría:</Text> {alfajor.category}
                  <br />
                  <Text color='blue.600' fontSize='2xl'>${alfajor.price}</Text>
                </CardBody>
                <CardFooter>
                  <ItemCount stock={alfajor.stock}
                    id={alfajor.id}
                    handleClickCart={handleClickCart}
                  />
                </CardFooter>
              </Stack>
            </Card>
          </div>
      }
    </>
    )
  }
export default ItemDetail