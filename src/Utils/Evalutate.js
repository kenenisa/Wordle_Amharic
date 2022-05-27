import allFive from '../Assets/Data/allFive.json'
import allFour from '../Assets/Data/allFour.json'
import output from '../Assets/Data/output.json'

export default (tried, col) => {
    let allWords =  allFive
    const alphabet =  output;
    if (col == 4) {
        allWords =  allFour
    }

    let chosenWord = window.pw

    let result = []
    if (allWords.find(word => word.word === tried.join(''))) {
        const spitPlace = (arr) => {
            const place = []
            arr.forEach(l => {
                for (let i in alphabet) {
                    if (alphabet[i].find(x => x === l)) {
                        place.push(i)
                        break
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
        console.log(triedPlace, chosenPlace);
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