'use client';
import { UserButton } from '@clerk/nextjs';
import { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Feed from './Feed';
import Link from 'next/link';

{
  /* <header class="max-w-[1400px] flex flex-1 flex-col z-20">
	<div
		class="fixed top-0 bg-background/55 backdrop-blur-sm mx-auto w-full flex items-center justify-between p-4 py-4"
	></div> */
}

// class="relative bg-background text-white text-sm sm:text-base flex flex-col min-h-screen"

export default function TodosPage() {
  const [feedData, setFeedData] = useState({
    checklists: [
      {
        name: 'morning',
        tasks: [
          {
            content: 'i am content',
            done: true,
          },
          {
            content: 'i am more content',
            done: false,
          },
        ],
      },
    ],
  })
  

  // fetch feed on load (useEffect with []?)
  // populate feed object
  useEffect(() => {
    //get our user's data
    async function getUserData() {
      const response = await fetch('NOSQL.Server')

      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }

      return response.json()
    }

    getUserData()
    console.log('loaded');
  }, []);

  async function handleCreateChecklist() {
    // sending a post request to backend
    console.log('increment like count');
    // add a checklist to the feed variable
  }
  //max-w-[500px] flex flex-1 flex-col z-20
  return (
    <div className='h-screen bg-center' style={{
      backgroundImage:
        'url(https://i.pinimg.com/originals/fb/2d/19/fb2d193eeacd7483b652d86d155112d8.jpg)',
    }}>
      <header className='flex flex-1 flex-row z-20 items-center justify-center content-center'>
        <div className='navbar bg-neutral text-neutral-content rounded-full flex items-center justify-center max-w-[1000px] z-20 mx-auto'>
          <a className="btn btn-ghost text-xl" href='/'>R2D2-2DO</a>
          <div className='navbar-end'>
            <UserButton afterSignOutUrl='/' />
          </div>
        </div>
      </header>
      <main className='flex  flex-col items-center justify-between p-24 pt-0 pb-0 text-primary'>
        i am main
        <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left'>
          <button
            className='btn btn-primary w-25'
            onClick={handleCreateChecklist}
          >
            Create a To-Do List
            <AiOutlinePlus className='ml-2' size={15} />
          </button>
          <Feed feedData={feedData} />
        </div>
      </main>
    </div>
  );
}
