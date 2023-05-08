const express = require('express')
const app = express()

app.get('/',  (req, res) => {
    res.send('Hello World From EBS')
})

const PORT = 8080 || process.env.PORT_NAME

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})