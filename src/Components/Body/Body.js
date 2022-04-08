import React, { useEffect, useState } from 'react'
import "./Body.css";
import Grid from './Grid/Grid';
import Keyboard from './Keyboard/Keyboard';
function Body() {
  const [words, setWords] = useState([[], [], [], [], []])
  const [rowCount, setRowCount] = useState(0)
  const [final, setFinal] = useState([]);
  const [evaluated, setEvaluated] = useState([]);
  const [x, setX] = useState(0);
  const changeWords = (k) => {
    const temp = words
    if (temp[rowCount].length < 5) {
      if (words[rowCount].length) {
        temp[rowCount].push(k)
      } else {
        temp[rowCount] = [k]
      }
      setWords(temp)
      setX(x + 1)
    }
  }

  const handleSubmit = async () => {
    if (words[rowCount].length === 5) {
      // const joined = words[rowCount].join('')
      // const found = WordList.wordList.find(w => w.word == joined)
      // console.log(found);
      // if (found) { 

      // }
      // const originalWord = words[rowCount]

      const evf = await fetch('http://localhost:5000/evaluate?tried=' + words[rowCount].join('')).then(e=>e.json())
      const ev = evf.result
      if (ev) {
        const temp = final
        temp[rowCount] = true
        const evt = evaluated;
        evt[rowCount] = ev
        setEvaluated(evt)
        setFinal(temp)
        setRowCount(rowCount + 1)
        setX(x + 1)
      }
      // console.log(ev);
    }
  }
  const handleBackspace = () => {
    const temp = words
    temp[rowCount].pop()
    setWords(temp)
    setX(x + 1)
  }
  return (
    <React.Fragment>
      <div className="grid">
        <Grid words={words} final={final} evaluated={evaluated} />
      </div>
      <div className="keyboard">
        <Keyboard setWords={changeWords} handleSubmit={handleSubmit} handleBackspace={handleBackspace} />
      </div>
    </React.Fragment>
  )
}

export default Body