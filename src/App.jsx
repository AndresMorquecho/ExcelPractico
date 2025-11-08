import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Catalogo from "./components/Catalogo"
import Personalizadas from "./components/Personalizadas"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Catalogo />
        <Personalizadas />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}

export default App
