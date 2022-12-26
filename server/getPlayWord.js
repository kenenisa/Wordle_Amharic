const fs = require("fs").promises;

const mainFive = fs
  .readFile("./data/mainFive.json")
  .then((e) => JSON.parse(e.toString()));
const mainFour = fs
  .readFile("./data/mainFour.json")
  .then((e) => JSON.parse(e.toString()));
// const { DailyWords } = require("./models/db.js");

//
module.exports = async () => {
  let wordListFive = await mainFive;
  let wordListFour = await mainFour;
  const date = new Date().toDateString().split(" ");
  const day = date[1] + date[2];
  let today = await fs
    .readFile("./data/todaysWord.json")
    .then((e) => JSON.parse(e.toString()));
  // let today = await DailyWords.findOne({ where: { date: day } });
  // today = { word: today };
  let chosenWord;
  if (today && today.word) {
    chosenWord = today.word;
  } else {
    const five =
      wordListFive[Math.floor(Math.random() * wordListFive.length)].word.split("");
    const four =
      wordListFour[Math.floor(Math.random() * wordListFour.length)].word.split("");
    chosenWord = JSON.stringify({ four, five })
    // DailyWords.create({ date: day, word: chosenWord });
    fs.writeFile("./data/todaysWord.json", JSON.stringify({ [day]: X }));
  }
  return chosenWord
};
