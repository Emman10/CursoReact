import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Data from "../../data.json"
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [books, setAlfa] = useState([])
  const {category} = useParams()

  const getData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Data)
      }, 1000)
    })
  }

  useEffect(() => {
      getData().then((books) => setAlfa(books))
    },[])
    
  const categoryFilter = books.filter((book) => book.category === category);

  return (
    <div>
      {category ? <ItemList books={categoryFilter}/> : <ItemList books={books}/>}
    </div>
  )
}
export default ItemListContainer;