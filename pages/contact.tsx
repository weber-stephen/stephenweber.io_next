import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Meta from '../components/meta'
import ContactContent from '../components/contact-content'

const Products: React.FC = () => {
  return (
    <>
      <Meta />
      <Navbar  />
      <main className="relative overflow-hidden">
          <ContactContent></ContactContent>
      </main>
      <Footer />
    </>
  )
}

export default Products