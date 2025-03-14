import './App.css'
import Header from './components/header'
import HeroImg from './components/hero-img'
import AboutUs from './components/about-us'
import FeaturedProducts from './components/featured-product'
import Customers from './components/customers'
import Incentive from './components/incentive'
import Subscription from './components/subscription'

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
      <Customers /> 
      <Incentive/>
      <Subscription />


    </main>

    <footer>
      {/* Componente del footer  */}
    </footer>
    
    </>
  )
}

export default App
