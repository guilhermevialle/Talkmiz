import { MessageT } from './types'
import express from 'express'
import { Server } from 'socket.io'
import http from 'http'

const port = process.env.PORT || 9090
const expressServer = express()
const httpServer = http.createServer(expressServer)

const origins = ['http://localhost:3000', 'https://talkmiz.vercel.app']

const io = new Server(httpServer, {
  cors: {
    origin: origins,
    credentials: true,
  },
})

expressServer.use(express.urlencoded({ extended: true }))
expressServer.use(express.json())

const users: MessageT[] = []

expressServer.get('/', (req, res) => {
  res.sendStatus(200)
})

io.on('connection', (socket) => {
  console.log('connected')

  socket.on('send message', (message: MessageT) => {
    const { username, text, id, date } = message

    console.log({ message })
    io.emit('send message', { username, text, id, date })
  })

  socket.on('users', (user) => {
    users.push(user)
    io.emit('users', users)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
    users.pop()
  })
})

httpServer.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
