const express = require ('express')
const app = express()

app.listen(5000, (req, res) =>{
    console.log("server running at PORT 5000")

})

app.get('/',(req,res)=>{
    res.send('This is the backend for Wealth portfolio website')
})


