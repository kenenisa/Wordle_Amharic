const fs = require("fs").promises;

const mainFive = fs
  .readFile("./data/mainFive.json")
  .then((e) => JSON.parse(e.toString()));
const mainFour = fs
  .readFile("./data/mainFour.json")
  .then((e) => JSON.parse(e.toString()));
//
module.exports = async (col) => {
  let wordList = await mainFive;
  if (col == 4) {
    wordList = await mainFour;
  }
  const date = new Date().toDateString().split(" ");
  const day = date[1] + date[2];
  let today = await fs
    .readFile("./data/todaysWord.json")
    .then((e) => JSON.parse(e.toString()));
  today = { word: today[day] };
  // let today = await DailyWords.findOne({ where: { date: day } })
  // console.log(await DailyWords.findOne({ where: { date: day } }));
  // today = today[day]
  console.log({ today });
  let chosenWord;
  if (today.word && today.word.length == col) {
    chosenWord = today.word.split("");
  } else {
    const X = wordList[Math.floor(Math.random() * wordList.length)].word;
    chosenWord = X.split("");
    // DailyWords.create({ date: day, word: X })
    fs.writeFile("./data/todaysWord.json", JSON.stringify({ [day]: X }));
  }
  return chosenWord;
};
