'use client'

import { useRef } from 'react'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { userAtom } from '@/contexts/userAtom'
import { useAtom } from 'jotai'
import { v4 } from 'uuid'

export default function UsernameInput() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [user, setUser] = useAtom(userAtom)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setUsernameRequest()
  }

  function setUsernameRequest() {
    if (inputRef.current) {
      const value = inputRef.current.value

      if (value && value.length > 2) {
        setUser({ id: v4(), username: value })
      }
    }
  }

  return (
    <div className='w-full flex flex-wrap gap-y-1.5'>
      <form
        className='w-full h-11 bg-more-smooth rounded-md shadow-sm flex items-center px-4'
        onSubmit={onSubmit}
      >
        <input
          ref={inputRef}
          className='flex-auto h-full bg-transparent outline-none placeholder:text-sm 
        placeholder:italic placeholder:text-blue placeholder:text-opacity-60 text-sm'
          type='text'
          placeholder='Example: johndoe99'
        />
      </form>
      <button
        className='flex-auto flex justify-center bg-backdrop-blue p-2 px-2.5 rounded-md text-blue hover:text-opacity-70 transition-all shadow-md'
        onClick={setUsernameRequest}
      >
        <BsArrowRightCircleFill size={22} />
      </button>
    </div>
  )
}
