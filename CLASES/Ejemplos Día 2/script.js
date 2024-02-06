// ------------------
// TDZ - temporal dead zone
// ------------------

// está activo el TDZ
// console.log(miVariable) // está activo el TDC
// está activo el TDZ
// let miVariable= "Tom" // TDZ termina y ya funciona correctamente

// SIEMPRE USAR LET Y CONST - NUNCA VAR

/**
 * DEFINICIÓN DE FUNCIONES 
 */


// FUNCIÓN NOMBRADA
// function miFuncion(parametro1, parametro2) {
//     return "miResultado"
// }

// miFuncion("atributo 1", "atributo 2")


// // FUNCIÖN ANÓNIMA
// const miFuncionBiz = function(parametro) {
//     return "miOtroResultado"
// }

// miFuncionBiz ("valor1", "valor2")


// // FUNCIÓN ANÓNIMA
// const miFuncionFlecha = parametro1 => {
//     return "miResultado"
// }

// miFuncionFlecha ("valor1", "valor2")



// // FUNCIÓN DE CALLBACK - manda una función como parámetro de otra función

// function sumar(val1, val2) {
//     return val1+val2
// }

// sumar (25,3) // NUMBER es un argumento del parametro de la función sumar
// sumar ("Hola", "Carlos") // STRING es un argumento del parametro de la función sumar
// sumar(["juan", "perez"]) // ARRAY es un argumento del parametro de la función sumar
// sumar ({}) // OBJECT es un argumento del parametro de la función sumar

// const miFuncion2 = () => {
//     return "hola"
// }

// sumar(miFuncion2) // Función es el argumento de la función sumar

// const hacerClick = () => {
//     alert("hice click")
// }

// const misNodos = document.querySelectorAll(".items")

// misNodos.addEventListener("click", hacerClick)



/**
 *  MÉTODOS DE UN ARRAY
 */

const miLista = ["Pablo", "Fran", "María", "Dolores"]

// .forEach()        // No devuelve NADA - undefined
// .map()            // Array de elementos del return
// .filter()         // ARRAY
// .some()           // Boleano
// .find()           // UN UNICO elemento
// .findIndex()      // Indece del elemento que cumpla la condición
// .contain()        
// .every()          // Booleano cuando se cumplen las condiciones en todos los métodos
// .push()



// ---------------------------------------------------
// Template Strings, (comillas francesas, backstrings)
// ---------------------------------------------------