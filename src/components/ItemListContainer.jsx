import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Data from "../../data.json"
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [alfajores, setAlfa] = useState([])
  const {category} = useParams()

  const getData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Data)
      }, 1000)
    })
  }

  useEffect(() => {
      getData().then((alfajores) => setAlfa(alfajores))
    },[])
    
  const categoryFilter = alfajores.filter((alfajor) => alfajor.category === category);

  return (
    <div>
      {category ? <ItemList alfajores={categoryFilter}/> : <ItemList alfajores={alfajores}/>}
    </div>
  )
}
export default ItemListContainer;