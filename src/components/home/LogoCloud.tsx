export default function LogoCloud(): JSX.Element {
  return (
    <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <div className="relative row-start-1 col-start-6 xl:col-start-7 col-span-7 xl:col-span-6">
        <div className="-mx-4 sm:mx-0">
          <h2 className="text-3xl font-extrabold text-zinc-700 dark:text-white">
            Join the world’s most innovative brands
          </h2>
          <div className="flow-root mt-8 lg:mt-10">
            <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img className="h-12" src="/brand/t-mobile.png" alt="T-Mobile" />
              </div>
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img className="h-12" src="/brand/illumina.png" alt="Illumina" />
              </div>
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img className="h-12" src="/brand/deckers.png" alt="Deckers" />
              </div>
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img className="h-12" src="/brand/intuit.png" alt="Intuit" />
              </div>
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img className="h-12" src="/brand/pella.png" alt="Pella" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
