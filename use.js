const brain = require('./brain.js');
const fs = require('fs');

// Load the saved model JSON
const savedModel = JSON.parse(fs.readFileSync('model.json', 'utf-8'));

const net = new brain.recurrent.LSTM();

// Load the model into the network
net.fromJSON(savedModel);

// Now run inference
const testInput = "hello";

const output = net.run(testInput);
console.log(`Input: "${testInput}" => Output: "${output}"`);
