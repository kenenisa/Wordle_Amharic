const Evaluate = require("./Evaluate");
const data = [
    // { q: ['መ', 'ሰ', 'ከ', 'ረ', 'ነ'], a: [4, 2, 4, 4, 0] },
    { q: ['በ', 'ሰ', 'መ', 'ባ', 'ከ'], a: [0, 2, 3, 0, 3] },
    // { q: ['መ', 'ስ', 'ከ', 'ረ', 'ም'], a: [4, 4, 4, 4, 4] },
    // { q: ['ኮ', 'ሂ', 'ወ', 'አ', 'ዘ'], a: [1, 0, 0, 0, 0] },
    // { q: ['ፀ', 'አ', 'ዘ', 'አ', 'ዘ'], a: [0, 0, 0, 0, 0] },
]
// 4 correct place
// 3 correct letter but wrong place
// 2 correct family of latter
// 1 correct family of latter but wrong place
// 0 incorrect word
function match(a, b) {
    return a.join('') === b.join('')
}
const wrong = []
data.forEach(d => {
    const ev = Evaluate(d.q)
    console.log(ev);
    if (!match(ev, d.a)) {
        wrong.push(ev.toString() + ' -> ' + d.q.toString() + ' -> ' + d.a.toString())
    }
})
console.log({ wrong });