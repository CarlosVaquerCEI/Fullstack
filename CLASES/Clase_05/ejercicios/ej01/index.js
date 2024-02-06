// Crea una función llamada "FelizCumple" que tome un objeto de alumno, deconstruya sus propiedades para obtener nombre y edad, incremente la edad en uno, imprima un mensaje de cumpleaños y devuelva un array con la nueva edad y un mensaje de "datos guardados"
console.clear();



let felizCumple = () => {

    let alumno = {
        nombre: "Carlos",
        edad: 24,
        aficiones: ["Videojuegos", "Leer", "Comer"]
    }

    let {nombre, edad} = alumno
    console.log(`Feliz cumpleaños ${nombre}, hoy cumples ${edad+1} años`) 
    return [edad+1, "datos guardados"]
}

console.log(felizCumple())

