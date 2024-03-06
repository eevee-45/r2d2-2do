import Image from 'next/image';

export default function Home() {
  return (
    <div >
      <div className='p-10 text-center'>R2D2-2DO</div>
      <main className='flex-1 flex flex-col items-center justify-center p-24 pt-0'>
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
        <div className='flex justify-center '>R2D2 Here</div>
      </main>
    </div>
  );
}
