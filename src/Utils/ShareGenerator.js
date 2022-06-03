export default () => {
  const evaluated = localStorage.evaluated
    ? JSON.parse(localStorage.evaluated)
    : false;
  const sqr = { 0: "⬛", 1: "🟪", 2: "🟦", 3: "🟨", 4: "🟩" };
  let toBeShared = `     `;
  if (evaluated) {
    evaluated.forEach((ev) => {
      if (ev.length) {
        ev.forEach((e) => {
          toBeShared += sqr[e];
        });
        toBeShared += "\n     ";
      }
    });
  }
  return "ወርድል " + localStorage.col + " " + new Date().toDateString()+ "\n\n" + toBeShared

  console.log(toBeShared);
};

// ወርድል 4 Fri Jun 03 2022

//      🟦🟩⬛🟪
//      ⬛⬛🟦⬛
//      ⬛🟦⬛🟪
//      ⬛⬛⬛⬛
//      🟩🟩🟩🟩
     
