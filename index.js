
function Producto(nombre, precio, id) {
    this.nombre = nombre;
    this.precio = precio;
    this.id = id;
}


class GestorProductos {
    constructor() {
        this.productos = [];
    }

    // Método para agregar un producto al array
    addProduct(nombre, precio, id) {
        const nuevoProducto = new Producto(nombre, precio, id);
        this.productos.push(nuevoProducto);
        console.log(`Producto "${nombre}" agregado con éxito.`);
    }

    getProducts() {
        return this.productos;
    }

    getProductById(id) {
        const productoEncontrado = this.productos.find(producto => producto.id === id);
        return productoEncontrado || null;
    }
}


const gestorProductos = new GestorProductos();

gestorProductos.addProduct("Producto1", 10.99, 1);
gestorProductos.addProduct("Producto2", 20.49, 2);
gestorProductos.addProduct("Producto3", 15.75, 3);

console.log("Todos los productos:", gestorProductos.getProducts());

const idBuscado = 2;
const productoEncontrado = gestorProductos.getProductById(idBuscado);

if (productoEncontrado) {
    console.log(`Producto con ID ${idBuscado}:`, productoEncontrado);
} else {
    console.log(`No se encontró ningún producto con ID ${idBuscado}.`);
}
