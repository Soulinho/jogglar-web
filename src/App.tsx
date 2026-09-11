import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl p-8 shadow-2xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium border border-indigo-500/20">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
          Tailwind CSS v4 + Vite + Bun
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-white">
          jogglar-web
        </h1>
        
        <p className="text-slate-400 text-sm">
          Proyecto inicializado correctamente con React, Vite, Tailwind CSS v4 y Bun.
        </p>

        <div className="pt-2">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-semibold transition-all shadow-lg shadow-indigo-600/30 cursor-pointer"
          >
            Contador: {count}
          </button>
        </div>

        <div className="text-xs text-slate-500 pt-4 border-t border-slate-700/60 flex justify-center gap-4">
          <span>⚡ Vite</span>
          <span>⚛️ React</span>
          <span>🎨 Tailwind v4</span>
          <span>🥟 Bun</span>
        </div>
      </div>
    </div>
  )
}

export default App
