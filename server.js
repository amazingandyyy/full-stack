const NodeServer = require('@amazingandyyy/node-server')
const bodyParser = require('@amazingandyyy/body-parser')
const logger = require('@amazingandyyy/server-logger')
const app = new NodeServer()

app.use(logger('dev'))
app.use(bodyParser)

app.on('get', '/', (req, res) => {
  res.send(200)
})

app.on('post', '/ping', (req, res) => {
  res.send(req.body)
})

app.start({ port: '4000' })
