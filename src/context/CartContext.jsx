import React, { useEffect, useState, createContext, useContext } from 'react';



const CartContext = createContext([ ]) 

export const useCartContext =  () => useContext(CartContext)


const CartContextProvider = ({children}) => {

    // Los estados y funciones van acá.

    const [cartList, setCartList] = useState([]) // Es un array porque el carrito es un array de objetos
    
    function isInCart(id) {
        return cartList.some(a => a.id === id)
    }

    function addToCart(item) { 
    
        if (isInCart(item.id)) {
            let i = cartList.findIndex(a => a.id === item.id);
            console.log(i)
            const newCartList = cartList;
            newCartList[i].cantidad += item.cantidad;
            setCartList(newCartList)
        } else {

        setCartList(
            [...cartList, item])  }      
    }

    function vaciarCart() {
        setCartList([])
    }

    function eliminarItem(id) { 

        setCartList(cartList.filter(prod => prod.id !== id))
    }




     // isInCart (para el duplicado), 
    // addToCart, 
    // deleteItem, 
    // totalPrice, 
    // totalQty

    function totalQty() {
    if(cartList.length > 0 ) {  return   cartList.map(a => a.cantidad).reduce((a, b) => a + b)} else {
        return 0
    }
    }

    


console.log(totalQty())

    return (
        <CartContext.Provider value={ {
            cartList,
            addToCart,
            vaciarCart,
            totalQty,
            eliminarItem
                    
        } }>
            {children} 

            {/* // Children representa a todos los componentes que serán alcanzados por el context en App.jsx */}
        </CartContext.Provider>
    )

}

export default CartContextProvider