import io from 'socket.io-client'
import feathers from '@feathersjs/client'

const socket = io('http://localhost:3030')
const server = feathers()

server.configure(feathers.socketio(socket))
server.configure(feathers.authentication({
  storage: window.localStorage
}))

export default server
