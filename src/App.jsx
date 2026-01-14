import './App.css'
import Header from './components/layout/header'
import HeroImg from './components/sections/hero-img'
import AboutUs from './components/sections/about-us'
import FeaturedProducts from './components/sections/featured-product'
import Customers from './components/sections/customers'
import Incentive from './components/sections/incentive'
import Subscription from './components/sections/subscription'
import Footer from './components/layout/footer'

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
      <Footer />
    </footer>
    
    </>
  )
}

export default App
