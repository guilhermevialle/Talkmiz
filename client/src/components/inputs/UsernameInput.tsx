'use client'

import { useRef, useState } from 'react'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { userAtom } from '@/contexts/userAtom'
import { useAtom } from 'jotai'
import { v4 } from 'uuid'
import { z } from 'zod'

export default function UsernameInput() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState<string>('')
  const [user, setUser] = useAtom(userAtom)

  const allowedChars = z
    .string()
    .max(30, 'Maximum input is 30.')
    .min(3, 'Minimum input is 3.')
    .regex(
      /^[a-zA-Z0-9\s]*$/,
      'Only alphabet and numeric characters are allowed.'
    )

  function validateInput(input: string): boolean {
    try {
      allowedChars.parse(input)
      return true
    } catch (error) {
      return false
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setUsernameRequest()
  }

  function setUsernameRequest() {
    if (inputRef.current) {
      const value = inputRef.current.value
      const isValidInput = validateInput(value)

      if (isValidInput) {
        setUser({ id: v4(), username: value })
      }
    }
  }

  return (
    <div className='w-full flex flex-wrap gap-y-1.5'>
      <form
        className={`w-full h-11 bg-more-smooth rounded-md shadow-sm flex items-center px-4 ${
          !validateInput(inputValue)
            ? 'border-[1px] border-rose-500 border-opacity-50'
            : 'border-[1px] border-transparent'
        }`}
        onSubmit={onSubmit}
      >
        <input
          ref={inputRef}
          onChange={(e) => setInputValue(e.target.value)}
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
