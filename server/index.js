const express = require('express')
const cors = require('cors')
const evaluate = require('./Evaluate.js')
const random = require('./RandomWords.js')
const db = require('./models/db.js');
const getPlayWord = require('./getPlayWord.js')


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
app.get('/getPlayWord',(req,res)=>{
  const col = req.query.col || 5
  getPlayWord(col).then(result=>{
    res.send(result)
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



app.set("port", process.env.PORT || 5000);
app.set("host", process.env.HOST || "localhost");

// db.sequelize.sync().then(function () {
  app.listen(app.get("port"), function () {
    console.log(
      "%s server listening at http://%s:%s",
      process.env.NODE_ENV,
      app.get("host"),
      app.get("port")
    );
  });
// })