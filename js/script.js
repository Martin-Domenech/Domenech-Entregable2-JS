class Producto {
    constructor(nombre, precio, img, stock, categoria) {
      this.nombre = nombre;
      this.precio = precio;
      this.img = img;
      this.stock = stock;
      this.categoria = categoria;
    }
}


const productos = [

    new Producto("CAMISETA TITULAR UMBRO A.A.A.J.", 31899, "assets/camiseta1.PNG", 3, "hombre"),
    new Producto("CAMISETA SUPLENTE UMBRO A.A.A.J.", 31899, "assets/camiseta2.PNG", 20, "hombre"),
    new Producto("CAMISETA TITULAR UMBRO 22/23", 17429, "assets/camiseta3.PNG", 56, "hombre"),
    new Producto("CAMISETA SUPLENTE UMBRO 22/23", 17429, "assets/camiseta4.PNG", 0, "hombre"),
    new Producto("POLO HOMBRE UMBRO SALIDA A.A.A.J.", 20499, "assets/chomba1.PNG", 20, "hombre"),
    new Producto("REMERA UMBRO SALIDA A.A.A.J.", 18999, "assets/hombre1.PNG", 20, "hombre"),
    new Producto("REMERA HOMBRE SALIDA A.A.A.J.", 18999, "assets/hombre2.PNG", 20, "hombre"),
    new Producto("REMERA S/M HOMBRE UMBRO ENTRE. A.A.A.J.", 19999, "assets/camiseta3.PNG", 20, "hombre"),
    new Producto("BERMUDA HOMBRE UMBRO ARQ. A.A.A.J. ", 19099, "assets/hombre4.PNG", 0, "hombre"),
    new Producto("BERMUDA HOMBRE UMBRO ARQ.  ", 19099, "assets/hombre6.PNG", 6, "hombre"),
    new Producto("POLO HOMBRE UMBRO SALIDA A.A.A.J", 23799, "assets/hombre7.PNG", 20, "hombre"),
    new Producto("POLO HOMBRE UMBRO ", 20199, "assets/hombre8.PNG", 20, "hombre"),
    new Producto("SWEATER MUJER A.A.A.J. ", 14000, "assets/mujer2.PNG", 20, "mujer"),
    new Producto("CHOMBA REPLICA MARADONA A.A.A.J ", 9499, "assets/mujer3.PNG", 20, "mujer"),
    new Producto("CAMISETA SEMILLERO DEL MUNDO 22/23 ", 5499, "assets/mujer4.PNG", 20, "mujer"),
    new Producto("CAMISETA MUJER UMBRO 22/23 ", 14999, "assets/camisetamujer1.PNG", 20, "mujer"),
    new Producto("CAMISETA MUJER UMBRO 22/23 (2) ", 14999, "assets/camisetamujer2.PNG", 20, "mujer"),
    new Producto("piluso niño semillero del mundo ", 4200, "assets/pilusonino.PNG", 20, "nino"),
    new Producto("CONJUNTO UNISEX NIÑO A.A.A.J. ", 18800, "assets/NINO1.PNG", 0, "nino"),
    new Producto("CONJUNTO UNISEX NIÑO A.A.A.J. (2) ", 18800, "assets/NINO2.PNG", 20, "nino"),
    new Producto("CONJUNTO UNISEX NIÑO A.A.A.J. (3)", 18800, "assets/NINO3.PNG", 20, "nino"),
    new Producto("CONJUNTO NIÑO A.A.A.J ", 20799, "assets/NINO4.PNG", 20, "nino"),
    new Producto("BODY BORDADO MANGA CORTA", 20399, "assets/NINO5.PNG", 0, "nino"),
    new Producto("BABERO BORDADO ", 14999, "assets/NINO6.PNG", 20, "nino"),
    new Producto("TOALLA BEBE ", 14999, "assets/NINO7.PNG", 20, "nino"),
    new Producto("TABLA DE PICADA A.A.A.J ", 5400, "assets/tablapicada.PNG", 20, "accesorio"),
    new Producto("Piluso adulto negro ", 4500, "assets/pilusoadulto.PNG", 20, "accesorio"),
    new Producto("PILUSO ADULTO A.A.A.J ", 4500, "assets/acce1.PNG", 20, "accesorio"),
    new Producto("CANILLERAS", 3900, "assets/acce2.PNG", 20, "accesorio"),
    new Producto("BUFANDA MARADONA A.A.A.J. ", 5599, "assets/acce3.PNG", 20, "accesorio"),
    new Producto("PELOTA N*5 A.A.A.J", 6300, "assets/acce4.PNG", 0, "accesorio"),
    new Producto("LLAVERO A.A.A.J ", 3000, "assets/acce5.PNG", 20, "accesorio"),
    new Producto("BANDERIN ROJO ", 4200, "assets/acce6.PNG", 20, "accesorio"),
    new Producto("DIJE ESCUDO A.A.A.J ", 5400, "assets/acce7.PNG", 20, "accesorio"),

];

