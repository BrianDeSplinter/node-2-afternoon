const express = require('express')
const app = express()
const ctrl = require('./controllers/messages_controller')
const SERVER_PORT = 3001

app.use(express.json())
app.use(express.static('public' + '/../public/build'))

app.get('/api/messages', ctrl.readMessages)
app.post('/api/messages', ctrl.createMessage)
app.put('/api/messages/:id', ctrl.updateMessage)
app.delete('/api/messages/:id', ctrl.deleteMessage)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))