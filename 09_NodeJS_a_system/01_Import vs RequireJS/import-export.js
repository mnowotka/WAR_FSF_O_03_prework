import { hello , world } from './imports.js';
import * as helloWorldDefault from './imports.js';
// MODIFY IMPORTS ABOVE TO PREVENT COLLISIONS

// DO NOT MODIFY
const hello = 'Hi';
const world = 'Planet';

console.assert(hello + ' ' + world === 'Hi Planet','Should hello locally', hello + ' ' + world);
console.assert(helloExternal + ' ' + worldExternal === 'Hello World','Should hello from imports', helloExternal + ' ' + worldExternal);
console.assert(helloGrouped.hello + ' ' + helloGrouped.world === 'Hello World', 'Should hello from grouped imports', helloGrouped.hello + ' ' + helloGrouped.world);
console.assert(helloGrouped.default === 'Hiyah People!', 'Should hello from grouped import default', helloGrouped.default);
console.assert(helloWorldDefault === 'Hiyah People!','Should hello form default import', helloWorldDefault);
// DO NOT MODIFY
