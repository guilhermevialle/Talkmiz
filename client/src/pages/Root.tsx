import React from 'react'
import UsernameRequest from '@/components/UsernameRequest'
import Chat from '@/components/sections/Chat'

export default function Root() {
  return (
    <main className='w-screen h-screen bg-default'>
      <UsernameRequest />
      <Chat />
    </main>
  )
}
