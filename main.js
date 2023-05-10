class Auto {
    constructor(nombre, precio, url) {
        this.nombre = nombre;
        this.precio = precio;
        this.url = url;
    }
};

const prisma = new Auto("Chevrolet Prisma", 4500000, "../img/prisma.png");
const cruze = new Auto("Chevrolet Cruze", 7800000, "../img/cruze.png");
const cronos = new Auto("Fiat Cronos", 5570000, "../img/cronos.png");
const gol = new Auto("VW-Gol Trend", 2680000, "../img/gol.png");
const argo = new Auto("Fiat Argo", 6890000, "../img/argo.png");
const saveiro = new Auto("VW-Saveiro", 5000000, "../img/saveiro.png");
const sirocco = new Auto("VW-Sirocco", 10980000, "../img/sirocco.png");
const corolla = new Auto("Toyota Corolla", 8906800, "../img/corolla.png");
const civic = new Auto("Honda Civic", 9587630, "../img/civic.png");

const arrayAutos = [prisma, cruze, cronos, gol, argo, saveiro, sirocco, corolla, civic];

const contenedorAuto = document.getElementById("contenedorAuto");
arrayAutos.forEach(auto => {
    const div = document.createElement("div");
    div.className = "caja";
    div.innerHTML = `<p class="titulo">Nombre: ${auto.nombre}</p>
                    <p class="precio">Precio: ${auto.precio}</p>
                    <img class="imagenA" src="${auto.url}" alt="${auto.nombre}">
                    <button class="botonC"> Anadir al carrito </button>`
    contenedorAuto.appendChild(div);
});