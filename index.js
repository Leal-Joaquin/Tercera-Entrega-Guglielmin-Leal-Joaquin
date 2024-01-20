// Inicio de Sesion
const BBDD = [
    {
        usuario: "joaquin",
        contraseña: "123patito"
    },
    {
        usuario: "pedro123",
        contraseña: "pedro123"
    },
    {
        usuario: "martin",
        contraseña: "123456"
    }
]

const botonIniciar = document.querySelector("#btn-iniciar");
const contenedor = document.querySelector("#contenedor");
const inputs = document.querySelectorAll("input");


const isLog = JSON.parse(localStorage.getItem("isLog"))
if(isLog && isLog.usuario){
    contenedor.innerHTML = `<h4>Bienvenido de nuevo sr/sra <strong> ${isLog.usuario} </strong> </h4>`
}

const usuarioALoguear = {
    usuario: '',
    password: '',
}

inputs.forEach((input)=> {
    input.addEventListener("input", ({target: {name, value}})=>{
        usuarioALoguear[name] = value
    })
});

botonIniciar.addEventListener("click", () => {

    const siExiste = BBDD.find((persona) => {
        return persona.usuario === usuarioALoguear.usuario && persona.contraseña === usuarioALoguear.password
    })

    if (siExiste !== undefined) {
        localStorage.setItem("isLog", JSON.stringify ({usuario: usuarioALoguear.usuario}))
        contenedor.innerHTML = `<h4>Bienvenido de nuevo sr/sra <strong> ${siExiste.usuario} </strong> </h4>`
    } else {
        console.log("quien te conoce")
    }

})


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

































