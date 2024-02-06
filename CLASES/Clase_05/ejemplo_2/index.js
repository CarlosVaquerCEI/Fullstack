console.log("Ejercicio 02")

let alumno = {
    nombre: "Dolores",
    edad: 39
}


let mostrarDatos = (props) => {
    // console.log(props)
    let {nombre, edad} = props
    return (`Mi nombre es ${nombre} y mi edad es ${edad}`)
}

console.log(mostrarDatos(alumno))

let mostrarDatos2 = ({nombre, edad}) => {
    // console.log(props)
    // let {nombre, edad} = props
    return (`Mi nombre es ${nombre} y mi edad es ${edad}`)
}


// console.log(mostrarDatos2({nombre, edad}))