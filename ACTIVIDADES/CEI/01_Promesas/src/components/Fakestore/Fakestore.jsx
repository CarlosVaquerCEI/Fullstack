import { useState, useEffect } from "react";
import "./Fakestore.css"

const Fakestore = () => {

const [shop, setShop] = useState([])

const dataFakestore = async () => {
    try {
       const response = await fetch(`https://fakestoreapi.com/products`)
       const data = await response.json()
       setShop(data)
    }
    catch (error) {
        console.error(error)
    }
}

useEffect(() => {
    dataFakestore()
},[])

return (
    <>
    
    <h3>FakeStore API</h3>

    <div className="ListaProductos">
        {
            shop.map((producto) => {
                return (
                    <>
                    <div className="ListaProductos-producto">
                        <h4 className="ListaProductos-producto-nombre">{producto.title}</h4>
                        <h5 className="ListaProductos-producto-categoria" >{producto.category}</h5>
                        <h5>{producto.price}€</h5>

                        <img className="ListaProductos-producto-imagen" src={producto.image} alt="product" />
                    </div>
                    </>
                )
            })
        }
    </div>
    
    </>
)


}

export default Fakestore;