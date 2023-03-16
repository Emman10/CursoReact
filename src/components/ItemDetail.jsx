import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, Image, Stack, Heading, Text, CardBody, CardFooter, Button } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({alfajores}) => {

  const {id} = useParams()

  const id_filter = alfajores.filter((alfajor) => alfajor.id == id)

  return (
    <>
      {
        id_filter.map((alfajor) => {
          return (
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
                  <ItemCount stock={alfajor.stock}/>
                </CardFooter>
              </Stack>
            </Card>
          </div>
          )
        })
      }
    </>
  )
}
export default ItemDetail