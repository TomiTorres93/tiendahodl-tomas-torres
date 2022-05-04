import React, { useState } from 'react';
import './ItemListContainer.css';

export default function Count() {

    const [count, setCount] = useState(0)

    function suma() {
        setCount( count + 1)
    } 

    function resta() {
        setCount( count - 1)

         if (count == 0) {
            setCount( count )
        }
    }





  return (
    <div>
    <div className='contador'>{count}</div>
    <button onClick={suma}>+</button>
    <button onClick={resta}>-</button>
    </div>
  )
}

