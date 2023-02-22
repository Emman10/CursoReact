import React from 'react';
import {Tag} from '@chakra-ui/react';

const ItemListConteiner = ({greeting}) => {
  return (
    <Tag>{greeting}</Tag>
  );
};

export default ItemListConteiner;