const express = require('express')
const app = express()
const host = '127.0.0.1'
const port = 3000

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/views/index.html')
})

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/public/views/contact.html')
})

app.get('*',(req,res)=>{
    res.sendFile(__dirname+'/public/views/404.html')
})

app.listen(port, host, () =>{
    console.log(`Server is running at http://${host}:${port}`)
})