const contenedor = document.getElementById('grid-store');

function agregarProductos(productos) {
    
    contenedor.innerHTML= '';
    if (productos.length > 0 ){
        productos.forEach(producto => {
            const divGridItem = document.createElement('div');
            divGridItem.classList.add('grid-item-store');
    
            const imagen = document.createElement('img');
            imagen.src = producto.img;
            imagen.alt = producto.nombre;
            divGridItem.appendChild(imagen);
    
            const divTextStore = document.createElement('div');
            divTextStore.classList.add('text-store');
    
            const nombreParrafo = document.createElement('p');
            nombreParrafo.textContent = producto.nombre;
            divTextStore.appendChild(nombreParrafo);
    
            const precioParrafo = document.createElement('p');
            precioParrafo.classList.add('precio');
            precioParrafo.textContent = `$${producto.precio}`;
            divTextStore.appendChild(precioParrafo);
            
            const divBoton = document.createElement('div');
            divBoton.classList.add('div-boton');
            divTextStore.appendChild(divBoton);

            const form = document.createElement('form');
            form.id = 'agregarAlCarritoForm';
            form.action = 'templates/carrito.html';
            form.method = 'get';
            divBoton.appendChild(form);

            const boton = document.createElement('button');
            boton.type = "submit";
            boton.classList.add('btn', 'btn-dark');

            if(producto.stock > 0){
                boton.textContent = 'Agregar al carrito';
                boton.addEventListener('click', function() {
                    let carritoProductos = JSON.parse(localStorage.getItem('carritoProductos')) || [];
                    carritoProductos.push(producto);
                    localStorage.setItem('carritoProductos', JSON.stringify(carritoProductos));
                    console.log(carritoProductos);
                });
            }
            else{
                boton.textContent = 'Sin stock';
                boton.disabled = true;
            }
    
            form.appendChild(boton);
    
            divGridItem.appendChild(divTextStore);
    
            contenedor.appendChild(divGridItem);
        });
    }
    else{
        const divNoProducto = document.createElement('div');
        divNoProducto.classList.add('no-producto');
        divNoProducto.innerHTML = `<h4>No se ah encontrado ningun producto</h4>`;
        contenedor.appendChild(divNoProducto);
    }
    
}

function filtroProductos(nombre){
    const nombreFiltro = nombre.trim().toUpperCase();
    const productosFiltrados = productos.filter(producto => producto.nombre.toUpperCase().includes(nombreFiltro));
    contenedor.innerHTML = '';
    agregarProductos(productosFiltrados);
}

document.getElementById('filtroForm').addEventListener('submit', function(event){
    event.preventDefault();
    const nombreProducto = document.getElementById('nombreProducto').value;
    filtroProductos(nombreProducto);
})

document.querySelector('.btn-hombre').addEventListener('click', function(){
    const pFiltrados = productos.filter(producto => producto.categoria === "hombre");
    agregarProductos(pFiltrados);
})
document.querySelector('.btn-mujer').addEventListener('click', function(){
    const pFiltrados = productos.filter(producto => producto.categoria === "mujer");
    agregarProductos(pFiltrados);
})
document.querySelector('.btn-nino').addEventListener('click', function(){
    const pFiltrados = productos.filter(producto => producto.categoria === "nino");
    agregarProductos(pFiltrados);
})
document.querySelector('.btn-accesorio').addEventListener('click', function(){
    const pFiltrados = productos.filter(producto => producto.categoria === "accesorio");
    agregarProductos(pFiltrados);
})
document.querySelector('.btn-inicio').addEventListener('click', function(){
    agregarProductos(productos);
})

agregarProductos(productos);