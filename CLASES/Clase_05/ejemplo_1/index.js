console.clear()

console.log("Ejercicio 01")


let mostrarDatos = (nombre, edad) => {
    return (`Mi nombre es ${nombre} y mi edad es ${edad}`)
}


let nombre = "Maria";
let edad = 25;

// const texto = mostrarDatos(nombre, edad);
// console.log(texto)

// Es lo mismo
console.log(mostrarDatos(nombre, edad))
console.log(mostrarDatos("Juan", 21))


// ------- DECONSTRUCCIÓN -------
let diasDeLaSemana = ["Lunes", "Martes", "Miércoles", "Jueves"]

//deconstruir array (la manera incorrecta)
// let dia1 = diasDeLaSemana[0];
// let dia2 = diasDeLaSemana[1];
// let dia3 = diasDeLaSemana[2];
// let dia4 = diasDeLaSemana[3];

//deconstruir array (la manera correcta)
let [dia1, dia2, dia3, dia4] = diasDeLaSemana;

console.log("dia son", dia1, dia2, dia3, dia4);


let alumno = {
    nombre2: "Juan",
    edad2: 19
}

let {nombre2, edad2} = alumno;

console.log("nombre es ", nombre2)





// console.log(`Mi nombre es ${nombre} y mi edad es ${edad}`);
