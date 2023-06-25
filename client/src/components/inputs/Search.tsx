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
      <i className='mr-3'>
        <FiSearch />
      </i>
      <input
        className='flex-auto h-full bg-transparent outline-none placeholder:text-sm text-sm'
        type='text'
        placeholder='Find...'
      />
    </form>
  )
}
