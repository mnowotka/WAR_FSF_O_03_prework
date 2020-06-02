const actionsMap = {
  shout: 'MOVE BACK',
  kick: 'MOVE BACK',
  call: 'MOVE FORWARD',
  waveLeft: 'MOVE LEFT',
  waveRight: 'MOVE RIGHT'
};

const DEFAULT_ACTION = 'TWIST AROUND';

function emitSound() {
  return console.log('BLEEP BLOOP');
}

function robotAction(input, shouldEmitSound) {
  const action = actionsMap[input]; // Wybierz akcję
  emitSound(); // Spróbuj wygenerować dźwięk

  return action;
}

console.assert(robotAction('shout', false) === 'MOVE BACK', 'Wrong reaction!');
console.assert(robotAction('push', true) === 'TWIST AROUND', 'Wrong reaction!');
console.assert(robotAction('waveLeft', false) === 'MOVE LEFT', 'Wrong reaction!');
console.assert(robotAction('call', true) === 'MOVE FORWARD', 'Wrong reaction!');
