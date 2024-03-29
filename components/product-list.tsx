const products = [
    {
      name: 'BitRook',
      type: 'Data Cleaning Desktop App. Recently been acquired.',
      imageUrl:
        '/products/bitrook.jpg',
      website: 'https://bitrook.com'
    },
    {
      name: 'Voteboards',
      type: 'Give a voice to your product\'s users. Recently been acquired.',
      imageUrl:
        '/products/voteboards.png',
      website: 'https://voteboards.com/'
    },
    {
      name: 'Bootstrap DApp',
      type: 'An open source bootstrap decentralized web app',
      imageUrl:
        '/products/bootstrap_dapp.png',
      website: 'https://bootstrap-dapp.vercel.app/'
    },
    {
      name: 'Lion Leads',
      type: 'Increase sales instead of looking for emails',
      imageUrl:
        '/products/lionleads.png',
      website: 'https://www.youtube.com/watch?v=hX7BGeZ4ZpA'
    },
    {
      name: 'Trendy Tags',
      type: 'Find trending and dying hashtags',
      imageUrl:
        '/products/trendytags.png',
      website: 'https://www.youtube.com/watch?v=rYF044j8zoc'
    },
    {
      name: 'BabyKit',
      type: 'Baby Tracker with ML App',
      imageUrl:
        '/products/babykit.gif',
      website: 'https://www.youtube.com/watch?v=SnCJ6g48EHs'
    }
    
  ]
  
  export default function ProductList() {
    return (
      <ul
        role="list"
        className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
      >
        {products.map((product) => (
          <li key={product.name}>
              <a href={product.website} target="_blank" rel="noopener noreferrer">
                  <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                  <img className="object-cover shadow-lg rounded-lg" src={product.imageUrl} alt="" />
                  </div>

                  <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                      <h3 className="text-white">{product.name}</h3>
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">{product.type}</p>
                  </div>
                  <ul role="list" className="flex space-x-5">
                      <li>
                          <span className="sr-only">Link</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                      </li>
                  </ul>
                  </div>
              </div>
              </a>
          </li>
        ))}
      </ul>
    )
  }
  