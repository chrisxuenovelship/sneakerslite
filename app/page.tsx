import Navigation from './components/Navigation'
import Hero from './components/Hero'
import USPCards from './components/USPCards'
import Dashboard from './components/Dashboard'
import ProductsGrid from './components/ProductsGrid'
import Presence from './components/Presence'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <USPCards />
      <Dashboard />
      <ProductsGrid />
      <Presence />
      <Footer />
    </main>
  )
}
