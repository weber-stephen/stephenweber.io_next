import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Meta from '../components/meta'
import ProductList from '../components/product-list'

const Products: React.FC = () => {
  return (
    <>
      <Meta />
      <Navbar  />
      <main className="relative overflow-hidden">
          <ProductList></ProductList>
      </main>
      <Footer />
    </>
  )
}

export default Products