import MessageInput from '@/components/inputs/MessageInput'
import { MessageT } from '@/types'
import React from 'react'
import UsernameRequest from '@/components/UsernameRequest'
import Messages from '@/components/Messages'

export default function Root() {
  return (
    <main className='w-screen h-screen bg-default'>
      <UsernameRequest />
      <section className='w-full h-[10%] bg-smooth  shadow-md rounded-b-3xl p-8 flex flex-col justify-between relative z-10 border-b-[1px] border-b-neutral-700'>
        <div className='flex items-center justify-center'>
          <h1 className='text-lg'>Chat</h1>
        </div>
      </section>
      <Messages />
      <section className='w-full h-[10%] bg-default-plus flex items-center'>
        <MessageInput />
      </section>
    </main>
  )
}
