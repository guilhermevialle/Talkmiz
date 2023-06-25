import Message from '@/components/Message'
import MessageInput from '@/components/inputs/MessageInput'
import { MessageT } from '@/types'
import React from 'react'
import { randomUUID } from 'crypto'
import UsernameRequest from '@/components/UsernameRequest'

const userMessages: MessageT[] = [
  {
    username: 'guivialle',
    text: 'Oi, seja bem vindo ao meu app de mensagens',
    date: new Date(),
    currentUser: true,
  },
  {
    username: 'user4982',
    text: 'ear blz parece que ta bem feito mesmo em kkkk',
    date: new Date(),
    currentUser: false,
  },
  {
    username: 'user4982',
    text: 'continua assim que teu app vai ficar top mano, tenta dar uma refinada nos detalhes tlgd',
    date: new Date(),
    currentUser: false,
  },
  {
    username: 'guivialle',
    text: 'vou fazer isso sim',
    date: new Date(),
    currentUser: true,
  },
  {
    username: 'guivialle',
    text: 'preciso fazer conectar aplicacao com websocket ainda',
    date: new Date(),
    currentUser: true,
  },
  {
    username: 'guivialle',
    text: 'tmj',
    date: new Date(),
    currentUser: true,
  },
]

export default function Root() {
  return (
    <main className='w-screen h-screen bg-default'>
      <UsernameRequest />
      <section className='w-full h-[10%] bg-smooth  shadow-md rounded-b-3xl p-8 flex flex-col justify-between relative z-10 border-b-[1px] border-b-neutral-700'>
        <div className='flex items-center justify-center'>
          <h1 className='text-lg'>Chat</h1>
        </div>
      </section>
      <section className='w-full h-[80%] flex flex-col overflow-y-auto p-4 shadow-md'>
        {userMessages.map((message, index, arr) => {
          return (
            <React.Fragment key={randomUUID()}>
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
      <section className='w-full h-[10%] bg-default-plus flex items-center'>
        <MessageInput />
      </section>
    </main>
  )
}
