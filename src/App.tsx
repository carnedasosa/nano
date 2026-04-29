import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AboutBrand } from './components/AboutBrand'
import { ProductShowcase } from './components/ProductShowcase'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-marker)] font-body">
      <Navbar />
      <main>
        <Hero />
        <AboutBrand />
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  )
}

export default App
