const server = require('./config/loader')
const PORT = process.env.PORT || 3000
const colors = require('colors')

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`.green)
})