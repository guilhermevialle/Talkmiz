'use client'

import { totalMessagesAtom } from '@/contexts/totalMessagesAtom'
import { useAtom } from 'jotai'
import React from 'react'
import Message from './Message'
import { randomUUID } from 'crypto'
import { v4 } from 'uuid'

export default function Messages() {
  const [messages] = useAtom(totalMessagesAtom)

  console.log({ messages })

  return (
    <section className='w-full h-[80%] flex flex-col overflow-y-auto p-4 shadow-md'>
      {messages.map((message, index, arr) => {
        return (
          <React.Fragment key={v4()}>
            {index == 0 && <div className='mt-2'></div>}

            <Message message={message} />

            {arr[index + 1] &&
            arr[index + 1].currentUser !== message.currentUser ? (
              <div className='my-4'></div>
            ) : (
              <div className='my-0.5'></div>
            )}

            {index == arr.length - 1 && <div className='mt-2'></div>}
          </React.Fragment>
        )
      })}
    </section>
  )
}
