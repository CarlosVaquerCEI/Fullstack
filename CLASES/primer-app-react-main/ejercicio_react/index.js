console.clear()


// hook useState
function estadoDeLaCarrera(valorInicial) {
    let estado = valorInicial

    const setEstado = (nuevoValor) => {
        estado = nuevoValor
        return
    }


    const obtenerEstado = () => {
        return estado
    }

    return [obtenerEstado, setEstado]
}

// usar el hook de useState
const [obtenerPiloto, setPiloto] = estadoDeLaCarrera("Juan")

console.log(obtenerPiloto())

setPiloto("Pedro")

console.log(obtenerPiloto())