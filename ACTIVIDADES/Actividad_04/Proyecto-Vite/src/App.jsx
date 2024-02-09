import TarjetaProducto from "./components/TarjetaProducto/TarjetaProducto"
import "./components/TarjetaProducto/TarjetaProducto.css"


function App() {

  const Tarjetas = [

    {
      id: "Tarjeta01",
      nombre: "Bleach 001",
      imagen: "https://m.media-amazon.com/images/I/71uYkRfImHL._AC_UF1000,1000_QL80_.jpg",
      precio: "100$",
      stock: "10",
      descripcion: "Manga Bleach 1"
    },

    {
      id: "Tarjeta02",
      nombre: "Bleach 002",
      imagen: "https://m.media-amazon.com/images/I/618S5rx4nmL._AC_UF1000,1000_QL80_.jpg",
      precio: "200$",
      stock: "0",
      descripcion: "Manga Bleach 2"
    },

    {
      id: "Tarjeta03",
      nombre: "Bleach 003",
      imagen: "https://m.media-amazon.com/images/I/91uA+74c+GL._AC_UF1000,1000_QL80_.jpg",
      precio: "300$",
      stock: "22",
      descripcion: "Manga Bleach 3"
    },

    {
      id: "Tarjeta04",
      nombre: "Bleach 004",
      imagen: "https://m.media-amazon.com/images/I/813vTYiqi6L._AC_UF1000,1000_QL80_.jpg",
      precio: "400$",
      stock: "1",
      descripcion: "Manga Bleach 4"
    },

    {
      id: "Tarjeta05",
      nombre: "Bleach 005",
      imagen: "https://m.media-amazon.com/images/I/91wSrlAhRkL._AC_UF1000,1000_QL80_.jpg",
      precio: "500$",
      stock: "0",
      descripcion: "Manga Bleach 5"
    },
  ]


  return (

    <>

    <div className="contenedorFlex">
      {Tarjetas.map((tarjeta) => (
        <TarjetaProducto

          key={tarjeta.id}
          nombre = {tarjeta.nombre}
          imagen ={tarjeta.imagen}
          precio = {tarjeta.precio}
          stock = {tarjeta.stock}
          descripcion = {tarjeta.descripcion}
          >
            
        </TarjetaProducto>
      ))}
    </div>




      {/* <TarjetaProducto nombre="Bleach 001" imagen="https://m.media-amazon.com/images/I/71uYkRfImHL._AC_UF1000,1000_QL80_.jpg" precio="100$" stock="10">

        A las propiedades de html que escriba aquí, ya sea descripciones o elementos que utilice para el proyecto, se le llama como Children, y se la tendré que añadir en el jsx de Tarjeta Producto para que se muestre y maquetarlas 

        <h2>Manga Bleach</h2>

        <p>"Bleach" es la historia de Ichigo Kurosaki, un estudiante de secundaria con la capacidad de ver fantasmas. Un encuentro con una shinigami (diosa de la muerte) llamada Rukia Kuchiki le otorga poderes shinigami y lo involucra en la lucha contra los Hollows, espíritus malignos que amenazan a los vivos y a los muertos.</p>

      </TarjetaProducto> */}

    </>
  )
}

export default App
