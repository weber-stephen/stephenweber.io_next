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
        <div className="">
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2 className="text-white text-3xl font-extrabold tracking-tight sm:text-4xl">My Personal Products</h2>
                <p className="text-xl text-white">
                  Always trying to create value, keep my skills sharp and make the world a bit better.
                </p>
              </div>
              <ProductList></ProductList>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Products