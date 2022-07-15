const express = require('express')
app = express()
app.use(express.static(__dirname + '/public'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')

})
app.listen(8000, () => {
    console.log('Server up and running')
})