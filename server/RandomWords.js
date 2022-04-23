const fs = require('fs').promises
const allFive = fs.readFile('./data/allFive.json').then(e => JSON.parse(e.toString()))
const allFour = fs.readFile('./data/allFour.json').then(e => JSON.parse(e.toString()))
module.exports = async (limit, col) => {
    let allWords = col == 4 ? await allFour : await allFive
    limit = Math.floor(limit ? limit : 5)
    const result = []
    const items = []
    const n = allWords.length
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
        result.push(allWords[generate()])
    }
    return result
}