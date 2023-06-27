import { io } from 'socket.io-client'

const server = {
  dev: 'http://localhost:9090',
  vercel: 'https://talkonline-app-api.vercel.app',
  render: 'https://latest-chat-api.onrender.com',
}

export const socket = io(server.render, {
  withCredentials: true,
})
