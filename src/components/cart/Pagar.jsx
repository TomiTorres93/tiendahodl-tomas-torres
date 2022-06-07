import './Cart.css';
import React, { useEffect, useState, useContext } from 'react';
import Titulo from '../texts/Titulo';
import { useCartContext } from '../../context/CartContext'
import { Link } from "react-router-dom"
import { getDoc, doc, addDoc, getFirestore, collection, updateDoc, writeBatch, where, query, getDocs, documentId} from 'firebase/firestore';
import Input from '../../firebase/Input';


export default function Pagar() {
    const {cartList, vaciarCart, eliminarItem, ordersCantidad} = useCartContext()
    const handleSubmit = (event) => {
        event.preventDefault();

    }



    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")

    console.log(cartList)


  return (
    <> 
    <Titulo texto="Ingresá tus datos y aboná" />
 
    <form className='formAgregarProducto' action="" onSubmit={handleSubmit}>

        <Input titulo="NOMBRE Y APELLIDO" tipo="text" name="nombre" onchange={(e) => setNombre(e.target.value)}/>      
        <Input titulo="TELÉFONO" tipo="text" name="telefono"  onchange={(e) => setTelefono(e.target.value)}/>
        <Input titulo="EMAIL" tipo="text" name="email"  onchange={(e) => setEmail(e.target.value)}/>




    <button className='agregarProducto' type='submit' > Pagar orden </button>


    </form>
    </>
  )
}
