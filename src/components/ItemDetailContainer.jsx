import React, { useEffect, useState } from 'react'
import { doc, getDocs, getFirestore} from "firebase/firestore"
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
  const [alfajor, setAlfajor] = useState([])
  const {id} = useParams()
  
  useEffect(() => {
    const db = getFirestore()

    const oneItem = doc(db, "Alfajores",  `${id}`)

    getDocs(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        setAlfajor({id:snapshot.id, ...snapshot.data()})
      }
    })
  }, [])

  return (
    <div className='cardContainer_detail'>
      <ItemDetail alfajor={alfajor}/>
    </div>
  )
}

export default ItemDetailContainer