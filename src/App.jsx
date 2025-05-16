import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './view/Home'
import AboutPage from './view/AboutPage'
import ContactPage from './view/ContactPage'
import ProductPage from './view/ProductPage'   
import Garages from './components/Garages'
import NotFound from './components/common/NotFound'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={ <AboutPage/>} />
          <Route path="/contact" element={<ContactPage/> } />
          <Route path="/product" element={ <ProductPage/>} />
          <Route path="/garage" element={<Garages/> } />
          <Route path="*" element={<NotFound/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
