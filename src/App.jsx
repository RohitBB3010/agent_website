import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import FAQS from './components/FAQs/FAQs';
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <div id="categories">
        <Categories />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <FAQS />
      <Contact />
      <Footer />
    </>
  )
}

export default App
