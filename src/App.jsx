import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import FactorySection from './components/FactorySection'
import ProductsSection from './components/ProductsSection'
import ComingSoonSection from './components/ComingSoonSection'
import WhySection from './components/WhySection'
import ProductSpecsSection from './components/ProductSpecsSection'
import BuySection from './components/BuySection'
import AmbassadorsSection from './components/AmbassadorsSection'
import PartnersSection from './components/PartnersSection'
import ContactsSection from './components/ContactsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />
        <AboutSection />
        <FactorySection />
        <ProductsSection />
        <ComingSoonSection />
        <WhySection />
        <ProductSpecsSection />
        <BuySection />
        <AmbassadorsSection />
        <PartnersSection />
        <ContactsSection />
      </main>

      <Footer />
    </div>
  )
}

export default App