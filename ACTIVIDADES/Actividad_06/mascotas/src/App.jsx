import { useState } from 'react'
import './css/App.css'
import Perdidos from './components/perdidos/Perdidos'
import MenuResponsive from './components/menuresponsive/MenuResponsive'
import Tarjeta from './components/tarjetadigimon/TarjetaDigimon'

function App() {


  const listaDigimonsPerdidos = [
    { id: 1, nombre: "XV-mon", src: "https://wikimon.net/images/archive/6/6a/20200312154918%21Xvmon.jpg", info: "Digimon de tipo Dragón Mítico. En su pecho tiene la inscripción de una V, junto con dos pequeñas líneas que forman una X.", perdido: true },
    { id: 2, nombre: "Garudamon", src: "https://wikimon.net/images/c/c6/Garudamon.jpg", info: "Digimon Tipo Ave Humanoide, cuyo nombre y diseño derivan de Garudá, una gigantesca ave mitológica de las mitologías hindú y budista.", perdido: true },
    { id: 3, nombre: "Garurumon", src: "https://wikimon.net/images/archive/5/57/20221005055248%21Garurumon.jpg", info: "Su apariencia es similar al de un lobo, teniendo la piel blanca con rayas azules, hecha de un material muy duro, y las uñas de color violeta.", perdido: true },
    { id: 4, nombre: "Gargomon", src: "https://wikimon.net/images/0/02/Galgomon.jpg", info: "Digimon Tipo Bestia Humanoide. Su nombre procede del galgo, una raza de perro.", perdido: true },
    { id: 5, nombre: "Magnadramon", src: "https://wikimon.net/images/2/24/Holydramon.jpg", info: "La forma definitiva de los Digimon Dios Bestia. Su aspecto heroico recuerda a un soberano del cielo.", perdido: true },

  ]

  const infoTarjetasDigimon = [
    {
      id: 1,
      images: ["https://wikimon.net/images/archive/6/6a/20200312154918%21Xvmon.jpg", "https://wikimon.net/images/4/48/Xvmon2.jpg", "https://wikimon.net/images/9/93/XV-mon_collectors.png"],
      name: "XV-Mon",
      description: "",
      caracteristicas: {
        color: "Azul",
        peso: "",
        tipo: "Dragón",
        compañero: "Davis"
      },
      infoCompañero: {
        sexo: "Masculino",
        edad: 16,
        nacionalidad: "",
        otros: ""
      },
      infoExtra: "https://www.youtube.com/watch?v=2GiR_VpWxCY"
    },
    {
      id: 2,
      images: ["https://wikimon.net/images/c/c6/Garudamon.jpg", "https://wikimon.net/images/thumb/archive/8/88/20140506075333%21Garudamon_crusader.jpg/120px-Garudamon_crusader.jpg", "https://wikimon.net/images/8/8b/Garudamon_collectors.png"],
      name: "Garudamon",
      description: "",
      caracteristicas: {
        color: "Rojo",
        peso: "",
        tipo: "Ave",
        compañero: "Sora"
      },
      infoCompañero: {
        sexo: "Femenino",
        edad: 18,
        nacionalidad: "",
        otros: ""
      },
      infoExtra: "https://www.youtube.com/watch?v=HTai_0EQYYs"
    },
    {
      id: 3,
      images: ["https://wikimon.net/images/archive/5/57/20221005055248%21Garurumon.jpg", "https://wikimon.net/images/thumb/archive/e/e1/20140521120452%21Garurumon_re.jpg/120px-Garurumon_re.jpg", "https://wikimon.net/images/f/f1/Garurumon2.jpg"],
      name: "Garurumon",
      description: "",
      caracteristicas: {
        color: "Azul",
        peso: "",
        tipo: "Animal",
        compañero: "Matt"
      },
      infoCompañero: {
        sexo: "Masculino",
        edad: 20,
        nacionalidad: "",
        otros: ""
      },
      infoExtra: "https://www.youtube.com/watch?v=58qzB-AfwnY"
    },
    {
      id: 4,
      images: ["https://wikimon.net/images/0/02/Galgomon.jpg", "https://wikimon.net/images/9/99/Galgomon3.jpg", "https://wikimon.net/images/7/7d/Galgomon_collectors.png"],
      name: "Gargomon",
      description: "",
      caracteristicas: {
        color: "Verde",
        peso: "",
        tipo: "Bestia",
        compañero: "Henry"
      },
      infoCompañero: {
        sexo: "Masculino",
        edad: 18,
        nacionalidad: "",
        otros: ""
      },
      infoExtra: "https://www.youtube.com/watch?v=pOS4pd_-lm8"
    },
    {
      id: 5,
      images: ["https://wikimon.net/images/2/24/Holydramon.jpg", "https://wikimon.net/images/5/54/Holydramon_crusader.jpg", "https://wikimon.net/images/c/c3/Holydramon2.jpg"],
      name: "Magnadramon",
      description: "",
      caracteristicas: {
        color: "Rosa",
        peso: "",
        tipo: "Dios",
        compañero: "Kari"
      },
      infoCompañero: {
        sexo: "Femenino",
        edad: 13,
        nacionalidad: "",
        otros: ""
      },
      infoExtra: "https://www.youtube.com/watch?v=lJ90qCN6rPM"
    }
  ]

  const [paginaActual, setPaginaActual] = useState("tarjetaDigimon")

  return (
    <>


      {paginaActual === "listaDigimons" && <MenuResponsive />}
      {paginaActual === "listaDigimons" && <Perdidos items={listaDigimonsPerdidos} />}

      {paginaActual === "tarjetaDigimon" && <MenuResponsive />}
      {paginaActual === "tarjetaDigimon" && <Tarjeta items={infoTarjetasDigimon} />}

      {paginaActual === "episodios" && <Episodios />}


    </>
  )
}

export default App
