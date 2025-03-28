const socketIO = require("socket.io")
const http = require("http")
const { askAi } = require("../api/open-ai");

export default function () {
  this.nuxt.hook('render:before', () => {
    const server = http.createServer(this.nuxt.renderer.app)
    const io = socketIO(server)

    this.nuxt.server.listen = () => new Promise(resolve => server.listen(process.env.PORT || 3000, process.env.HOST || 'localhost', resolve))

    this.nuxt.hook('close', () => new Promise(server.close))

    io.on('connection', (socket) => {
      socket.on('fetch-requirements', async function (data) {
        const stepCb = (step) => socket.emit('update-step', step)
        const resultCb = (result) => socket.emit('update-result', result)

        try {
          await askAi(data.query, stepCb, resultCb)
        } catch (error) {
          console.error(error)
          resultCb({error: true})
        }
      })
    })
  })
}