

const TarjetaProducto = ({ nombre, imagen, precio, stock, descripcion, children }) => {



    return (
        <>
            <div className="tarjetaProducto">

                <h1>{nombre}</h1>
                <img src={imagen} alt={nombre} />

                <div className="info-manga">
                    {children}
                    {descripcion}
                    <br />
                    {precio}
                    <br />
                    <div className="stock">
                        {stock}
                    </div>
                    

                    {
                        (stock > 0) ? (<button>Comprar</button>) : (<span>Sin Stock</span>)
                    }
                </div>
            </div>
        </>
    )
}

export default TarjetaProducto;