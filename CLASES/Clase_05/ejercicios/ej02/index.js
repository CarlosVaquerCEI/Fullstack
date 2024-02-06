// Deconstrucción de Array: Crea una función que tome un objeto de película, deconstruya sus propiedades para obtener titulo y director, y devuelva un array con estos dos valores.

console.clear()

let datosPelicula = () => {
    let pelicula = {
        titulo: "Ciempiés humano",
        director: "García Lorca"
    }

    let {titulo, director} = pelicula

    console.log(`La película ${titulo} fue dirigida por ${director}`)
    return [titulo, director]
}

datosPelicula()
