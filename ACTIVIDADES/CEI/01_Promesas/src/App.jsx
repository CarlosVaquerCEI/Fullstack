import { useEffect, useState } from 'react'
import './App.css'
import Fakestore from './components/Fakestore/Fakestore'
import RandomUsers from './components/RandomUsers/RandomUsers'
import DungeonsDragons from './components/D&D/D&D'
import VideoGames from './components/VideoGames/VideoGames'
import Pokemon from './components/Pokemon/Pokemon'

function App() {

  return (
    <>
      <h1>Peticiones en ReactJS</h1>

      <Fakestore/>
      <hr />
      <RandomUsers/>
      <hr />
      <DungeonsDragons/>
      <hr />
      <VideoGames/>
      <hr />
      <Pokemon/>


    </>
  )

}



export default App
