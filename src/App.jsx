import './App.css'
import Awards from './components/awards/Awards'
import Banner from './components/banner/Banner'
import Contact from './components/contact/Contact'
import Delivery from './components/delivery/Delivery'
import Navbar from './components/navbar/Navbar'
import Services from './components/services/Services'
import Testimonial from './components/testimonial/Testimonial'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Awards />
      <Delivery />
      <Testimonial />
      <Contact />
    </>
  )
}

export default App
