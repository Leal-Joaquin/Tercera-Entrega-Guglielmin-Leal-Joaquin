function cargarProducto(producto){

    class Producto {
        constructor(marca, cantidad, precio){
            this.marca = marca;
            this.cantidad = cantidad;
            this.precio = precio;
        }
    }
    const PRODUCTO = [
        new Producto (`Cafetera Italiana`, 5, 24.250),
        new Producto (`Cafetera Ibrik`, 7 , 20.000),
        new Producto (`Sifon Japones`, 2 , 47.000),
        new Producto (`Aeropress`, 6 , 15.000),
        new Producto (`Prensa Francesa`, 3 , 12.000),
        new Producto (`Chemex`, 3 , 17.500),
        new Producto (`Filtros x 20u`, 20 , 5.000),
        new Producto (`Molino`, 15 , 11.300)
    ];
    return PRODUCTO;
}
const PRODUCTOS = cargarProducto();
console.log(PRODUCTOS)