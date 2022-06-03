export const endGame = (obj,col) => {
  const results = localStorage['r' + col] ? JSON.parse(localStorage['r' + col]) : [];
  obj.date = new Date().toDateString();
  results.push(obj);
  localStorage['r' + col] = JSON.stringify(results);
};
export const gameData = (col) => {
  const results = localStorage['r' + col]
    ? JSON.parse(localStorage['r' + col])
    : false;
  let totalPlayed = results.length || 0;
  let winCount = 0;
  let winPercent = 0;
  let maxStreak = 0;
  let currentStreak = 0;
  const progress = new Array(6).fill(0);
  const today = new Array(6).fill(false);
  if (results) {
    winCount = results.filter((r) => r.win).length;
    winPercent = Math.floor((winCount * 100) / totalPlayed);
    results.forEach((result) => {
      if (result.win) {
        progress[result.rowCount] += 1;
        currentStreak += 1;
      } else {
        currentStreak = 0;
      }
      maxStreak = Math.max(currentStreak, maxStreak);
    });
    const last = results[totalPlayed - 1];
    today[last.rowCount] = last.win;
  }

  return {
    totalPlayed,
    winCount,
    winPercent,
    maxStreak,
    currentStreak,
    progress,
    today,
  };
};
export const getLocal = (col) => {
  const mdr = new Array(6).fill([])
  let result = { words:mdr, rowCount:0, final:[], evaluated:mdr, finished:false, highlight:{} }

  if(localStorage[col]){
    result = JSON.parse(localStorage[col])
  }

  return result
};
export const setLocal = (col,obj) => {
  localStorage[col] = JSON.stringify(obj)
};
