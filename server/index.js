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
    const col = req.query.col
    evaluate(tried, col ? col : 5).then(result=>{
        console.log('Eval',result);
        res.json({ result })
    })
})
app.get('/random', (req, res) => {
    const l = Number(req.query.limit)
    const col = req.query.col
    random(l, col ? col : 5).then(result=>{
        console.log('Random',result);
        res.json(result)
    })
})




const PORT = 5000
app.listen(PORT, () => {
    console.log('Server up and running at localhost:' + PORT);
})