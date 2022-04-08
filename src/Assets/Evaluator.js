import data from "./structuredMainFive.json";
import alphabet from "./keysList.json";

// 4 correct place and letter
// 3 correct letter but wrong place
// 2 correct family of latter
// 1 correct family of latter but wrong place
// 0 incorrect word
const wordList = data.wordList;
const chosenWordX =
  wordList[Math.floor(Math.random() * wordList.length)].word.split("");
console.log(chosenWordX);
const Evaluator = (triedX) => {
  const tried = triedX;
  const chosenWord = chosenWordX;
  const result = [];
  const spitPlace = (arr) => {
    const place = [];
    arr.forEach((l) => {
      for (let i in alphabet) {
        if (alphabet[i].find((x) => x === l)) {
          place.push(i);
        }
      }
    });
    return place;
  };
  const chosenPlace = spitPlace(chosenWord);
  const triedPlace = spitPlace(tried);
  chosenWord.forEach((chosen, i) => {
    if (chosen || chosenPlace[i]) {
      let val = 0;
      tried.forEach((t, j) => {
        if (t && chosen && t === chosen) {
          if (i === j) {
            console.log(t, chosen, 4);
            val = 4;
          } else {
            console.log(t, chosen, 3);
            val = 3;
          }
          chosenWord[i] = null;
          tried[j] = null;
          chosenPlace[i] = null;
          triedPlace[j] = null;
        } else if (
          chosenPlace[i] &&
          triedPlace[j] &&
          chosenPlace[i] === triedPlace[j]
        ) {
          if (i === j) {
            console.log(triedPlace[j], chosenPlace[i], 2);
            val = 2;
          } else {
            console.log(triedPlace[j], chosenPlace[i], 1);
            val = 1;
          }
          chosenWord[i] = null;
          tried[j] = null;
          chosenPlace[i] = null;
          triedPlace[j] = null;
        }
      });
      result.push(val);
    }
  });
  console.log(chosenWordX, chosenWord, tried, chosenPlace, triedPlace, result);
  console.log("this is " + result);

  return result;
};
export default Evaluator;
