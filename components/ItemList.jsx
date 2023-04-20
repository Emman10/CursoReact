import React from 'react'
import Item from './Item';

const ItemList = ({alfajores}) => {
  return (
    <div className="cardsContainer">
      {
        alfajores.map((alfajor) => {
          return (
            <Item
            key={alfajor.id}
            id={alfajor.id}
            title={alfajor.title}
            category={alfajor.category}
            img={alfajor.image}
            price={alfajor.price}
            />
          )
        })
      }
    </div>
  )
}
export default ItemList