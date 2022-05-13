 const productos = [{"id": "1", "nombre": "OLD BUT GOLD", "img": 'https://drive.google.com/uc?id=16q3tMxLy_cJ85q-B73zXaM3ojM7g8qlG', 
    "descripcion": "Todos empezamos comprando algunos satoshis.", "stock": "5"}, 

    { "id": "2", "nombre": "EIP-1559", "img": 'https://drive.google.com/uc?id=1HSkB5WUdB04csdi3Ab4kPP6FJ0QL0q9o', 
    "descripcion": "A algunos solo les gusta ver el mundo arder.", "stock": "5"}, 

    { "id": "3", "nombre": "ETH-ATH", "img": 'https://drive.google.com/uc?id=1fnBf9Ze4_F67LjK8yZyx0kyYVYyrrP4p', "descripcion": "¿Nuestra criptomoneda y blockchain favorita?", "stock": "5"}, 

    { "id": "4", "nombre": "PANCAKE NEON", "img": 'https://drive.google.com/uc?id=1r0QEs9zjnqKOipXfn9tF6XhXBQP8y7uu', "descripcion": "¿Los Syrup Pools te hicieron pensar en dejar tu trabajo?", "stock": "5"}, 

    { "id": "5",  "nombre": "FOX", "img": 'https://drive.google.com/uc?id=16kGhAKs2w3YCRWCx9Mk7yPc5GFWy7hUS', "descripcion": "La wallet del zorrito. No la nombres en Twitter.", "stock": "5"}
   ]

export const getFetch = (id) => {
   return new Promise((resolve) => {
      setTimeout(()=> {
         const query = id ? productos.find(producto => producto.id === id) : productos; resolve (query)
      }, 2000)

   })
} 


