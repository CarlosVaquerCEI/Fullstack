import {pixar} from "../../deb/deb"


const {columns} = pixar
const {imagenColumna1, imagenColumna2, imagenColumna3} = columns

const Columns = () => {
    return (
        <>
        <section className="seccionColumnas">
        <Columna1/>
        <Columna2/>
        <Columna3/>
        </section>

        
        </>
    )
}

const Columna1 = () => {
    const {href, src, text} = imagenColumna1
    return (
            
        <>
        <a className="Header-a" href={href}>
            <img className="Header-img" src={src} alt={text} />
        </a>

        <h2>Careers At Pixar</h2>
    </>
            
    )
}

const Columna2 = () => {
    const {href, src, text} = imagenColumna2
    return (
            <>
                <a className="Header-a" href={href}>
                    <img className="Header-img" src={src} alt={text} />
                </a>

                <h2>Elio</h2>
            </>


                
            
    )
}

const Columna3 = () => {
    const {href, src, text} = imagenColumna3
    return (
            
        <>
        <a className="Header-a" href={href}>
            <img className="Header-img" src={src} alt={text} />
        </a>

        <h2>Win or Lose</h2>
    </>
            
    )
}

export default  Columns;