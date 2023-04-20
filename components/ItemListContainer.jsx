import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore} from "firebase/firestore"
import ItemList from './ItemList'
import Loader from './Loader'

const ItemListContainer = () => {
  const [alfajores, setAlfajores] = useState([])
  const {category} = useParams()
  const [loading, setLoading] = useState(true)

//Importamos información de la base de datos
  useEffect(() => {
    setTimeout(() => {
      const db = getFirestore()
  
      const itemCollection = collection(db, "Alfajores")
  
      setLoading(false)
  
      getDocs(itemCollection).then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({id:doc.id , ...doc.data()}))
        setAlfajores(docs)
      })
    }, 500)
  }, [])
  
  //Filtrado de categorías
  const categoryFilter = alfajores.filter((alfajor) => alfajor.category === category);

  if (loading) {
    return(
      <Loader/>
    )
  }

  return (
    <div>
      {category ? <ItemList alfajores={categoryFilter}/> : <ItemList alfajores={alfajores}/>}
    </div>
  )
}

export default ItemListContainer