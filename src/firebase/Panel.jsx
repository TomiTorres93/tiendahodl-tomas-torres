import './Panel.css';

import React, { useEffect, useState, useContext } from 'react';
import { useCartContext } from '../context/CartContext'
import { Link } from "react-router-dom"
import { doc, addDoc, getFirestore, collection, updateDoc, writeBatch, where, query, getDocs, documentId} from 'firebase/firestore';



export default function Panel() {





  return (
    <form action="">

        <div>
            <p>PRODUCTO</p>
            <select name="" id="">
                <option value="remera">REMERA</option>
                <option value="gorra">GORRA</option>
            </select>
        </div>

        <div>
            <p>NOMBRE</p>
            <input type="text" placeholder='Nombre' />
        </div>

        <div>
            <p>DESCRIPCIÓN</p>
            <input type="text" placeholder='Descripción' />
        </div>

        <div>
            <p>IMAGEN DEL PRODUCTO</p>
            <input type="text" placeholder='Link firebase' />
        </div>

        <div>
            <p>IMAGEN DEL DISEÑO</p>
            <input type="text" placeholder='Link firebase' />
        </div>

        <div>
            <p>STOCK</p>
            <input type="text" placeholder='Link firebase' />
        </div>


    </form>
  )
}
