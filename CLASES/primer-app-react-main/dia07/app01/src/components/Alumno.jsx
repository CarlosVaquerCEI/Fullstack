export const Alumno = ({nombre, curso}) => {
    // const nombre = "María"
    // const curso = "Full Stack"

    return (
        <>
        <div className="alumno">
            <h2> Hola me llamo {nombre} </h2>
            <p> Estoy cursando {curso} </p>
        </div>
        
        </>
    )
}

export default Alumno;

