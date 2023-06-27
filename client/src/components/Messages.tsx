'use client'

import { totalMessagesAtom } from '@/contexts/totalMessagesAtom'
import { useAtom } from 'jotai'
import React, { useRef } from 'react'
import Message from './Message'
import { v4 } from 'uuid'
import { useEffect, memo } from 'react'
import { socket } from '@/services/api'
import { userAtom } from '@/contexts/userAtom'
import { MessageT } from '@/types'
import Padding from './responsive/Padding'

function Messages() {
  const [messages, setMessages] = useAtom(totalMessagesAtom)
  const [user] = useAtom(userAtom)
  const messagesBoxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    socket.connect()

    socket.on('send message', (message: MessageT) => {
      if (user) {
        const userMatches = message.id == user?.id

        setMessages((prev) => {
          return [...prev, { ...message, currentUser: userMatches }]
        })
      }
    })

    return () => {
      socket.disconnect()
    }
  }, [user])

  useEffect(() => {
    const scrollToBottom = () => {
      if (messagesBoxRef.current) {
        messagesBoxRef.current.scrollTop = messagesBoxRef.current.scrollHeight
      }
    }

    scrollToBottom()
  }, [messages])

  return (
    <section className='w-full h-[80%] '>
      <Padding>
        <main
          className='w-full h-full flex flex-col overflow-y-auto p-4 shadow-md'
          ref={messagesBoxRef}
        >
          {messages.map((message, index, arr) => {
            return (
              <React.Fragment key={v4()}>
                {index == 0 && <div className='mt-2'></div>}

                <Message message={message} nextMessage={arr[index + 1]} />

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
        </main>
      </Padding>
    </section>
  )
}

export default memo(Messages)
