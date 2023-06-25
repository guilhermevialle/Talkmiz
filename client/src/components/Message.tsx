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
        <div className='min-w-[200px] max-w-[230px] w-fit h-fit bg-more-smooth bg-opacity-75 rounded-lg px-3 py-2 shadow-md'>
          <h1
            className={`font-medium text-sm ${
              currentUser ? 'text-violet-300' : 'text-lime-300'
            }`}
          >
            {username}
          </h1>
          <p className='w-full text-[13px] mt-1 font-light text-neutral-300 whitespace-break-spaces'>
            {text}
          </p>
        </div>
        <span
          className={`italic text-[11px] text-zinc-500 mt-0.5 ${
            currentUser ? 'text-right mr-1.5' : 'text-left ml-1.5'
          }`}
        >
          {date.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </span>
      </div>
    </main>
  )
}
