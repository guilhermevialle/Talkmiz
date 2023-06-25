import MessageInput from '@/components/inputs/MessageInput'
import Search from '@/components/inputs/Search'
import { BsArrowLeft } from 'react-icons/bs'

export default function Root() {
  return (
    <main className='w-screen h-screen bg-default'>
      <section className='w-full h-[10%] bg-smooth  shadow-md rounded-b-3xl p-8 flex flex-col justify-between'>
        <div className='relative flex items-center justify-center'>
          <i className='absolute left-0'>
            <BsArrowLeft size={21} />
          </i>
          <h1 className='text-lg'>Person name</h1>
        </div>
      </section>
      <section className='w-full h-[80%]'></section>
      <section className='w-full h-[10%] bg-default-plus flex items-center'>
        <MessageInput />
      </section>
    </main>
  )
}
