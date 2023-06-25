'use client'

import { FiSearch } from 'react-icons/fi'

export default function Search() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <form
      className='w-full h-11 bg-more-smooth rounded-xl shadow-sm flex items-center px-4'
      onSubmit={onSubmit}
    >
      <i className='mr-3 text-blue'>
        <FiSearch />
      </i>
      <input
        className='flex-auto h-full bg-transparent outline-none placeholder:text-sm placeholder:text-blue placeholder:text-opacity-75 text-sm'
        type='text'
        placeholder='Search...'
      />
    </form>
  )
}
