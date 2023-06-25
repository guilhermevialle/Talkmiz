import Search from '@/components/inputs/Search'
import { BsArrowLeft } from 'react-icons/bs'

export default function Root() {
  return (
    <main className='w-screen h-screen bg-default'>
      <section className='w-full h-[150px] bg-smooth  shadow-md rounded-b-3xl p-8 flex flex-col justify-between'>
        <div className='relative flex items-center justify-center'>
          <i className='absolute left-0'>
            <BsArrowLeft />
          </i>
          <h1 className='text-lg'>Inbox</h1>
        </div>
        <Search />
      </section>
    </main>
  )
}
