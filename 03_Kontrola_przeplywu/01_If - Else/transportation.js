/**
 * Wybiera sposób transportu
 * @param distance - dystans w metrach
 * @param weather - pogoda - jeden z `fair`, `rain` i `snow`
 * @returns string środek transportu - `car`, `bicycle` albo `walking`
 */
function chooseTransportationMode(distance, weather) {
    if (weather === 'snow') {
        console.log("Json is freezing. Choose the car")
    } else if ((weather === 'rain' && distance < 501) || ((weather === 'fair' && distance < 1001))) {
        console.log("Json could go for a walk");
    } else if ((weather === 'rain' && distance < 2001) || (weather === 'fair' && distance < 4001)) {
        console.log("Json will ride a bike");
    } else if ((weather === 'rain' && distance > 2000) || (weather === 'fair' && distance > 4000)) {
        console.log("Json have to go be car");
        //dłuższa wersja,wolę bo jest bardziej śmieszkową i rozbudowana :p
        // } else if (weather === 'fair' && distance < 1001) {
        //     console.log("Json is happy, he going to eat pizza")
        // } else if (weather === 'fair' && distance < 4001) {
        //     console.log("Json will ride a bike, during the sunny day")
        // } else if  {
        //     console.log("Json will be sweaty, because He don`t have air conditioning\n")
    } else {
        return "JSON stay at home"
    }
}

// Nie modyfikuj poniższych funkcji!
// Jeśli zaimplementujesz funkcję poprawnie, te wykonają się też poprawnie
console.assert(chooseTransportationMode(300, 'snow') === 'car', 'Wrong mean of transportation', chooseTransportationMode(300, 'snow'));
console.assert(chooseTransportationMode(1600, 'snow') === 'car', 'Wrong mean of transportation', chooseTransportationMode(1600, 'snow'));
console.assert(chooseTransportationMode(300, 'rain') === 'walking', 'Wrong mean of transportation', chooseTransportationMode(300, 'rain'));
console.assert(chooseTransportationMode(2000, 'rain') === 'bicycle', 'Wrong mean of transportation', chooseTransportationMode(2000, 'rain'));
console.assert(chooseTransportationMode(2500, 'rain') === 'car', 'Wrong mean of transportation', chooseTransportationMode(2500, 'rain'));
console.assert(chooseTransportationMode(999, 'fair') === 'walking', 'Wrong mean of transportation', chooseTransportationMode(999, 'fair'));
console.assert(chooseTransportationMode(4000, 'fair') === 'bicycle', 'Wrong mean of transportation', chooseTransportationMode(4000, 'fair'));
console.assert(chooseTransportationMode(6000, 'fair') === 'car', 'Wrong mean of transportation', chooseTransportationMode(6000, 'fair'));
