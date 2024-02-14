import {pixar} from "../../deb/deb"
import "./Columns.css"


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
        <div className="Columna">
            <a className="Columna-a" href={href}>
                <img className="Columna-img" src={src} alt={text} />
                
            </a>
            <h2>Careers At Pixar</h2>
        </div>
    </>
            
    )
}

const Columna2 = () => {
    const {href, src, text} = imagenColumna2
    return (
        <>
            <div className="Columna">
                <a className="Columna-a" href={href}>
                                <img className="Columna-img" src={src} alt={text} />
                                
                </a>
                            
                <h2>Elio</h2>
            </div>
        

            


        </>


                
            
    )
}

const Columna3 = () => {
    const {href, src, text} = imagenColumna3
    return (
            
        <>
            <div className="Columna">
                    <a className="Columna-a" href={href}>
                        <img className="Columna-img" src={src} alt={text} />
                        
                    </a>

                    <h2>Win or Lose</h2>
            </div>
    </>
            
    )
}

export default  Columns;