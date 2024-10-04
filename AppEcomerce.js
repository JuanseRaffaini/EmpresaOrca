<<<<<<< HEAD

const mostrarMensaje = (mensaje) => {
  const mensajeDiv = document.getElementById('mensaje');
  mensajeDiv.textContent = mensaje;
};

class Productos{
    constructor(nombre, id, precio, stock){
 this.nombre = nombre;
 this.id = id;
 this.precio = precio;
 this.stock = stock;
    }



reducirStock(cantidad) {
    if (this.stock >= cantidad) {
      this.stock -= cantidad;
    } else {
      mostrarMensaje(`No hay suficiente stock de ${this.nombre}`);
    }
  }
  }

  
/*agrego los productos disponibles de la tienda*/
  const productosEnVenta = [
    
    new Productos(  "Entelados","01", 3000, 20),
    new Productos("MDF", "02", 4000, 10),
    new Productos("SinEntelar", "03", 2000, 40),
    
    ]

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
/*cada ves que se nodifique el carrito llamamos a esta funcion*/
    const guardarCarritoEnLocalStorage = () => {
      localStorage.setItem('carrito', JSON.stringify(carrito));
    };
/*actualizo el total del carrito por cada producto que agrego*/
  const actualizarTotalCarrito = () =>
  {
    const total = carrito.reduce((total,item) => total + item.total, 0);
    document.getElementById('totalCarrito').textContent = total
  }
/*creo la funcion que me agrega la cantidad y el precio al carrito, solamente si la cantidad que pide el usuario esta dentro del stock. si ya se encuentra el producto dentro del carrito, suma su canidad y precio, de lo contrario agrega un nuevo producto al carrito con su cantidad y precio. luego lo suma al total*/
  const agregarCarrito = (producto, cantidad) => {
    if(producto.stock >= cantidad ){
     const itemEnCarrito = carrito.find(item => item.nombre === producto.nombre)
    if(itemEnCarrito){
        itemEnCarrito.cantidad += cantidad;
        itemEnCarrito.total += producto.precio * cantidad;
    }
    else{
        carrito.push({
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: cantidad,
            total: producto.precio * cantidad
        })

    }
    producto.reducirStock(cantidad);
    mostrarCarrito()
    actualizarTotalCarrito()
    mostrarMensaje(`Agregado ${cantidad} ${producto.nombre}(s) al carrito.`);
    
  } else{
    mostrarMensaje(`no hay suficiente stock de ${producto.nomre}`)
  }
}
/* aca ya meto DOM, en donde muestro en antalla el producto, su stock, su precio, etc. con un forEach generando un index para cada producto. lo cual me va a servir luego para generar ID'S unicos*/ 
const mostrarProductos = () =>{
    const listaProductos = document.getElementById('listaProductos');
    listaProductos.innerHTML = '';
    productosEnVenta.forEach((producto,index) =>{
     const productoDiv = document.createElement('div');
     productoDiv.classList.add('producto')
     productoDiv.innerHTML = `<h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio}</p>
      <p>Stock: ${producto.stock}</p>
      <input type="number" id="cantidad-${index}" min="1" max="${producto.stock}" value="1">
      <button onclick="agregarCarrito(productosEnVenta[${index}],parseInt(document.getElementById('cantidad-${index}').value))">Agregar al carrito</button> `;
      listaProductos.appendChild(productoDiv);
      
    })
}
/* muestro el carrito y al finalizar la compra borro con el innerhtml para que no se dupliquen los carritos*/ 
function mostrarCarrito() {
  const listaCarrito = document.getElementById('listaCarrito');
  listaCarrito.innerHTML = '';

  carrito.forEach(item => {
    const carritoDiv = document.createElement('div');
    carritoDiv.classList.add('itemCarrito');
    carritoDiv.innerHTML = `
     <h4>${item.cantidad} x ${item.nombre}</h4>
     <p>$${item.total}</p>`;
    listaCarrito.appendChild(carritoDiv);
  }
  );
}
/*Función para finalizar la compra*/
const finalizarCompra = () => {
    if (carrito.length === 0) {
      mostrarMensaje("El carrito está vacío.");
    } else {
      mostrarMensaje(`Gracias por tu compra. El total es de $${document.getElementById('totalCarrito').textContent}.`);
      carrito.length = 0; /*Vaciar el carrito*/
      guardarCarritoEnLocalStorage(); /* Limpiar el LocalStorage */
      mostrarCarrito(); /*Actualizar el DOM*/
      actualizarTotalCarrito(); /*Actualizar el total*/
    }
  };
  
  /* Mostrar productos cuando carga la página*/
  document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
  
    /* Agregar evento al botón de comprar*/
    document.getElementById('comprar').addEventListener('click', finalizarCompra);
  });

  /* PROFE, por las dudas le aclaro que esta todo enlazado en la page catalogo, ya que decidi continuar con mi proyecto que vengo desde desarrollo web, y los estilos los agregue en el scss, aunque no le di mucha atencion. Aclaro ya que a lo mejor se frena a ver el index y alli no tengo nada solo el inicio de mi sitio. Me gustaria luego agregar el carrito al icono que tengo en la parte superior derecha, pero todo a su tiempo. saludos */ 


