// Generamos una constante llamada cuadros que recoja la información de nuestro documento html que contengan la clase .cuadro
const cuadros = document.querySelectorAll(".cuadro");
// Generamos una constante llamada controles que recoja la información de nuestro documento html que sean inputs
const controles = document.querySelectorAll("input");
// Generamos una constante llamada codigoColor que recoja la información de nuestro documento html que sea el párrafo
const codigoColor = document.querySelector("p");

// Creamos una función llamada hexadecimal que contiene tres parámetros: r,g,b
function hexadecimal(r,g,b){

    //Trabajo dentro de la función
    // Declaro una variable let llamada código con un Array vacío
    let codigo = [];
    // Genero un bucle for en el que declaro el primer parámetro i declarando su valor igual a 0. Le decimos que si es menor que la longitud del array argumento (arguments devuelve el vector con todos los elementos y los recorre uno por uno), y se le haga un sumatorio
    for(let i = 0; i < arguments.length; i++){

        // Dentro del bucle, lo que tiene que realizar hasta que termine es que a la variable codigo se le añada un número (Number menor que 16 se le añade un 0 delante 01,02,03...0a,0b,0c, luego ya no, luego ya sería 10,11,12...1a,1b,1c....) más otro número que es el valor de i en base 16 ya que es un número hexadecimal (eso quiere decir que .tostring(16) de un numoero por ejemplo 126 nos dará un texto que sea por ejemplo 3f, si no le decimos la base hexadecimal por deefecto tiene la decimal, y si le agregamos tostring nos escribirá 126 en texto)
        codigo.push((Number(arguments[i]) < 16 ? "0" : "") + Number(arguments[i]).toString(16));
    }

    // Le decimos que nos devuelva un template string (concatenación) con un return. Nos devolverá # junto con el valor de la variable código que nos del for y lo convierta en una cadena con .join
    return `#${codigo.join("")}`;
}

// Ejecuta una función con .forEach para el elemento controles con dos parámetros, control e indice
controles.forEach(function(control,indice){

    // En el parámetro control, cuando modifique el valor del input, se ejecutará la función
    control.addEventListener("input",function(){

        // esto quiere decir que el elemento 0 de cuadros (el que se genera la mezcla de colores) es igual a los valores que le den los controles de los cuadros de la sección de abajo
        cuadros[0].style.backgroundColor = hexadecimal(controles[0].value,controles[1].value,controles[2].value);
        
        // lo mismo que el anterior, lo único que en este caso al tener en la hoja de estilos el filtro de diferencia, el párrafo saldrá con el color inverso al fondo
        codigoColor.innerHTML = hexadecimal(controles[0].value,controles[1].value,controles[2].value);

        // indice para seleccionar el elemento específico. Esta línea sirve para dar el valor específico de cada caja
        cuadros[indice + 1].style.backgroundColor = hexadecimal(indice == 0 ? control.value : 0,indice == 1 ? control.value : 0,indice == 2 ? control.value : 0);

    });
});

// Creo una constante que recoja la información de mi elemento id del botón
const guardarColor = document.getElementById("guardarColor")

// Genero un addEventListener para cuando se haga un click se haga la función:
guardarColor.addEventListener("click", function(){

    

    let ul = document.createElement("ul")
    let li = document.createElement("li")

    return "Nuevo Color Guardado"

})

console.log("Nuevo Color Guardado")
console.log(guardarColor)




