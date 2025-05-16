import Image from "next/image";

export default function Hero() {
    return (
      <section>
        <div className="mx-auto px-4 mb-24">
          <div className="grid h-screen items-center gap-1 grid-cols-2">

          <div
              className="col-span-2 flex h-full flex-col items-center justify-center py-10 md:col-span-1 lg:col-span-1"
            >
              <div className="mt-12 mb-12 max-w-lg mx-auto text-white">
                  <h1 className="block text-white text-6xl font-extrabold">Hey there!</h1>
                <p className="mt-12 mb-12 max-w-lg mx-auto text-3xl text-white">
                  I’m <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">Stephen Weber</span>, a <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">Director of Engineering</span> and <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">Full-Stack Developer</span> with <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">15+ years of experience building scalable, high-impact products</span> in AI, Streaming, IoT, and Crypto.
                </p>
              </div>
            </div>
            <div
              className="relative col-span-2 flex md:h-full flex-col items-center justify-center py-10 md:col-span-1 lg:col-span-1 min-h-[400px]"
            >
              <Image src="/assets/stephen-weber.png" alt="Stephen Weber" 
                layout="fill"
                className="min-h-full"
                objectFit="contain" />
            </div>
            
          </div>
        </div>
      </section>
    )
  }
  