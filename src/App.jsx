import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import Home from './pages/Home'
import Catalog from './pages/Catalog'

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Catalog" element={<Catalog />} />
      </Routes>

      <Footer /> 
    </Router>
  )
}

export default App