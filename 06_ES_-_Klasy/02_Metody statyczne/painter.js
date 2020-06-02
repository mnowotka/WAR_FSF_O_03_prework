import colors from 'colors';

const PALETTE = [
  'red',
  'blue',
  'green',
  'magenta',
  'yellow',
  'cyan',
  'white'
];

/**
 * Paints colorful checkerboard
 */
class Painter {
  constructor(paintCharacter) {
    this.paintCharacter = paintCharacter;
  }

  // ADD STATIC PROPERTY AND STATIC METHOD HERE!

  paint(size) {
    let checkerboard = '';
    for (let i = 0; i < size; i++) {
      let checkerboardRow = '';
      for (let j = 0; j < size; j++) {
        let nextPaletteColor = 'white';
        if (Painter.getPalette) {
          const paletteCount = Painter.getPalette().length;
          const nextPaletteColorIndex = Math.floor(Math.random() * Math.floor(paletteCount));
          nextPaletteColor = Painter.getPalette()[nextPaletteColorIndex];
        }

        checkerboardRow += (i + j) % 2 === 0 ?
          colors[nextPaletteColor](this.paintCharacter) :
          ' ';
      }

      checkerboard = checkerboard + '\n' + checkerboardRow;
    }

    return checkerboard;
  }
}

const painter = new Painter('#');
console.log(painter.paint(10));

const anotherPainter = new Painter('@');
console.log(anotherPainter.paint(5));

// Check if painter exposes palette properly
const palette = Painter.getPalette && Painter.getPalette();
console.assert(palette === PALETTE, 'Wrong palette returned!', palette);
console.assert(Painter.palette === PALETTE, 'Painter property - palette - missing!', Painter.palette);
