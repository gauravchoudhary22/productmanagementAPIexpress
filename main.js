const express = require('express')
const app = express();
const routes = require('./routes/router')
app.use(express.json())

app.use('/',routes)

app.listen(3000,()=>{
    console.log('Server running at 3000')
})