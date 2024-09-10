const precioLineal = 6000

const productos = [     
{nombre: "entelados"},
{nombre: "mdf"},
{nombre: "sinEntelar"},
]

const medidas = [
{medida: 2, precio: 2 * precioLineal},
{medida: 3, precio: 3 * precioLineal},
{medida: 4, precio: 4 * precioLineal},
{medida: 5, precio: 5 * precioLineal},
]

const carrito = []

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

}

app()