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
    console.log(chosenWord);
    console.log(tried);
    const result = []
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
    chosenWord.forEach((chosen, i) => {
        if (chosen || chosenPlace[i]) {
            let val = 0
            tried.forEach((t, j) => {
                if (t && chosen && t === chosen) {
                    if (i === j) {
                        console.log(t, chosen, 4);
                        val = 4
                    } else {
                        console.log(t, chosen, 3);
                        val = 3
                    }
                    chosenWord[i] = null
                    tried[j] = null
                    chosenPlace[i] = null
                    triedPlace[j] = null
                } else if (chosenPlace[i] && triedPlace[j] && chosenPlace[i] === triedPlace[j]) {
                    if (i === j) {
                        console.log(triedPlace[j], chosenPlace[i], 2);
                        val = 2
                    } else {
                        console.log(triedPlace[j], chosenPlace[i], 1);
                        val = 1
                    }
                    chosenWord[i] = null
                    tried[j] = null
                    chosenPlace[i] = null
                    triedPlace[j] = null
                }
            });
            result.push(val)
        }
    });
    console.log(chosenWord, tried, result, chosenPlace, triedPlace);

    return result
}