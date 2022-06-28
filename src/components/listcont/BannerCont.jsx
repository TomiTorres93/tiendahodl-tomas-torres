
import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs} from 'firebase/firestore';
import BannerList from './BannerList';

export default function BannerCont() {
    const db = getFirestore()

    const [imagenes, setImagenes] = useState([])

    useEffect(() => {
        const QueryCollection = collection(db, "portada")
        getDocs(QueryCollection)
          .then(resp => setImagenes(resp.docs.map(order => ({ id: order.id, ...order.data() }))))
          .catch((err) => console.log(err))
    }, [])
    

  return (
   <BannerList  imagenes={imagenes} />
  )
}
