import allFive from "../Assets/Data/allFive.json";
import allFour from "../Assets/Data/allFour.json";

export default (limit, col) => {
    let allWords = col == 4 ? allFour : allFive
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