import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import WhySection from './components/WhySection'
import ProductsSection from './components/ProductsSection'
import BuySection from './components/BuySection'
import AmbassadorsSection from './components/AmbassadorsSection'
import ContactsSection from './components/ContactsSection'
import Footer from './components/Footer'
import FactorySection from './components/FactorySection'

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />
        <AboutSection />
        <WhySection />
        <ProductsSection />
        <BuySection />
        <AmbassadorsSection />
        <FactorySection />
        <ContactsSection />
      </main>

      <Footer />
    </div>
  )
}

export default App