'use client'

import { totalMessagesAtom } from '@/contexts/totalMessagesAtom'
import { userAtom } from '@/contexts/userAtom'
import { socket } from '@/services/api'
import { useAtom } from 'jotai'
import { useEffect, useRef, memo } from 'react'
import { BiSolidSend } from 'react-icons/bi'

function MessageInput() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [user] = useAtom(userAtom)
  const [messages, setMessages] = useAtom(totalMessagesAtom)

  const sendMessageRequest = (message: any) => {
    socket.emit('send message', message)
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    sendMessage()
  }

  async function sendMessage() {
    if (inputRef.current) {
      const text = inputRef.current.value

      if (text) {
        if (user) {
          const newMessage = {
            id: user?.id,
            date: new Date(),
            text,
            username: user?.username ?? 'random-user',
          }

          await sendMessageRequest(newMessage)
          inputRef.current.value = ''
        }
      }
    }
  }

  return (
    <form
      className='w-full h-10 rounded-xl flex items-center px-4'
      onSubmit={onSubmit}
    >
      <input
        ref={inputRef}
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

export default memo(MessageInput)
