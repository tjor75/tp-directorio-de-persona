import './App.css'
import HomePage from './pages/HomePage';
import PersonaPage from './pages/PersonaPage';
import EstadisticasPage from './pages/EstadisticasPage';
import ContactoPage from './pages/ContactoPage';
import NoEncontradoPage from './pages/NoEncontradoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/persona/:id" element={PersonaPage} />
        <Route path="/estadisticas" element={EstadisticasPage} />
        <Route path="/contacto" element={ContactoPage} />
        <Route path="*" element={NoEncontradoPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
