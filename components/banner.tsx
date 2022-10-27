import Link from 'next/link';

export default function Banner() {
    return (
      <main className="mt-16 mx-auto px-4 sm:mt-24 pb-24 mb-24">
        <div className="text-center">

          <h1 className="text-6xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">Hey there!</span>
          </h1>
          <p className="mt-12 mb-12 max-w-lg mx-auto text-white text-3xl">
            My name is <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">Stephen Weber</span> and I am a <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">full-stack developer</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">manager</span> that specializes in building products. <br/><br/>Currently helping crypto communities communicate at <span className="underline"><a href="https://dispatch.xyz/">dispatch.xyz</a></span>
          </p>
          
        </div>
      </main>
    )
  }
  