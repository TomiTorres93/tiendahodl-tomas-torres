const carrito = []



export const getFetch = (id) => {
    return new Promise((resolve) => {
       setTimeout(()=> {
          const query = id ? carrito.find(carrito => carrito.id === id) : carrito; resolve (query)
       }, 1500)
 
    })
 } 
 