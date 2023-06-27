'use client'

import UsernameInput from './inputs/UsernameInput'
import { useAtom } from 'jotai'
import { userAtom } from '@/contexts/userAtom'
import { Balancer } from 'react-wrap-balancer'
import Padding from './responsive/Padding'

export default function UsernameRequest() {
  const [user] = useAtom(userAtom)

  return !user ? (
    <section className='absolute w-screen h-screen bg-default top-0 left-0'>
      <Padding>
        <main className='w-full h-full flex items-center justify-center z-20 flex-col p-4 gap-y-3'>
          <h1 className='text-xl'>
            <Balancer>Enter your name or nickname</Balancer>
          </h1>
          <UsernameInput />
        </main>
      </Padding>
    </section>
  ) : (
    <></>
  )
}
