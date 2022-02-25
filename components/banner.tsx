import Link from 'next/link';

export default function Banner() {
    return (
      <main className="mt-16 mx-auto px-4 sm:mt-24 pb-24 mb-24">
        <div className="text-center">

          <h1 className="text-6xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">Hey there!</span>
          </h1>
          <p className="mt-12 mb-12 max-w-lg mx-auto text-white text-3xl">
            My name is <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">Stephen Weber</span> and I am a <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">full-stack developer</span> that specializes in building products.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link href="/tokens" >
                <a className="inline-block p-[2px] rounded-full bg-gradient-to-r  from-blue-500 to-purple-600 hover:text-white active:text-opacity-75 focus:ring" >
                  <span className="block px-8 py-3 text-lg font-medium text-white rounded-full hover:bg-transparent shadow-lg shadow-indigo-500/50">
                    Checkout some of my own products
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    )
  }
  