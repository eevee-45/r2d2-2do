import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className='flex p-10'>hi</div>
      <main className='flex min-h-screen flex-col items-center justify-between p-24 pt-0'>
        {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          </div>
        </div> */}

        {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        </div> */}
        <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left'>
          <a
            href='https://starwars.fandom.com/wiki/Main_Page'
            className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Star Wars Trivia!{' '}
              <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about Star Wars.
            </p>
          </a>

          <a
            href='https://swapi.dev'
            className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              SWAPI!{' '}
              <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about Star Wars through a cool API!
            </p>
          </a>

          

          <a
            href='/dashboard'
            className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
            
            rel='noopener noreferrer'
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Dashboard{' '}
              <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              Plan out your To-Dos here!
            </p>
          </a>
        </div>
        <div>Hi</div>
      </main>
    </div>
  );
}
