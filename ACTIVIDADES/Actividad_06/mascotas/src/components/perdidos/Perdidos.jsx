import "./Perdidos.css"




const Perdidos = ({ items }) => {

    const itemsHeader = {
        src: "https://1000logos.net/wp-content/uploads/2021/05/Digimon-logo.png",
        nombre: "Digimon Perdidos",
        info: "Estos son los Digimons que han sido perdidos por el usuario"
    }

    return (
        <>
            <section className="DigimonsPerdidos">

                {
                    items.map((item) => {
                        return (
                            
                            <div className="DigimonsPerdidos-Tarjeta">
                                <img className="DigimonsPerdidos-Image" src={item.src} />
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