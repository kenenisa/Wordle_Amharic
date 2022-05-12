// <<<<<<< HEAD
// const fs = require("fs");
// const alphabet = JSON.parse(fs.readFileSync("./output.json").toString());
// const data = JSON.parse(fs.readFileSync("./data.json").toString());
// const allWords = JSON.parse(fs.readFileSync("./allWords.json").toString());
// const wordList = data.wordList;
// module.exports = (tried) => {
//   const date = new Date().toDateString().split(" ");
//   const day = date[1] + date[2];
//   const today = JSON.parse(fs.readFileSync("./todaysWord.json").toString())[
//     day
//   ];
//   let chosenWord;
//   if (today) {
//     chosenWord = today.split("");
//   } else {
//     const X = wordList[Math.floor(Math.random() * wordList.length)].word;
//     chosenWord = X.split("");
//     fs.writeFileSync("./todaysWord.json", JSON.stringify({ [day]: X }));
//   }
//   let result = [];
//   if (allWords.wordList.find((word) => word.word === tried.join(""))) {
//     const spitPlace = (arr) => {
//       const place = [];
//       arr.forEach((l) => {
//         for (let i in alphabet) {
//           if (alphabet[i].find((x) => x === l)) {
//             place.push(i);
//           }
//         }
//       });
//       return place;
//     };
//     const chosenPlace = spitPlace(chosenWord);
//     const triedPlace = spitPlace(tried);
//     tried.forEach((t, i) => {
//       if (!t) return;
//       let val = 0;
//       for (let j = 0; j < chosenWord.length; j++) {
//         if (t === chosenWord[j]) {
//           if (i === j) {
//             val = 4;
//             chosenWord[j] = null;
//             break;
//           } else {
//             val = 3;
//             chosenWord[j] = null;
//             break;
//           }
//         }
//       }
//       result[i] = val;
//     });
//     triedPlace.forEach((t, i) => {
//       if (!t) return;
//       if (result[i] === 0) {
//         let val = 0;
//         for (let j = 0; j < chosenPlace.length; j++) {
//           if (t === chosenPlace[j] && chosenWord[j] !== null) {
//             if (i === j) {
//               val = 2;
//               chosenPlace[j] = null;
//               break;
//             } else {
//               val = 1;
//               chosenPlace[j] = null;
//               break;
// =======
const fs = require("fs").promises;
const output = fs
  .readFile("./data/output.json")
  .then((e) => JSON.parse(e.toString()));
const mainFive = fs
  .readFile("./data/mainFive.json")
  .then((e) => JSON.parse(e.toString()));
const allFive = fs
  .readFile("./data/allFive.json")
  .then((e) => JSON.parse(e.toString()));
const mainFour = fs
  .readFile("./data/mainFour.json")
  .then((e) => JSON.parse(e.toString()));
const allFour = fs
  .readFile("./data/allFour.json")
  .then((e) => JSON.parse(e.toString()));
module.exports = async (tried, col) => {
  let wordList = await mainFive;
  let allWords = await allFive;
  const alphabet = await output;
  if (col == 4) {
    wordList = await mainFour;
    allWords = await allFour;
  }
  const date = new Date().toDateString().split(" ");
  const day = date[1] + date[2];
  let today = await fs
    .readFile("./data/todaysWord.json")
    .then((e) => JSON.parse(e.toString()));
  today = today[day];
  let chosenWord;

  if (today) {
    chosenWord = today.split("");
  } else {
    const X = wordList[Math.floor(Math.random() * wordList.length)].word;
    chosenWord = X.split("");
    fs.writeFile("./data/todaysWord.json", JSON.stringify({ [day]: X }));
  }
  let result = [];
  if (allWords.find((word) => word.word === tried.join(""))) {
    const spitPlace = (arr) => {
      const place = [];
      arr.forEach((l) => {
        for (let i in alphabet) {
          if (alphabet[i].find((x) => x === l)) {
            place.push(i);
            break;
          }
        }
      });
      return place;
    };
    const chosenPlace = spitPlace(chosenWord);
    const triedPlace = spitPlace(tried);
    tried.forEach((t, i) => {
      if (!t) return;
      let val = 0;
      for (let j = 0; j < chosenWord.length; j++) {
        if (t === chosenWord[j]) {
          if (i === j) {
            val = 4;
            chosenWord[j] = null;
            break;
          } else {
            val = 3;
            chosenWord[j] = null;
            break;
          }
        }
      }
      result[i] = val;
    });
    console.log(triedPlace, chosenPlace);
    triedPlace.forEach((t, i) => {
      if (!t) return;
      if (result[i] === 0) {
        let val = 0;
        for (let j = 0; j < chosenPlace.length; j++) {
          if (t === chosenPlace[j] && chosenWord[j] !== null) {
            if (i === j) {
              val = 2;
              chosenPlace[j] = null;
              break;
            } else {
              val = 1;
              chosenPlace[j] = null;
              break;
            }
          }
        }
        result[i] = val;
        // >>>>>>> 81a3e650e4871487f50f6b17c71fd1efbac64870
        //     }
        //   }
        // }
        result[i] = val;
      }
    });
  } else {
    result = [-1, -1, -1, -1, -1];
  }
  return result;
};
