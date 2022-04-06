import React, { useState } from 'react'
import "./Body.css";
import Grid from './Grid/Grid';
import Keyboard from './Keyboard/Keyboard';
import WordList from './.././../Assets/structuredMainFive.json'
function Body() {
  const chosenWord = WordList.wordList[Math.floor(Math.random() * WordList.wordList.length)]
  console.log(chosenWord);
  const [words, setWords] = useState([[],[],[],[],[]])
  const [rowCount, setRowCount] = useState(0)
  const [final,setFinal] = useState([])
  const [x,setX] = useState(0)
  const changeWords = (k) => {
    const temp = words
    if (temp[rowCount].length < 5) {
      if (words[rowCount].length) {
        temp[rowCount].push(k)
      } else {
        temp[rowCount] = [k]
      }
      console.log(temp);
      setWords(temp)
      setX(x + 1)
    }
  }
  const handleSubmit = () => {
    if (words[rowCount].length == 5) {
      const joined = words[rowCount].join('')
      const found = WordList.wordList.find(w => w.word == joined)
      console.log(found);
      if (found) { 
        const temp = final
        temp[rowCount] = true
        setFinal(temp)
        setRowCount(rowCount + 1)
      }
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
        <Grid words={words} final={final}/>
        </div>
        <div className="keyboard">
        <Keyboard setWords={changeWords} handleSubmit={handleSubmit} handleBackspace={handleBackspace}/>
        </div>
    </React.Fragment>
  )
}

export default Body