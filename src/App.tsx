import { useState } from 'react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/HomePage'

function App() {
  const [currentPage, setCurrentPage] = useState('inicio')

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      {/* Header Limpio (Sin TopBar) */}
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* Página de Inicio (Hero + Blog) */}
      {currentPage === 'inicio' && <HomePage />}

      {/* Footer en 4 Columnas Fiel al Diseño */}
      <Footer />
    </div>
  )
}

export default App
