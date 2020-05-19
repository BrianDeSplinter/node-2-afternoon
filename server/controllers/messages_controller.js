const messages = []
let id = 0

module.exports ={
    readMessages: (req, res) => {
        res.status(200).send(messages)
    },

    createMessage: (req, res) => {
        const {text, time} = req.body
        newMessage = {text, time, id}
        messages.push(newMessage)
        id++
        res.status(200).send(messages)
    },

    updateMessage: (req, res) => {
        const message_id = req.params.id
        const {text} = req.body
        const index = messages.findIndex(e => e.id == message_id)
        
        let oldMessage = messages[index]
        messages[index] = {
            text: text || oldMessage.text, 
            time: oldMessage.time,
            id: oldMessage.id
        }
        res.status(200).send(messages)
    },

    deleteMessage: (req, res) => {
        const {message_id} = req.params
        const index = messages.findIndex(e => e.id === +message_id)

        messages.splice(index,1)
        res.status(200).send(messages)
    }
}