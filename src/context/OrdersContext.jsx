import React, { useEffect, useState, createContext, useContext } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';



const OrdersContext = createContext([])
export const useOrdersContext = () => useContext(OrdersContext)


const OrdersContextProvider = ({ children }) => {

    const db = getFirestore()
    const [ordenes, setOrdenes] = useState([])
    const [items, setItems] = useState([])
  
    //TOMA LA INFORMACIÓN DE FIRESTORE Y GUARDA LAS ORDENES y LOS ITEMS DE CADA ORDEN EN UN ESTADO
      useEffect(() => {
      const QueryCollection = collection(db, "orders")
      getDocs(QueryCollection)
        .then(resp => setOrdenes(resp.docs.map(order => ({ id: order.id, ...order.data() })), setItems(resp.docs.map(order => order.data().items))))
        .catch((err) => console.log(err))
    }, [])
 

    return (
        <OrdersContext.Provider value={{
            ordenes,
            items
        }}>
            {children}
        </OrdersContext.Provider>
    )

}

export default OrdersContextProvider