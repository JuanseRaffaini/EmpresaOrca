
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

  

  const productosEnVenta = [
    
    new Productos(  "Entelados","01", 3000, 20),
    new Productos("MDF", "02", 4000, 10),
    new Productos("SinEntelar", "03", 2000, 40),
    
    ]

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const guardarCarritoEnLocalStorage = () => {
      localStorage.setItem('carrito', JSON.stringify(carrito));
    };

  const actualizarTotalCarrito = () =>
  {
    const total = carrito.reduce((total,item) => total + item.total, 0);
    document.getElementById('totalCarrito').textContent = total
  }

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

const mostrarCarrito = () =>{
    const listaCarrito = document.getElementById('listaCarrito')
    listaCarrito.innerHTML = ''

    carrito.forEach(item => {
     const carritoDiv = document.createElement('div')
     carritoDiv.classList.add('itemCarrito')
     carritoDiv.innerHTML = `
     <h4>${item.cantidad} x ${item.nombre}</h4>
     <p>$${item.total}</p>`;
    listaCarrito.appendChild(carritoDiv);
    }
)
}
// Función para finalizar la compra
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







/*const carrito = []

const agregarCarrito = (producto, tamano, cantidad) => {
const elementoCarrito = {
nombre : producto.nombre,
medida : tamano.medida,
precio : tamano.precio,
cantidad : cantidad
}
carrito.push(elementoCarrito)
}

const totalCarrito = () =>{
let total = 0
console.log(carrito)
for(i=0; i<carrito.length; i++){

    total += carrito[i].precio * carrito[i].cantidad

   
}
return total
}

const app = () =>{

    alert(` BIENVENIDO A NUESTRA TIENDA ONLINE \n Aqui podras realizar tu compra y para ello te ayudaremos. \n Solo sigue estos pasos`)

let loop = true

while(loop){
    let producto = prompt(` Tenemos una gran cantidad de variedades \n selecciona la opcion que estas buscando ingresando el codigo escrito en su lado izquierdo \n 0 ~ Entelados \n 1 ~ MDF \n 2 ~ Sin Entelar`)

    if (producto === null || isNaN(producto) || producto < 0 || producto >= productos.length) {
        alert("Por favor, ingresa un código válido de producto.");
        continue;
      }

    let tamano = prompt(` GENIAL, BUENA ELECCION. \n Ahora debes escojer tu medida adecuada, ingresa el codigo escrito en su lado izquierdo \n Estas son las que tenemos a disposicion, ten en cuenta que los 100 cm lineales tienen un valor de $6000 \n 0 ~ 50 cm x 50 cm \n 1 ~ 100 cm x 50 cm \n 2 ~ 100 cm x 100 cm \n 3 ~ 150 cm x 100 cm `)

    let cantidad = parseInt(prompt(` cuantos productos con el numero de codigo ${producto} y tamaño con el numero de codigo ${tamano} desea comprar?`))
    
    agregarCarrito(productos[producto], medidas[tamano], cantidad)
    loop = confirm("desea comprar mas bastidores?")


}

alert( `PERFECTO \n Su compra fue realizada con exito \n El precio final es de = $` + totalCarrito() + `\n Nos comunicaremos con usted en la brevedad. SALUDOS`)

}*/

/*app()*/
/*const btncarrito = document
getElementById("carritoboton")
btncarrito.onclick = () => {
alert("abriste el carrito")}*/


