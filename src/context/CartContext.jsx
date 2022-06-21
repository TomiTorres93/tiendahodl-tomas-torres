import React, { useState, createContext, useContext } from 'react';

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({ children }) => {


    const [cartList, setCartList] = useState([])


    // ESTA FUNCIÓN CALCULA EL PRECIO TOTAL DE LA ORDEN
    function totalQty() {
        if (cartList.length > 0) { return cartList.map(a => a.cantidad).reduce((a, b) => a + b) } else {
            return 0
        }
    }


    // ESTA FUNCIÓN AGREGA EL ITEM AL CARRITO Y VERIFICA SI YA EXISTE UN ITEM CON EL MISMO ID. 
    // EN CASO DE QUE EXISTA, NO SE DUPLICA EL ITEM EN EL CARRITO, SINO QUE SE SUMA LA CANTIDAD DEL ITEM Y SE ACTUALIZA EL CARRITO
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
        }
    }

    // ESTA FUNCIÓN VACÍA DE ITEMS EL CARRITO
    function vaciarCart() {
        setCartList([])
    }

    // ESTA FUNCIÓN ELIMINA UN ITEM DEL CARRITO
    function eliminarItem(orden) {
        setCartList(cartList.filter(pro => pro.orden !== orden))
    }


    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCart,
            totalQty,
            eliminarItem
        }}>
            {children}

        </CartContext.Provider>
    )

}

export default CartContextProvider