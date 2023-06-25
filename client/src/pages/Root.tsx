import Message from '@/components/Message'
import MessageInput from '@/components/inputs/MessageInput'
import { MessageT } from '@/types'
import { BsArrowLeft } from 'react-icons/bs'

const userMessages: MessageT[] = [
  {
    username: 'guivialle',
    text: 'Oi, seja bem vindo ao meu app de mensagens',
    date: new Date(),
    currentUser: true,
  },
  {
    username: 'guivialle',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cum eum tempora possimus molestias minima nostrum assumenda at vero.',
    date: new Date(),
    currentUser: false,
  },
  {
    username: 'guivialle',
    text: 'Corrupti alias reprehenderit accusamus deserunt. Asperiores neque provident aliquid nam molestiae!',
    date: new Date(),
    currentUser: true,
  },
  {
    username: 'guivialle',
    text: 'Corrupti alias reprehenderit accusamus deserunt. Asperiores neque provident aliquid nam molestiae!',
    date: new Date(),
    currentUser: true,
  },
  {
    username: 'guivialle',
    text: 'Corrupti alias reprehenderit accusamus deserunt. Asperiores neque provident aliquid nam molestiae!',
    date: new Date(),
    currentUser: true,
  },
  {
    username: 'guivialle',
    text: 'Corrupti alias reprehenderit accusamus deserunt. Asperiores neque provident aliquid nam molestiae!',
    date: new Date(),
    currentUser: true,
  },
]

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
      <section className='w-full h-[80%] flex flex-col overflow-y-auto gap-y-4 p-3'>
        {userMessages.map((message, index, arr) => {
          return (
            <>
              {index == 0 && <div className='mt-2'></div>}
              <Message message={message} />
              {index == arr.length - 1 && <div className='mt-2'></div>}
            </>
          )
        })}
      </section>
      <section className='w-full h-[10%] bg-default-plus flex items-center'>
        <MessageInput />
      </section>
    </main>
  )
}
