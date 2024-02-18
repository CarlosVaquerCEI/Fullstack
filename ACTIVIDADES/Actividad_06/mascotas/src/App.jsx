import { useState } from 'react'
import './css/App.css'
import ListaDigimons from './listaDigimons/ListaDigimons'
import AñadirDigimon from './añadirDigimon/AñadirDigimon'



const listaDigimonsPerdidos = [
  {
    id: 1,

    nombre: "XV-mon",

    raza: "Dragón",

    images: ["https://wikimon.net/images/archive/6/6a/20200312154918%21Xvmon.jpg", "https://wikimon.net/images/4/48/Xvmon2.jpg", "https://wikimon.net/images/9/93/XV-mon_collectors.png"],

    descripcion: "Digimon de tipo Dragón Mítico. En su pecho tiene la inscripción de una V, junto con dos pequeñas líneas que forman una X.",

    detalles: [
      {
        id: 1, titulo: "Rasgos físicos", contenido: ["Piel azul", "1000 años"]
      },
      {
        id: 2, titulo: "Información del dueño", contenido: ["Davis", "16 años"]
      },
      {
        id: 3, titulo: "Más información", contenido: ["https://www.youtube.com/watch?v=2GiR_VpWxCY"]
      },
    ]
  },

  {
    id: 2,
    nombre: "Garudamon",
    images: ["https://wikimon.net/images/c/c6/Garudamon.jpg", "https://wikimon.net/images/thumb/archive/8/88/20140506075333%21Garudamon_crusader.jpg/120px-Garudamon_crusader.jpg", "https://wikimon.net/images/8/8b/Garudamon_collectors.png"],

    descripcion: "Digimon Tipo Ave Humanoide, cuyo nombre y diseño derivan de Garudá, una gigantesca ave mitológica de las mitologías hindú y budista.",

    detalles: [
      {
        id: 1, titulo: "Rasgos físicos", contenido: ["Piel roja", "12200 años"]
      },
      {
        id: 2, titulo: "Información del dueño", contenido: ["Sora", "14 años"]
      },
      {
        id: 3, titulo: "Más información", contenido: ["https://www.youtube.com/watch?v=58qzB-AfwnY"]
      },
    ]
  },

  {
    id: 3,
    nombre: "Garurumon",
    images: ["https://wikimon.net/images/archive/5/57/20221005055248%21Garurumon.jpg", "https://wikimon.net/images/thumb/archive/e/e1/20140521120452%21Garurumon_re.jpg/120px-Garurumon_re.jpg", "https://wikimon.net/images/f/f1/Garurumon2.jpg"],

    descripcion: "Su apariencia es similar al de un lobo, teniendo la piel blanca con rayas azules, hecha de un material muy duro, y las uñas de color violeta.",

    detalles: [
      {
        id: 1, titulo: "Rasgos físicos", contenido: ["Piel blanca", "300 años"]
      },
      {
        id: 2, titulo: "Información del dueño", contenido: ["Matt", "14 años"]
      },
      {
        id: 3, titulo: "Más información", contenido: ["https://www.youtube.com/watch?v=HTai_0EQYYs"]
      },
    ]
  }

]

const listaDigimonsEncontrados = [

  {
    id: 1,
    nombre: "Gargomon",
    images: ["https://wikimon.net/images/0/02/Galgomon.jpg", "https://wikimon.net/images/9/99/Galgomon3.jpg", "https://wikimon.net/images/7/7d/Galgomon_collectors.png"],

    descripcion: "Digimon Tipo Bestia Humanoide. Su nombre procede del galgo, una raza de perro.",
    detalles: [
      {
        id: 1, titulo: "Rasgos físicos", contenido: ["Piel verde", "100 años"]
      },
      {
        id: 2, titulo: "Información del dueño", contenido: ["Henry", "14 años"]
      },
      {
        id: 3, titulo: "Más información", contenido: ["https://www.youtube.com/watch?v=pOS4pd_-lm8"]
      },
    ]
  },

  {
    id: 2,
    nombre: "Magnadramon",
    images: ["https://wikimon.net/images/2/24/Holydramon.jpg", "https://wikimon.net/images/5/54/Holydramon_crusader.jpg", "https://wikimon.net/images/c/c3/Holydramon2.jpg"],

    descripcion: "La forma definitiva de los Digimon Dios Bestia. Su aspecto heroico recuerda a un soberano del cielo.",

    detalles: [
      {
        id: 1, titulo: "Rasgos físicos", contenido: ["Piel rosa", "100000 años"]
      },
      {
        id: 2, titulo: "Información del dueño", contenido: ["Kary", "11 años"]
      },
      {
        id: 3, titulo: "Más información", contenido: ["https://www.youtube.com/watch?v=lJ90qCN6rPM"]
      },
    ]
  },
]


function App() {

  const [listaActiva, setListaActiva] = useState("perdidos")
  const [newDigimon, setnewDigimon] = useState(false)



  const handleListaActiva = (valor) => {
    setListaActiva(valor)
  }

  const toggleNewDigimon = () => {
    setnewDigimon(!newDigimon)
  }

  return (
    <>

      <main className={`${newDigimon ? "u-blur" : ""}`}>

        {
          listaActiva == "encontrados" && <ListaDigimons digimons={listaDigimonsEncontrados} categoria={listaActiva} />
        }
        {
          listaActiva == "perdidos" && <ListaDigimons digimons={listaDigimonsPerdidos} categoria={listaActiva} />
        }




        <div className='App-btns'>
          <button className='App-btn' onClick={() => handleListaActiva("encontrados")}>
            Encontrados
          </button>
          <button className='App-btn' onClick={() => handleListaActiva("perdidos")}>
            Perdidos
          </button>
          <button className=' App-btn App-btn--add' onClick={toggleNewDigimon}>+</button>

        </div>

      </main>

      <section>
        {
          newDigimon && <AñadirDigimon toggleNewDigimon={toggleNewDigimon} />
        }

      </section>


    </>
  )
}

export default App
