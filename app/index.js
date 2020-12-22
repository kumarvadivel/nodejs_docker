const express = require('express')
const app = express();
const APPID = process.env.APPID
const PORT = process.env.PORT || 5000;
app.get('/',(req, res) =>{
    res.send(`appID=${APPID} this is cool`)
})
app.listen(PORT, ()=>{
    console.log(`server running on ${PORT} port`)
})