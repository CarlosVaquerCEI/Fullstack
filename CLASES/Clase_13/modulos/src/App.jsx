import { useState } from 'react'
import './css/App.css'
import MenuResponsive from './components/menuResponsive/MenuResponsive'
import Tabs from './components/tabs/Tabs'
import Accordion from './components/accordion/Accordion'
import LightBox from './components/lightsBox/LightBox'
import Slider from './components/slider/Slider'

function App() {

  const items = [
    {id: 1, titulo: "Pregunta 1", contenido: "Contenido Pregunta 1"},
    {id: 2, titulo: "Pregunta 2", contenido: "Contenido Pregunta 2"},
    {id: 3, titulo: "Pregunta 3", contenido: "Contenido Pregunta 3"}
]

  const listaImagenes = ["imagen1.png", "imagen2.png", "imagen3.png",]

  return (
    <>
      <MenuResponsive/>
      <br />
      <Tabs/>
      <br />
      <Accordion items={items}/>
      <br />
      <LightBox/>
      <br />
      <Slider items={listaImagenes}/>

      {/* 

      <Tabs />
      <Accordion />
      <LightsBox />
      <Slider />
      
      */}
    </>
  )
}

export default App
