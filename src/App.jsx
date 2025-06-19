import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import PersonaPage from './pages/PersonaPage';
import EstadisticasPage from './pages/EstadisticasPage';
import ContactoPage from './pages/ContactoPage';
import NoEncontradoPage from './pages/NoEncontradoPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/persona/:id" element={<PersonaPage />} />
          <Route path="/estadisticas" element={<EstadisticasPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="*" element={<NoEncontradoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
