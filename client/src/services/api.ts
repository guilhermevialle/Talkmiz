import { io } from 'socket.io-client'

const server = {
  dev: 'http://localhost:9090',
  prod: 'https://talkonline-app-api.vercel.app',
}

export const socket = io(server.prod, {
  withCredentials: true,
})
