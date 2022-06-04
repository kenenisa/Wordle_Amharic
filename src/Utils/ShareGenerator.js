const ShareGenerator = (evaluated) => {
  const sqr = { 0: "⬛", 1: "🟪", 2: "🟦", 3: "🟨", 4: "🟩" };
  let toBeShared = `     `;
  let exists = false;
  if (evaluated) {
    evaluated.forEach((ev) => {
      if (ev.length) {
        exists = true;
        ev.forEach((e) => {
          toBeShared += sqr[e];
        });
        toBeShared += "\n     ";
      }
    });
  }
  if(!exists){
    return 'ወርድል ' + window.location.href
  }
  return "ወርድል " + localStorage.col + " " + new Date().toDateString()+ "\n\n" + toBeShared
};

export default ShareGenerator
// ወርድል 4 Fri Jun 03 2022

//      🟦🟩⬛🟪
//      ⬛⬛🟦⬛
//      ⬛🟦⬛🟪
//      ⬛⬛⬛⬛
//      🟩🟩🟩🟩
// ወርድል 4 Fri Jun 03 2022

// 🟨⬛⬛⬛
// 🟩🟩🟩🟩
