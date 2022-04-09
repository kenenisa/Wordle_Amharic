const fs = require('fs')
const alphabet = JSON.parse(fs.readFileSync('./output.json').toString())
const data = JSON.parse(fs.readFileSync('./data.json').toString())
const wordList = data.wordList;
module.exports = (tried) => {
    const today = JSON.parse(fs.readFileSync('./todaysWord.json').toString()).Apr8
    let chosenWord;
    if (today) {
        chosenWord = today.split('')
    } else {
        const X = wordList[Math.floor(Math.random() * wordList.length)].word;
        chosenWord = X.split('')
        fs.writeFileSync('./todaysWord.json', JSON.stringify({ Apr8: X }))
    }
    let result = []
    if (wordList.find(word => word.word === tried.join(''))) {
        const spitPlace = (arr) => {
            const place = []
            arr.forEach(l => {
                for (let i in alphabet) {
                    if (alphabet[i].find(x => x === l)) {
                        place.push(i)
                    }
                }
            })
            return place
        }
        const chosenPlace = spitPlace(chosenWord)
        const triedPlace = spitPlace(tried)
        tried.forEach((t, i) => {
            if (!t) return;
            let val = 0
            for (let j = 0; j < chosenWord.length; j++) {
                if (t === chosenWord[j]) {
                    if (i === j) {
                        val = 4
                        chosenWord[j] = null
                        break;
                    } else {
                        val = 3
                        chosenWord[j] = null
                        break;
                    }
                }
            }
            result[i] = val
        })
        triedPlace.forEach((t, i) => {
            if (!t) return;
            if (result[i] === 0) {
                let val = 0
                for (let j = 0; j < chosenPlace.length; j++) {
                    if (t === chosenPlace[j] && chosenWord[j] !== null) {
                        if (i === j) {
                            val = 2
                            chosenPlace[j] = null
                            break;
                        } else {
                            val = 1
                            chosenPlace[j] = null
                            break;
                        }
                    }
                }
                result[i] = val
            }
        })
    } else {
        result = [-1, -1, -1, -1, -1]
    }
    return result
}