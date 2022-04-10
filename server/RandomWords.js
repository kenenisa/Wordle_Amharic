const fs = require('fs')
const allWords = JSON.parse(fs.readFileSync('./allWords.json').toString())
module.exports = (limit) => {
    limit = limit ? limit : 5
    const result = []
    const items = []
    const n = allWords.wordList.length
    //
    const generate = () => {
        const rand = Math.floor(Math.random() * n)
        if (items.find(x => x === rand)) {
            generate()
        } else {
            items.push(rand)
            return rand
        }
    }
    for (let i = 0; i < limit; i++) {
        result.push(allWords.wordList[generate()])
    }
    return result
}