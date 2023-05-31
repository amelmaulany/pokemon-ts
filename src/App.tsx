import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Router, { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import Pokemon from './pages/pokemon';
import Evolution from './pages/evolution'
import Items from './pages/items'
import Moves from './pages/moves'
import PokemonDetails from './pages/pokemon/details'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokemon />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
        <Route path="/evolution" element={<Evolution />} />
        <Route path="/items" element={<Items />} />
        <Route path="/moves" element={<Moves />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
