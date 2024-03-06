import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div
        className='hero min-h-screen'
        style={{
          backgroundImage:
            'url(https://i.pinimg.com/originals/69/c4/82/69c4824df4eaeaf53d3954ea855b1019.jpg)',
        }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold'>
              Welcome to &nbsp;R2D2-2DO
            </h1>
            <p className='mb-5'>
              Too many things to do and feeling overwhelmed?
              &nbsp;&nbsp;Organize your 2DO with R2D2!
            </p>
            <Link href='/dashboard'>
              <button className='btn btn-primary'>Continue to Dashboard</button>
            </Link>
          </div>
        </div>
      </div>

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
