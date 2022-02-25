import React from 'react'
import Banner from '../components/banner'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Meta from '../components/meta'

const HomePage: React.FC = () => {
  return (
    <>
      <Meta />
      <Navbar  />
      <main className="relative overflow-hidden">
        <Banner />
      </main>
      <Footer />
    </>
  )
}

export default HomePage