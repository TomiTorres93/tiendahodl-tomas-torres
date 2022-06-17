import React, { useEffect, useState, createContext, useContext } from 'react';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';



const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    const [ordenes, setOrdenes] = useState([])
    useEffect(() => {
        const db = getFirestore()
        const QueryCollection = collection(db, "orders")
        getDocs(QueryCollection)
            .then(resp => setOrdenes(resp.docs.map(order => ({ id: order.id, ...order.data() }))))
            .catch((err) => console.log(err))
    }, [])

    function totalQty() {
        if (cartList.length > 0) { return cartList.map(a => a.cantidad).reduce((a, b) => a + b) } else {
            return 0}}

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

    function addToCartEnvio(item) {
        setCartList(
            [...cartList, item])
    }



    function vaciarCart() {
        setCartList([])
    }

    function eliminarItem(orden) {

        setCartList(cartList.filter(pro => pro.orden !== orden))

    }


    function eliminarOrden(id) {
        console.log(ordenes)
        setOrdenes(ordenes.filter(ord => ord.id !== id))
    }


    async function orders() {
        const db = getFirestore()

        const q = query(collection(db, "orders"));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot.docs.length)

        querySnapshot.forEach((doc) => {
            const data = doc.data()
        })
    }

    async function ordersId() {
        const db = getFirestore()

        const q = query(collection(db, "orders"));
        const querySnapshot = await getDocs(q);
        const idOrder = querySnapshot.doc.data().length

        return idOrder
    }

    //  function contarItemsCarrito(id) {

    // }

    async function ordersCantidad() {
        const db = getFirestore()
        const q = query(collection(db, "orders"));

        return await getDocs(q).then(querySnapshot => console.log(querySnapshot.docs.length))

    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCart,
            totalQty,
            eliminarItem,
            orders,
            ordersCantidad,
            ordersId,
            eliminarOrden,
            addToCartEnvio

        }}>
            {children}

        </CartContext.Provider>
    )

}

export default CartContextProvider