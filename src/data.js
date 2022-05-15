 const productos = [{"id": "1", "nombre": "OLD BUT GOLD", "img": 'https://drive.google.com/uc?id=16q3tMxLy_cJ85q-B73zXaM3ojM7g8qlG', 
    "descripcion": "Todos empezamos comprando algunos satoshis.", "stock": "", "precio" :"", "categoria": "hodl"}, 

    { "id": "2", "nombre": "EIP-1559", "img": 'https://drive.google.com/uc?id=1HSkB5WUdB04csdi3Ab4kPP6FJ0QL0q9o', 
    "descripcion": "A algunos solo les gusta ver el mundo arder.", "stock": "", "precio" :"", "categoria": "hodl"}, 

    { "id": "3", "nombre": "ETH-ATH", "img": 'https://drive.google.com/uc?id=1fnBf9Ze4_F67LjK8yZyx0kyYVYyrrP4p', "descripcion": "¿Nuestra criptomoneda y blockchain favorita?", "stock": "", "precio" :"", "categoria": "hodl"}, 

    { "id": "4", "nombre": "PANCAKE NEON", "img": 'https://drive.google.com/uc?id=1r0QEs9zjnqKOipXfn9tF6XhXBQP8y7uu', "descripcion": "¿Los Syrup Pools te hicieron pensar en dejar tu trabajo?", "stock": "", "precio" :"", "categoria": "hodl"}, 

    { "id": "5",  "nombre": "FOX", "img": 'https://drive.google.com/uc?id=16kGhAKs2w3YCRWCx9Mk7yPc5GFWy7hUS', "descripcion": "La wallet del zorrito. No la nombres en Twitter.", "stock": "", "precio" :"", "categoria": "hodl"},

    { "id": "6",  "nombre": "INFINITE I", "img": 'https://drive.google.com/uc?id=1CHODl3W7RrNiw431us-bhDOrK_0pV2ta', "descripcion": "NFT de la película The Infinite Machine.", "stock": "", "precio" :"", "categoria": "nft"},

    { "id": "7",  "nombre": "INFINITE II", "img": 'https://drive.google.com/uc?id=1ab_gjv5oZKExCgwQjJKuzPt0luVAq4xb', "descripcion": "NFT de la película The Infinite Machine.", "stock": "", "precio" :"", "categoria": "nft"},

    { "id": "8",  "nombre": "INFINITE III", "img": 'https://drive.google.com/uc?id=1VonaRLVi3zai0KVJ-duZoYmsI2_4l1Kj', "descripcion": "NFT de la película The Infinite Machine.", "stock": "", "precio" :"", "categoria": "nft"},

    { "id": "9",  "nombre": "INFINITE IV", "img": 'https://drive.google.com/uc?id=1xhfyy4zQwPUpCKIs1RoynRKnBahAvpmC', "descripcion": "NFT de la película The Infinite Machine.", "stock": "", "precio" :"", "categoria": "nft"},

    { "id": "10",  "nombre": "INFINITE V", "img": 'https://drive.google.com/uc?id=1cHP3QbpLx0jmN2tZsM-bEpxC12B0W3jE', "descripcion": "NFT de la película The Infinite Machine.", "stock": "", "precio" :"", "categoria": "nft"},

    { "id": "11",  "nombre": "INFINITE VI", "img": 'https://drive.google.com/uc?id=12rKPTkmoGGye7l8zSLd-qb6apQ-8pBS_', "descripcion": "NFT de la película The Infinite Machine.", "stock": "", "precio" :"", "categoria": "nft"},

    { "id": "12",  "nombre": "INFINITE VII", "img": 'https://drive.google.com/uc?id=1dyHXIZUxtOu0EjOJtz9MN1qSrq-2bnN2', "descripcion": "NFT de la película The Infinite Machine.", "stock": "", "precio" :"", "categoria": "nft"},

    { "id": "13",  "nombre": "MUTANT BAYC I", "img": 'https://drive.google.com/uc?id=1sImodvcheQhELLG23izeqhUOi2YJFWrT', "descripcion": "NFT de la colección Mutant Ape Yacht Club.", "stock": "", "precio" :"", "categoria": "nft"},

    { "id": "14",  "nombre": "MUTANT BAYC II", "img": 'https://drive.google.com/uc?id=1K5OzmSaXX6UqNwMAYd2zVPTPgL2OgtE_', "descripcion": "NFT de la colección Mutant Ape Yacht Club.", "stock": "", "precio" :"", "categoria": "nft"},

    { "id": "15",  "nombre": "MUTANT BAYC III", "img": 'https://drive.google.com/uc?id=1CvouRoP-6VzqScXLcnR6pJsSSSvOfFS_', "descripcion": "NFT de la colección Mutant Ape Yacht Club.", "stock": "", "precio" :"", "categoria": "nft"},
   ]


export const getFetch = (id) => {
   return new Promise((resolve) => {
      setTimeout(()=> {
         const query = id ? productos.find(producto => producto.id === id) : productos; resolve (query)
      }, 1500)

   })
} 


