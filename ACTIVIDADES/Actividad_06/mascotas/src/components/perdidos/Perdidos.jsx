import "./Perdidos.css"

const [paginaActual, setPaginaActual] = useState("listaDigimons")

const Perdidos = ({items}) => {

    return (
        <>
        <section className="DigimonsPerdidos">
            {
            items.map((item) => {
                return (
            <div onClick={() => setPaginaActual("tarjetaDigimon")} className={`DigimonsPerdidos-Tarjeta ${paginaActual === "tarjetaDigimon" ? "active" : ""}`}>
                <img className="DigimonsPerdidos-Image" src={item.src}/>
                <div className="DigimonsPerdidos-Info">
                    <h1>{item.nombre}</h1>
                    <p>{item.info}</p>
                </div>
            </div>
                )
            })
            }
            
        </section>
        
        </>
    )
}

export default Perdidos;