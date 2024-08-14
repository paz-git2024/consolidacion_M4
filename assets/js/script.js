class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}


class Carrito {
    constructor() {
        this.productos = [];
        this.listaCarrito = document.getElementById('lista-carrito');
        this.totalElement = document.getElementById('total');
        this.finalizarBtn = document.getElementById('finalizar-btn');
    }

    agregarProducto(nombre, precio, cantidad) {
        cantidad = parseInt(cantidad);
        if (cantidad > 0) {
            this.productos.push({ nombre, precio, cantidad });
            this.actualizarCarrito();
        } else {
            alert("La cantidad debe ser mayor que 0.");
        }
    }

    actualizarCarrito() {
        this.listaCarrito.innerHTML = '';

        this.productos.forEach(producto => {
            const li = document.createElement('li');
            const precioTotalProducto = Math.round(producto.precio * producto.cantidad);
            li.textContent = `${producto.nombre} x${producto.cantidad} - $${(producto.precio * producto.cantidad).toFixed(2)}`;
            this.listaCarrito.appendChild(li);
        });

        const total = this.productos.reduce((acc, producto) => acc + Math.round(producto.precio * producto.cantidad), 0);
        this.totalElement.textContent = total.toFixed(2);
        
        this.finalizarBtn.disabled = this.productos.length === 0;
    }

    finalizarCompra() {
        if (this.productos.length === 0) {
            alert("El carrito está vacío. No se puede finalizar la compra.");
        } else {
            let detalles = "Detalles de la compra:\n";
            this.productos.forEach(producto => {
               const precioTotalProducto = Math.round(producto.precio * producto.cantidad);  
               detalles += `${producto.nombre} x${producto.cantidad} - $${(producto.precio * producto.cantidad).toFixed(2)}\n`;
            });
            const total = this.productos.reduce((acc, producto) => acc + Math.round(producto.precio * producto.cantidad), 0);
            detalles += `Total: $${this.productos.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0).toFixed(2)}`;
            alert(detalles);
            this.productos.length = 0;
            this.actualizarCarrito();
        }
    }
}


const carrito = new Carrito();


function agregarProducto(nombre, precio, cantidad) {
    carrito.agregarProducto(nombre, precio, cantidad);
}

function finalizarCompra() {
    carrito.finalizarCompra();
    document.getElementById("pr1").value=""
    document.getElementById("pr2").value=""
    document.getElementById("pr3").value=""
    document.getElementById("pr4").value=""
    document.getElementById("pr5").value=""
    document.getElementById("pr6").value=""
}
