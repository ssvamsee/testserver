const app = require('express')()

app.use('/',(req,res)=>{
    res.send('hello Vamsee ')
})


app.listen(4000,()=>console.log('Server.....'))