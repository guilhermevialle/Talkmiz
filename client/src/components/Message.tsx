import { MessageT } from '@/types'
import { Balancer } from 'react-wrap-balancer'

type Props = {
  message: MessageT
}

export default function Message({ message }: Props) {
  const { date, text, username, currentUser } = message

  return (
    <main className={`w-full h-fit flex ${currentUser && 'justify-end'} `}>
      <div className='w-fit h-fit flex flex-col'>
        <div className='max-w-[245px] h-fit bg-smooth rounded-lg p-3 shadow-md'>
          <h1 className='font-medium text-sm text-rose-400'>{username}</h1>
          <p className='w-full text-[13px] mt-2'>
            <Balancer>{text}</Balancer>
          </p>
        </div>
        <span
          className={`italic text-[12px] text-zinc-500 mt-1 ${
            currentUser ? 'text-right mr-1.5' : 'text-left ml-1.5'
          }`}
        >
          {date.toLocaleTimeString()}
        </span>
      </div>
    </main>
  )
}
