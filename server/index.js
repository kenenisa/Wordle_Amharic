const express = require('express')
const cors = require('cors')
const fs = require('fs')
const evaluate = require('./Evaluate.js')
const random = require('./RandomWords.js')


const app = express()
app.use(cors())
app.get('/', (req, res) => {
    res.send('OK')
})
// 4 correct place
// 3 correct letter but wrong place
// 2 correct family of latter
// 1 correct family of latter but wrong place
// 0 incorrect word
app.get('/evaluate', (req, res) => {
    const tried = req.query.tried.split('');
    res.json({ result:evaluate(tried) })
})
app.get('/random',(req,res)=>{
    const l = Number(req.query.limit)
    res.json(random(l))
})




const PORT = 5000
app.listen(PORT,  () => {
    console.log('Server up and running at localhost:' + PORT);
})