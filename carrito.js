const carritoJSON = localStorage.getItem("carrito");
let carrito;
if (carritoJSON !== null) {
    carrito = JSON.parse(carritoJSON);
}



//Para mostrar los Elementos en el carrito
const contenedorCarrito = document.getElementById("contenedorCarrito");
function mostrarCarrito() {
    contenedorCarrito.innerHTML = "";
    carrito.forEach(auto => {
        const div = document.createElement("div");
        div.classList.add("caja");
        div.innerHTML = `<p class="titulo">Nombre: ${auto.nombre}</p>
                        <p class="precio">Precio: ${auto.precio}</p>
                        <p class="precio">Cantidad: ${auto.cantidad}</p>                         
                        <img class="imagenA" src="${auto.url}" alt="${auto.nombre}">
                        <button class="botonC" id="eliminar${auto.id}"> Eliminar </button>`
        contenedorCarrito.appendChild(div);
    })

}
mostrarCarrito();