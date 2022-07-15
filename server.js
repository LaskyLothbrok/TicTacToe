const express = require('express')
const port = process.env.PORT || 8000
app = express()
app.use(express.static(__dirname + '/public'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')

})
app.listen(port, () => {
    console.log('Server up and running')
})