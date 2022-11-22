import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Hero from '../components/hero'
// import About from '../components/about'
// import Example from '../components/blocks'

const HomePage: React.FC = () => {
  return (
    <>
      <Meta />
      <img src="/assets/gradient_dark.jpg" alt="gradient dark" />
      <div className="absolute top-0 w-full">
        <Navbar  />
        <main className="relative overflow-hidden">
          <Hero />
          {/* <Example /> */}
          {/* <About /> */}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default HomePage