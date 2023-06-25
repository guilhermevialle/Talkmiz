import { MessageT } from '@/types'
import { atom } from 'jotai'

export const totalMessagesAtom = atom<MessageT[]>([])
