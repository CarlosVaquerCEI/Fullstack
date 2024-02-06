// Deconstrucción de Datos del Clima: Crea una función que tome un array de datos de clima, deconstruya sus propiedades para obtener temperatura y humedad, y devuelva un objeto con estos dos valores.

console.clear();

let clima = ["28 grados", "bochornosa"]

let datosClima = (miClima) => {

    let [temperatura, humedad] = miClima

    console.log(`La temperatura en Valencia es de ${temperatura} y se siente una sensación ${humedad}`)
    return {
        temp: temperatura,
        humd: humedad
        }
}

const datosObjeto = datosClima(clima);
const {temp, humd} = datosObjeto;