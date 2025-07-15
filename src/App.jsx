import './App.css'
import Awards from './components/awards/Awards'
import Banner from './components/banner/Banner'
import Delivery from './components/delivery/Delivery'
import Navbar from './components/navbar/Navbar'
import Services from './components/services/Services'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Awards />
      <Delivery />
    </>
  )
}

export default App
