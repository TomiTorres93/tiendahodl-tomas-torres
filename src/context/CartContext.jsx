import React, { useEffect, useState, createContext, useContext } from 'react';
import { doc, getDoc, addDoc, getFirestore, collection, updateDoc, writeBatch, where, query, getDocs, documentId, DocumentSnapshot} from 'firebase/firestore';



const CartContext = createContext([ ]) 

export const useCartContext =  () => useContext(CartContext)


const CartContextProvider = ({children}) => {

    // Los estados y funciones van acá.

    const [cartList, setCartList] = useState([]) // Es un array porque el carrito es un array de objetos
    
    
    function totalQty() {
        if(cartList.length > 0 ) {  return   cartList.map(a => a.cantidad).reduce((a, b) => a + b)} else {
            return 0
        }
        }

    function addToCart(item) { 
        let i = cartList.findIndex(a => a.id === item.id && a.talle === item.talle);

        if (i !== -1) {
 
            
            const cantidadVieja = cartList[i].cantidad;
            const precioTotalViejo = cartList[i].precio;


            cartList[i].precio = precioTotalViejo + (item.cantidad * item.precioU)
            cartList[i].cantidad = cantidadVieja + item.cantidad;

            setCartList([...cartList])
        } else {

        setCartList(
            [...cartList, item])  
        
        // localStorage.setCart(cartList)
    
    }  
    } 

    function vaciarCart() {
        setCartList([])
    }

    function eliminarItem(id) { 

        setCartList(cartList.filter(prod => prod.id !== id))
    }

    async function  orders() { 
    const db = getFirestore()

    const q = query(collection(db, "orders"));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot.docs.length)

    querySnapshot.forEach((doc) => {
        const data = doc.data()


        console.log(data);
      })
    }
    
    async function  ordersCantidad() { 
        const db = getFirestore()
        const q = query(collection(db, "orders"));
      

        return  await  getDocs(q).then(querySnapshot => console.log(querySnapshot.docs.length))

    }
        



    

    return (
        <CartContext.Provider value={ {
            cartList,
            addToCart,
            vaciarCart,
            totalQty,
            eliminarItem,
            orders,
            ordersCantidad
                    
        } }>
            {children} 

            {/* // Children representa a todos los componentes que serán alcanzados por el context en App.jsx */}
        </CartContext.Provider>
    )

}

export default CartContextProvider