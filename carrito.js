/* llamo a carrito */
const carritoJSON = localStorage.getItem("carrito");
let carrito;
if (carritoJSON !== null) {
    carrito = JSON.parse(carritoJSON);
}


//Calcular total
const totalCompra = document.getElementById("totalCompra");

function totalCompraAuto() {
    let compraTotal = 0;
    carrito.forEach(auto => {
        compraTotal += auto.precio * auto.cantidad;
    })
    totalCompra.innerHTML = `Total: $${compraTotal}`
}
//Para mostrar los Elementos en el carrito
const contenedorCarrito = document.getElementById("contenedorCarrito");
function mostrarCarrito() {
    contenedorCarrito.innerHTML = "";
    carrito.forEach(auto => {
        const div = document.createElement("div");
        div.classList.add("caja");
        div.innerHTML = `<div class="deJs">
                             <p class="titulo">Nombre: ${auto.nombre}</p>
                            <p class="precio">Precio: ${auto.precio}</p>
                            <p class="precio">Cantidad: ${auto.cantidad}</p>                         
                            <img class="imagenA" src="${auto.url}" alt="${auto.nombre}">
                        <div class="botones">
                            <button class="botonC" id="mas${auto.id}"> + </button>
                            <button class="botonC" id="eliminar${auto.id}"> Eliminar </button>
                            <button class="botonC" id="menos${auto.id}"> - </button>
                            </div>
                        </div>`
        contenedorCarrito.appendChild(div);
        // Eliminar auto del carro
        const eliminar = document.getElementById(`eliminar${auto.id}`)
        eliminar.addEventListener("click", () => {
            Swal.fire({
                title: "Seguro que desea eliminar el Auto?",
                icon: "warning",
                confirmButtonText: "Aceptar",
                showCancelButton: true,
                cancelButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    eliminarDelCarrito(auto.id);
                    Swal.fire({
                        title: "producto eliminado",
                        icon: "succes",
                        confirmButtonText: "aceptar"
                    });
                }
            })
        });

        // Aumentar cantidad
        const mas = document.getElementById(`mas${auto.id}`);
        mas.addEventListener("click", () => {
            aumentarCantidad(auto.id);
        });

        // Disminuir cantidad
        const menos = document.getElementById(`menos${auto.id}`);
        menos.addEventListener("click", () => {
            disminuirCantidad(auto.id);
        });

        function aumentarCantidad(id) {
            const auto = carrito.find(auto => auto.id === id);
            auto.cantidad++;
            mostrarCarrito();
            localStorage.setItem("carrito", JSON.stringify(carrito));
        }

        function disminuirCantidad(id) {
            const auto = carrito.find(auto => auto.id === id);
            if (auto.cantidad > 1) {
                auto.cantidad--;
                mostrarCarrito();
                localStorage.setItem("carrito", JSON.stringify(carrito));
            } else {
                Swal.fire({
                    title: "Seguro que desea eliminar el Auto?",
                    icon: "warning",
                    confirmButtonText: "Aceptar",
                    showCancelButton: true,
                    cancelButtonText: "Cancelar"
                }).then((result) => {
                    if (result.isConfirmed) {
                        eliminarDelCarrito(auto.id);
                        Swal.fire({
                            title: "Auto eliminado",
                            icon: "succes",
                            confirmButtonText: "aceptar"
                        });
                    }
                })
            }
        }
    })
    totalCompraAuto()
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


mostrarCarrito();

function eliminarDelCarrito(id) {
    const auto = carrito.find(auto => auto.id === id);
    const indice = carrito.indexOf(auto);
    carrito.splice(indice, 1);
    mostrarCarrito();
    totalCompraAuto()
}

// Vaciar todo el carrito
const carritoVacio = document.getElementById("carritoVacio");
carritoVacio.addEventListener("click", () => {
    eliminarTodoElCarrito()
    localStorage.setItem("carrito", JSON.stringify(carrito));
    //agregar sweet alert
});

function eliminarTodoElCarrito() {
    carrito = []

    mostrarCarrito();
}

const finalizar = document.getElementById("finalizar");

finalizar.addEventListener("click", () => {
    Swal.fire({
        title: "Finalizar compra?",
        icon: "question",
        confirmButtonText: "Aceptar",
        showCancelButton: true,
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Su compra fue exitosa. Gracias por elegirnos",
                icon: "succes",
                confirmButtonText: "aceptar"
            });
            eliminarTodoElCarrito()
            localStorage.setItem("carrito", JSON.stringify(carrito));
        }
    })
}) 