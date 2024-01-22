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
        contenedor.innerHTML = `<h4>Bienvenido sr/sra <strong> ${siExiste.usuario} </strong> </h4>`
    } else {
        console.log("quien te conoce")
    }

})


































