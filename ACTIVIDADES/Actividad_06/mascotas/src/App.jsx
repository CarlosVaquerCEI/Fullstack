import { useState } from 'react'
import './css/App.css'
import Perdidos from './components/perdidos/Perdidos'

function App() {

  const listaDigimonsPerdidos = [
    {id: 1, nombre: "XV-mon", src:"https://wikimon.net/images/archive/6/6a/20200312154918%21Xvmon.jpg",info: "Digimon de tipo Dragón Mítico. En su pecho tiene la inscripción de una V, junto con dos pequeñas líneas que forman una X.", perdido: true},
    {id: 2, nombre: "Garudamon", src:"https://wikimon.net/images/c/c6/Garudamon.jpg",info: "Digimon Tipo Ave Humanoide, cuyo nombre y diseño derivan de Garudá, una gigantesca ave mitológica de las mitologías hindú y budista, que usa poderes sobrenaturales del fuego y de la luz.", perdido: true},
    {id: 3, nombre: "Garurumon", src:"https://wikimon.net/images/archive/5/57/20221005055248%21Garurumon.jpg",info: "Su apariencia es similar al de un lobo, teniendo la piel blanca con rayas azules, hecha de un material muy duro, y las uñas de color violeta. Tiene en su espalda y en su cabeza un diseño algo similar a unas plumas. Su cola es larga y enroscada.", perdido: true},
    {id: 4, nombre: "Gargomon", src:"https://wikimon.net/images/0/02/Galgomon.jpg",info: "Digimon Tipo Bestia Humanoide. Su nombre procede del galgo, una raza de perro.", perdido: true},
    {id: 5, nombre: "Magnadramon", src:"https://wikimon.net/images/2/24/Holydramon.jpg",info: "La forma definitiva de los Digimon Dios Bestia. Su aspecto heroico recuerda a un soberano del cielo. Pocas personas lo han visto, y no está nada claro dónde suele encontrarse.", perdido: true},

  ]

  return (
    <>
      <Perdidos items={listaDigimonsPerdidos}/>
      
    </>
  )
}

export default App
