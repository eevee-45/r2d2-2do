import { UserButton } from "@clerk/nextjs";

export default function TodosPage() {
  return (
    <div>
      
      <div className='flex p-10'>
      <a href='/' className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>r2d2-2do</a>
      <div className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>
        <UserButton afterSignOutUrl="/"/>
      </div>
      </div>
      <main className='flex min-h-screen flex-col items-center justify-between p-24 pt-0'>
        i am main
      </main>
    </div>
  );
}