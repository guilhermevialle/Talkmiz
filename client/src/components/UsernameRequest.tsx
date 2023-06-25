'use client'

import UsernameInput from './inputs/UsernameInput'
import { useAtom } from 'jotai'
import { userAtom } from '@/contexts/userAtom'
import { Balancer } from 'react-wrap-balancer'

export default function UsernameRequest() {
  const [user] = useAtom(userAtom)

  return !user ? (
    <section className='absolute w-screen h-screen bg-default flex items-center justify-center z-20 flex-col p-4 gap-y-3'>
      <h1 className='text-xl'>
        <Balancer>Whats your name (or nickname)?</Balancer>
      </h1>
      <UsernameInput />
    </section>
  ) : (
    <></>
  )
}
