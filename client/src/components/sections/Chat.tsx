'use client'

import { useAtom } from 'jotai'
import Messages from '../Messages'
import MessageInput from '../inputs/MessageInput'
import Padding from '../responsive/Padding'
import { userAtom } from '@/contexts/userAtom'

export default function Chat() {
  const [user] = useAtom(userAtom)

  if (!user || !user.username) return null

  return (
    <>
      <section className='w-full h-[10%] bg-smooth  shadow-md rounded-b-3xl p-8 flex flex-col justify-between relative z-10 border-b-[1px] border-b-neutral-700'>
        <div className='flex items-center justify-center'>
          <h1 className='text-lg'>Talkmiz Chat</h1>
        </div>
      </section>

      <Messages />

      <section className='w-full h-[10%] bg-default-plus'>
        <Padding>
          <main className='w-full h-full flex items-center'>
            <MessageInput />
          </main>
        </Padding>
      </section>
    </>
  )
}
