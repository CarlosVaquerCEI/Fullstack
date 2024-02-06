// Deconstrucción de vectores: Crea una función llamada vectorAObjeto que tome un vector como argumento. Este vector contendrá información sobre una persona en el siguiente formato: persona = ["Juan", "Pérez", 30];
// Debe mostrar { nombre: "Juan", apellido: "Pérez", edad: 30 }

console.clear()

function estadoDeLaCarrera(valorInicial) {
    let estado = valorInicial

    const setEstado = () => {
        estado = nuevoValor
        return
    }


    const obtenerEstado = () => {
        return estado
    }

    return [obtenerEstado, setEstado]
}

const [obtenerEstado, setEstado] = estadoDeLaCarrera("Juan")

console.log(obtenerEstado)