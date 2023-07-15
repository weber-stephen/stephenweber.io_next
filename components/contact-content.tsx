export default function ContactContent() {
    return (
      <div className="">
        <div className="max-w-7xl lg:max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-[1.25rem] border bg-white p-10">

            <div className="mb-6 flex items-center space-x-5">
              <span className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 bg-light-base flex h-11 w-11 shrink-0 items-center justify-center rounded-full border">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="fill-jacarta-400">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"></path>
                </svg>
              </span>

              <div>
                <span className="font-display text-jacarta-700 block text-base dark:text-white">Location</span>
                <address className="dark:text-jacarta-300 text-sm not-italic">Orange County, CA USA</address>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <span className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 bg-light-base flex h-11 w-11 shrink-0 items-center justify-center rounded-full border">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="fill-jacarta-400">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M2.243 6.854L11.49 1.31a1 1 0 0 1 1.029 0l9.238 5.545a.5.5 0 0 1 .243.429V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.283a.5.5 0 0 1 .243-.429zM4 8.133V19h16V8.132l-7.996-4.8L4 8.132zm8.06 5.565l5.296-4.463 1.288 1.53-6.57 5.537-6.71-5.53 1.272-1.544 5.424 4.47z"></path>
                </svg>
              </span>

              <div>
                <span className="font-display text-jacarta-700 block text-base dark:text-white">Email</span>
                <span className="hover:text-accent dark:text-jacarta-300 text-sm not-italic">me@stephenweber.io</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  