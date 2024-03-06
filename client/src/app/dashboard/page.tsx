'use client'
import { UserButton } from "@clerk/nextjs";
import { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai'
import Feed from './Feed'

export default function TodosPage() {
  // declare feed object variable
  const feedData = {
    checklists: [
      {
        name: 'morning',
        tasks: [
          {
            content: 'i am content',
            done: true
          },
          {
            content: 'i am more content',
            done: false
          }
        ]
      }
    ]
  };
  
  // fetch feed on load (useEffect with []?)
    // populate feed object
  useEffect(()=>{console.log('loaded')},[])

  async function handleCreateChecklist() {
    // sending a post request to backend
    console.log('increment like count');
    // add a checklist to the feed variable
  }
  return (
    <div>
      
      <div className='flex p-10'>
      <a href='/' className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>R2D2-2DO</a>
      <div className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>
        <UserButton afterSignOutUrl="/"/>
      </div>
      </div>
      <main className='flex  flex-col items-center justify-between p-24 pt-0 pb-0'>
        i am main
        <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left'>
        <button className='btn btn-primary w-25' onClick={handleCreateChecklist}>
          Create a To-Do List
          <AiOutlinePlus className='ml-2' size={15}/>
        </button>
        <Feed feedData={feedData}/>
        </div>
      </main>
    </div>
  );
}