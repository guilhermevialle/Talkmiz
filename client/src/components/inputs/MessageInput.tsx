'use client'

import { BiSolidSend } from 'react-icons/bi'

export default function MessageInput() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <form
      className='w-full h-10 rounded-xl flex items-center px-4'
      onSubmit={onSubmit}
    >
      <input
        className='flex-auto h-full bg-transparent outline-none placeholder:text-[13px] placeholder:text-zinc-400 placeholder:text-opacity-75 text-[13px] border-[0.1rem] border-backdrop-blue rounded-lg px-2 shadow-md'
        type='text'
        placeholder='Type your message...'
      />
      <button className='ml-3 bg-backdrop-blue p-2 rounded-md text-blue hover:text-opacity-70 transition-all shadow-md'>
        <BiSolidSend size={22} />
      </button>
    </form>
  )
}
