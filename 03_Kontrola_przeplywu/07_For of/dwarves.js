const dwarves = ['Dopey', 'Sneezy', 'Bashful', 'Doc', 'Happy', 'Grumpy', 'Sleepy'];

const x = Object.entries(dwarves[dwarves.length-1]);
console.log(x);



function hailDwarves(dwarfNames) {
  // To jest fraza początkowa. Nie zmieniaj jej!
  let phrase = 'Dinner is ready! Come home ';
for (const dwarfName of dwarfNames) {
    phrase += dwarfName + " ";
}
  return phrase;
}

console.assert(
  hailDwarves(dwarves) === 'Dinner is ready! Come home Dopey, Sneezy, Bashful, Doc, Happy, Grumpy and Sleepy!',
    'Wrong greeting phrase:', hailDwarves(dwarves));
//