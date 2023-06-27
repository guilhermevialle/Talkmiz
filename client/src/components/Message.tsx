import { MessageT } from '@/types'
import { Balancer } from 'react-wrap-balancer'

type Props = {
  message: MessageT
  nextMessage: MessageT | null
}

export default function Message({ message, nextMessage }: Props) {
  const { date, text, username, currentUser } = message

  return (
    <main className={`w-full h-fit flex ${currentUser && 'justify-end'} `}>
      <div className='w-fit h-fit flex flex-col'>
        <div className='min-w-[34px] max-w-[240px] w-fit h-fit bg-more-smooth bg-opacity-75 rounded-lg px-3 py-1.5 shadow-md'>
          {!currentUser && (
            <h1
              className={`font-medium text-[13px] ${
                currentUser ? 'text-violet-300' : 'text-lime-300'
              }`}
            >
              {username}
            </h1>
          )}

          <p className='w-[90%] text-[13px] font-light text-neutral-300 whitespace-normal'>
            {text}
            {nextMessage?.currentUser !== currentUser && (
              <span
                className={`italic text-[10px] text-zinc-500 mt-0.5 float-right pl-3`}
              >
                {new Date(date)
                  .toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                  })
                  .replace(/ AM| PM/g, '')}
              </span>
            )}
          </p>
        </div>
      </div>
    </main>
  )
}
