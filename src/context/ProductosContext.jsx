import React, { useEffect, useState, createContext, useContext } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';



const ProductosContext = createContext([])
export const useProductosContext = () => useContext(ProductosContext)


const ProductosContextProvider = ({ children }) => {

    const db = getFirestore()
    const [productos, setProductos] = useState([])
  
    //TOMA LA INFORMACIÓN DE FIRESTORE Y GUARDA LAS ORDENES y LOS ITEMS DE CADA ORDEN EN UN ESTADO
      useEffect(() => {
      const QueryCollection = collection(db, "productos")
      getDocs(QueryCollection)
        .then(resp => setProductos(resp.docs.map(order => ({ id: order.id, ...order.data() }))))
        .catch((err) => console.log(err))
    }, [])
 

    return (
        <ProductosContext.Provider value={{
            productos
        }}>
            {children}
        </ProductosContext.Provider>
    )

}

export default ProductosContextProvider