## HODL TIENDA 💻

### Proyecto React JS CoderHouse / Camada 31165 / Tomás Torres


HODL es un ecommerce de indumentaria orientada al mundo crypto. La tienda, una SPA (Single Page App) creada con ReactJS, incorpora además un admin desde donde se podrán consultar las órdenes de compra, agregar nuevos productos y leer los mensajes enviados desde el sitio web.

El sitio es full-responsive.


<img src="https://firebasestorage.googleapis.com/v0/b/hodltienda-reactcoderhouse.appspot.com/o/gif%2Fhodltienda.gif?alt=media&token=690f17fb-7d80-44a4-a75e-1439c9d94e3d" width="550"/>

## PÁGINAS  📝

### ▪ Home: 

En la página de inicio del sitio se alojan los productos de la tienda, además de los accesos al resto de las secciones. Las remeras y gorras están presentadas con un diseño minimalista y de formas redondeadas; al pasar el mouse por encima de cada imagen se puede ver en detalle la imagen del diseño. Esta sección cuenta además con un filtro para seleccionar qué tipo de productos queremos visualizar.

### CIRCUITO DE COMPRA 🛒

### ▪ Detalle del producto:

Al clickear en alguno de los items se ingresa al detalle del mismo. A la izquierda están presentadas las imágenes en un carrousel. A la derecha, el nombre del producto, su descripción, precio y el contador. En el caso del contador se diferencian en caso de elegir gorra o remera. Si el producto es una gorra, no se visualiza el selector de talles; si es una remera, al clickear en cada talle aparecerá debajo la leyenda con el stock disponible. 
Luego de agregar al carrito el producto aparecen tres nuevos botones en reemplazo del contador: "finalizar compra" redirecciona al carrito; "seguir comprando" devuelve el contador y selector de talles; y el logo de home redirecciona al inicio para comprar otro producto.
Por último, el contador incorpora una función de control de stock que no permite agregar al carrito más productos que los disponibles en stock. En caso de intentar hacerlo, aparecerán los tres botones antes mencionados y la leyenda "Tu selección supera el stock disponible".


### ▪ Carrito:

Luego de elegir los productos, el circuito continúa en el carrito de compras. En esta sección se muestran los ítems seleccionados con sus detalles: foto, título, talle, cantidad, precio unitario y precio total por prenda. En caso de comprar dos productos iguales pero de distinto talle, se mostrarán cada uno por separado. Desde este detalle del ítem, clickeando en la imagen del producto se puede acceder nuevamente al detalle del producto. Además, en el cuadro que muestra el precio total por prenda y la cantidad se puede eliminar del carrito la selección. También se puede optar por vaciar el carrito con el botón que está bajo de los productos.

Por otra parte, a la derecha del carrito se encuentra el resumen del pedido, con el precio total de la orden y el botón de finalizar compra. Al clickear este botón se redirigirá al formulario de compra.


### ▪ Formulario finalizar compra - MercadoPago:

Esta página es el último tramo del circuito de compra. En ella se deben completar los datos personales y además se visualiza nuevamente el detalle del carrito. El formulario cuenta con una validación del email: el botón de pagar sólo se visualizará (debajo del detalle del carrito) si los mails coinciden y contienen "@".

Una vez completados los datos, se finaliza con la compra haciendo click en el botón "pagar". Este botón nos redireccionará al link de pago de Mercadopago. Al mismo tiempo, se guarda la orden con los datos correspondientes en Firebase y en sessionStorage, y se corrige el stock de los productos comprados.


Luego de confirmada la transacción, se redirecciona a la tienda, donde aparecerá en pantalla el código de orden único de la operación. Esto es posible gracias a los datos almacenados en el sessionStorage. 


### ▪ Seguimiento: 

El sitio también cuenta con un buscador de órdenes. En esta sección, al ingresar el código de orden provisto en el paso anterior se visualizará en pantalla el detalle de la orden y su estado (en esta etapa, sólo modificable desde la base de datos).

### ▪ Contacto:

El formulario de contacto solicita dos datos: email y el cuerpo del mensaje. Al ser enviado (el usuario se dará cuenta porque el texto del botón cambiará a "¡Enviado!"), este mensaje se alojará en la base de datos, en la colección "correos". Estos correos podrán visualizarse en el admin del sitio, explicado más abajo en este texto.

### ▪ Nosotrxs:

La sección "Nosotrxs" es meramente informativa: en tres cards muestra imagen, nombre y posición de cada integrante del equipo.

### ▪ Admin:

El sitio contiene un panel de control que, a modo de muestra, tiene acceso desde el navbar. Para poder recorrerlo, se provee un usuario ("admin") y contraseña de prueba ("admin"). 

Luego de la validación, en la sección se despliegan tres opciones: agregar productos, órdenes y correos.

En "agregar productos" se podran ingresar nuevos productos a la colección "productos" de la base de datos en firebase.

En "órdenes" se podrán visualizar, en primera instancia, un resumen de todas las órdenes de compra. Al clickear en "detalle" se puede acceder al detalle de cada una.

En "correos" se visualizan los mensajes enviados desde la sección de "contacto". Además, cada correo incluye un botón de "responder". Al clickear, se abrirá el procesador de emails por defecto del ordenador, con el email del cliente ya incorporado.

### Librerías

- React Router Dom.
- FireBase.


### Deploy

El deploy del sitio fue realizado en Netlify, se encuentra en este link => https://tiendahodl.netlify.app/
