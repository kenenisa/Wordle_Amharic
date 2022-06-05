const fs = require("fs").promises;

const mainFive = fs
  .readFile("./data/mainFive.json")
  .then((e) => JSON.parse(e.toString()));
const mainFour = fs
  .readFile("./data/mainFour.json")
  .then((e) => JSON.parse(e.toString()));
const { DailyWords } = require("./models/db.js");

//
module.exports = async (col) => {
  col = col || 5
  let wordList = await mainFive;
  if (col == 4) {
    wordList = await mainFour;
  }
  const date = new Date().toDateString().split(" ");
  const day = date[1] + date[2];
  // let today = await fs
  //   .readFile("./data/todaysWord.json")
  //   .then((e) => JSON.parse(e.toString()));
  col = col.toString()
  let today = await DailyWords.findOne({ where: { date: day, col } });
  // today = { word: today };
  console.log({ today });
  let chosenWord;
  if (today && today.word && today.word.length == col) {
    chosenWord = today.word;
  } else {
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)].word;
    DailyWords.create({ date: day, word: chosenWord, col });
    // fs.writeFile("./data/todaysWord.json", JSON.stringify({ [day]: X }));
  }
  return chosenWord.split("");
};
