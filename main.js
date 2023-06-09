/******************************************* Auto + Carrito **********************************************/
setTimeout(() => {
    Swal.fire({
        title: "Bienvenido a AutoStar, elegi el auto de tus suenos al mejor precio",
        imageUrl: 'img/b.png',
        confirmButtonText: "Aceptar",

    })
}, 1500)
/* Creo el "molde" para Auto */
class Auto {
    constructor(id, nombre, precio, url) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.url = url;
        this.cantidad = 1;
    }
};
/* Creo los objetos Auto */
const prisma = new Auto(1, "Chevrolet Prisma", 4500000, "img/prisma.png");
const cruze = new Auto(2, "Chevrolet Cruze", 7800000, "img/cruze.png");
const cronos = new Auto(3, "Fiat Cronos", 5570000, "img/cronos.png");
const gol = new Auto(4, "VW-Gol Trend", 2680000, "img/gol.png");
const argo = new Auto(5, "Fiat Argo", 6890000, "img/argo.png");
const saveiro = new Auto(6, "VW-Saveiro", 5000000, "img/saveiro.png");
const sirocco = new Auto(7, "VW-Sirocco", 10980000, "img/sirocco.png");
const corolla = new Auto(8, "Toyota Corolla", 8906800, "img/corolla.png");
const civic = new Auto(9, "Honda Civic", 9587630, "img/civic.png");

/* Array de los objetos */
const arrayAutos = [prisma, cruze, cronos, gol, argo, saveiro, sirocco, corolla, civic];
/* array carrito */
let carrito = [];

/* Para mostrar cada auto que tengo en el Array */
const contenedorAuto = document.getElementById("contenedorAuto");
function mostrarAuto() {
    arrayAutos.forEach(auto => {
        const div1 = document.createElement("div");
        div1.className = "caja";
        div1.innerHTML = `  <div class="deJs">
                            <p class="titulo">Nombre: ${auto.nombre}</p>
                            <p class="precio">Precio: ${auto.precio}</p>
                            <img class="imagenA" src="${auto.url}" alt="${auto.nombre}">
                            <button class="botonC" id="agregarCarrito${auto.id}"> Anadir al carrito </button>
                            </div>`

        contenedorAuto.appendChild(div1);

        //Agregar auto al carrito
        const agregarCarrito = document.getElementById(`agregarCarrito${auto.id}`);
        agregarCarrito.addEventListener("click", () => {
            agregarAlCarrito(auto.id);
            Toastify({
                text: "Agregado al carrito",
                duration: 3000,
                gravity: "top",
                position: "right",
                style: {
                    background: "linear-gradient(to right, #E6DADA, #274046)",
                },
                destination: "carrito.html"
            }).showToast();
        })
    });
}
mostrarAuto();

// Funcion para agregar el auto al carrito 
function agregarAlCarrito(id) {
    const autoEnCarrito = carrito.find(auto => auto.id === id)
    if (autoEnCarrito) {
        autoEnCarrito.cantidad++
    } else {
        const autoParaAgregar = arrayAutos.find(auto => auto.id === id)
        carrito.push(autoParaAgregar);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
/* Terminos */
const terminos = document.getElementById("terminos")

terminos.addEventListener("click", () => {
    (async () => {

        const { value: accept } = await Swal.fire({
            title: 'Terminos y condiciones',
            input: 'checkbox',
            inputValue: 1,
            inputPlaceholder:
                'Estoy de acuerdo con los terminos y condiciones',
            confirmButtonText:
                'Continue <i class="fa fa-arrow-right"></i>',
            inputValidator: (result) => {
                return !result && 'Para continuar necesita aceptar las condiciones'
            }
        })

        if (accept) {
            Swal.fire({
                icon: 'success',
                title: 'Aceptado :)'
            })
        }

    })()
});

/******************************************* Formulario **********************************************/
/* Molde para los clientes */
class Cliente {
    constructor(nombre, apellido, correo, contra) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.contra = contra;
    }
};
const arrayDeClientes = [];

/* Para poner en un Array las personas que me cargan en el fomrulario */
// LLamo mediante document 
const formulario = document.getElementById("formulario");


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const correo = document.getElementById("correo");
    const contra = document.getElementById("contra");

    /* creo el objeto */
    const cliente = new Cliente(nombre.value, apellido.value, correo.value, contra.value);
    // Lo pusheamos
    arrayDeClientes.push(cliente);

    console.log(arrayDeClientes);

    /* Para guardar en el local */
    const clientePalLocal = {
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        correo: cliente.correo
    };
    console.log(clientePalLocal);
    var clienteString = JSON.stringify(clientePalLocal);
    localStorage.setItem("cliente", clienteString);



    //reseteamos formulario
    formulario.reset();
});


