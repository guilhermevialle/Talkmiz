import { io } from 'socket.io-client'

export const socket = io('https://talkonline-app-api.vercel.app', {
  withCredentials: true,
  extraHeaders: {
    'Access-Control-Allow-Origin': 'true',
  },
})
