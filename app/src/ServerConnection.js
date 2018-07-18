import io from 'socket.io-client'
import feathers from '@feathersjs/client'

const socket = io('http://d6ad13bb.ngrok.io/')
const server = feathers()

server.configure(feathers.socketio(socket))
server.configure(feathers.authentication({
  storage: window.localStorage
}))

export default server
