/* declaro el precio constante del metro lineal de mis bastidores*/

const precioLineal = 6000
 /* declaro en un array la variedad de productos */
const productos = [     
{nombre: "entelados"},
{nombre: "mdf"},
{nombre: "sinEntelar"},
]
/* declaro en un array aparte la medida y el precio, ya que van relacionados y en este caso
el precio lineal por producto va a valer lo mismo, ya que es un simulador.
si no podria hacerlo dentro de un mismo array pero el producto no tiee relaacion con la medida y el precio
ya que no los modifica */
const medidas = [
{medida: 2, precio: 2 * precioLineal},
{medida: 3, precio: 3 * precioLineal},
{medida: 4, precio: 4 * precioLineal},
{medida: 5, precio: 5 * precioLineal},
]
/* creo un array vacio en donde voy a guardar los datos que ingrese mi cliente */
const carrito = []
/* creo una funcion flecha con tres variables la cual va a almacenar datos y los va a pushear dentro del array vacio que cree*/
const agregarCarrito = (producto, tamano, cantidad) => {
const elementoCarrito = {
nombre : producto.nombre,
medida : tamano.medida,
precio : tamano.precio,
cantidad : cantidad
}
carrito.push(elementoCarrito)
}
/* cree una funcion flecha que me permite calcular el precio total a pagar del cliente cuando termine su compra*/
const totalCarrito = () =>{
let total = 0
console.log(carrito)
for(i=0; i<carrito.length; i++){

    total += carrito[i].precio * carrito[i].cantidad

   
}
return total
}
/* cree la funcion JEFE en donde voy a recibir todos los datos del cliente y donde llamo a todas las otras funciones creadas anteriormente para que actuen */

const app = () =>{

    alert(` BIENVENIDO A NUESTRA TIENDA ONLINE \n Aqui podras realizar tu compra y para ello te ayudaremos. \n Solo sigue estos pasos`)

let loop = true

while(loop){
    let producto = prompt(` Tenemos una gran cantidad de variedades \n selecciona la opcion que estas buscando ingresando el codigo escrito en su lado izquierdo \n 0 ~ Entelados \n 1 ~ MDF \n 2 ~ Sin Entelar`)
   /* se me ocurrio hacer un do while para validar lo que el usuario ingresa, pero no me salio y tuve que buscar ayuda, opte por utilizar un if con un continue al final, en caso de error deja de correr el while y empieza el cuestionario nuevamente desde 0 */
    if (producto === null || isNaN(producto) || producto < 0 || producto >= productos.length) {
        alert("Por favor, ingresa un código válido de producto.")
        continue
      }

    let tamano = prompt(` GENIAL, BUENA ELECCION. \n Ahora debes escojer tu medida adecuada, ingresa el codigo escrito en su lado izquierdo \n Estas son las que tenemos a disposicion, ten en cuenta que los 100 cm lineales tienen un valor de $6000 \n 0 ~ 50 cm x 50 cm \n 1 ~ 100 cm x 50 cm \n 2 ~ 100 cm x 100 cm \n 3 ~ 150 cm x 100 cm `)

    if (tamano === null || isNaN(tamano) || tamano < 0 || tamano >= medidas.length) {
        alert("Por favor, ingresa un código válido de medida.")
        continue
      }

      /* no pude hacer que cuando menciono el producto y el tamaño me tire el elemento y no el indice. creo que es porque almacena lo que ingresa el usuario y retorna eso, entonces no se como solucionarlo ya que tendria que hacer que el usuario escriba mucho para terminar su compra y no creo que sea bueno */

    let cantidad = parseInt(prompt(` cuantos productos con el numero de codigo ${producto} y tamaño con el numero de codigo ${tamano} desea comprar?`))

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingresa una cantidad válida.")
        continue
      }
    
    agregarCarrito(productos[producto], medidas[tamano], cantidad)
    loop = confirm("desea comprar mas bastidores?")


}
/* llamo a la funcin totalCarrito para que actue */
alert( `PERFECTO \n Su compra fue realizada con exito \n El precio final es de = $` + totalCarrito() + `\n Nos comunicaremos con usted en la brevedad. SALUDOS`)

}
/* lo mas importante, llamo a la funcion app para que me ejecute el codigo y todo este simulador funcione (: */
app()

/* me base mucho en el ejercicio que hizo el profe en clase, es que justo pegaba con el proyecto que vengo haciendo desde desarrollo web y se entendio perfectamente el codigo*/