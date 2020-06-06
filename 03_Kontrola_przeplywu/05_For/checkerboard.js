const greeter = function greeter(num) {
    let greet = 'Hello W';
    for (let i = 0; i < num; i++) {
        greet += 'o';
    }
    greet += 'rld!';

    return greet;
};

console.log(greeter(5)); // Hello Wooooorld!
console.log(greeter(10));
console.log(greeter(1));

// Przykład funkcji modulo
console.log('Modulo examples: ');
console.log(3 % 2);
console.log(15 % 2);
console.log(10 % 2);

function generateCheckerboard(times, blackTileChar, whiteTileChar) {
    let checkerboard='';
    for (let i = 0; i < times; i++ ) {
        for (let j = 0; j < times; j++) {
            if ((i+j) % 2 === 0) {
                checkerboard += blackTileChar
            } else {
                checkerboard += whiteTileChar
            }
        }
    }
    console.log(checkerboard);

}

console.log('\n/**************/');
console.log('| CHECKERBOARD |');
console.log('/**************/');

generateCheckerboard(3, '##', '__');
//chyba znowu w życiu mi nie wyszło/ Nie potrawie zrobić tak by w konsoli się wyświetlało w kilku rzędach