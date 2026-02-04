const brain = require('./brain.js');
const fs = require('fs');

const trainingData = JSON.parse(fs.readFileSync('training_data.json', 'utf-8'));

const net = new brain.recurrent.LSTM();

console.log('Training the network...');
net.train(trainingData, {
  iterations: 2000,
  log: (details) => console.log(details),
  logPeriod: 100,
  learningRate: 0.005,
});

console.log('Training complete! Saving model...');

const modelJSON = net.toJSON();
fs.writeFileSync('model.json', JSON.stringify(modelJSON));

console.log('Model saved to model.json');
