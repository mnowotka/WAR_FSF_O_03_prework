const SLASH_SOUND = 'brrrruunnggzzzzz!';
const CLASH_SOUND = 'kssszzzsft!';
const WAVE_SOUND = 'wooowoooow';

class Lightsaber {
  // HERE ADD YOUR METHODS AND CONSTRUCTOR IMPLEMENTATION
}

const jediLightsaber = new Lightsaber('purple');
const sithLightsaber = new Lightsaber('red');

// SIMULATION BELOW
let fightPhrase = '';

fightPhrase += jediLightsaber.slash() + '\n';
fightPhrase += sithLightsaber.clash() + '\n';;
fightPhrase += jediLightsaber.wave() + '\n';;
fightPhrase += sithLightsaber.wave() + '\n';;
fightPhrase += jediLightsaber.clash() + '\n';;
fightPhrase += sithLightsaber.clash() + '\n';;
fightPhrase += sithLightsaber.slash() + '\n';;

fightPhrase+= 'And ' + jediLightsaber.getColor() + ' won!';

console.assert(fightPhrase === 'brrrruunnggzzzzz!\n' +
  'kssszzzsft!\n' +
  'wooowoooow\n' +
  'wooowoooow\n' +
  'kssszzzsft!\n' +
  'kssszzzsft!\n' +
  'brrrruunnggzzzzz!\n' +
  'And purple won!', 'Incorrect fight sequence: ', fightPhrase);
