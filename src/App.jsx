import './App.css'
import Header from './components/header'
import HeroImg from './components/hero-img'
import AboutUs from './components/about-us'
import FeaturedProducts from './components/featured-product'

function App() {

  return (
    <>

    <header> 
      <Header/>
    </header>

    <main>
      <HeroImg/>
      <AboutUs />
      <FeaturedProducts />
      {/* Componente de beneficios */}
      {/* Componente de incentivo */}

    </main>

    <footer>
      {/* Componente del footer  */}
    </footer>
    
    </>
  )
}

export default App
