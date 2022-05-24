import React, { useEffect, useState, createContext, useContext } from 'react';



const CartContext = createContext([ ]) 

export const useCartContext =  () => useContext(CartContext)


const CartContextProvider = ({children}) => {

    // Los estados y funciones van acá.

    const [cartList, setCartList] = useState([]) // Es un array porque el carrito es un array de objetos
    
    function addToCart(item) {
        setCartList(
            [...cartList, item])        
    }

    function vaciarCart() {
        setCartList([])
    }



    return (
        <CartContext.Provider value={ {
            cartList,
            addToCart,
            vaciarCart
                    
        } }>
            {children} 

            {/* // Children representa a todos los componentes que serán alcanzados por el context en App.jsx */}
        </CartContext.Provider>
    )

}

export default CartContextProvider