const brain = require('./brain.js');
const fs = require('fs');

// Load trained model
const savedModel = JSON.parse(fs.readFileSync('model.json', 'utf-8'));
const net = new brain.recurrent.LSTM();
net.fromJSON(savedModel);

// 🔹 Hardcoded responses based on intent/output
const responses = {
  greeting: [
    "Hello there!",
    "Hi! How can I help you?",
    "Hey! Nice to see you!"
  ],
  happy: [
    "That’s great to hear!",
    "Love the positive vibes!",
    "Sounds like a good day!"
  ],
  sad: [
    "I’m sorry you're feeling that way.",
    "I'm here for you.",
    "Things will get better, stay strong."
  ],
  joke: [
    "Why don’t scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why can't skeletons fight each other? They don't have the guts."
  ],
  help: [
    "Sure! What do you need help with?",
    "Tell me more about your problem."
  ],
  identity: [
    "I'm your friendly chatbot!",
    "I'm a simple AI built using brain.js."
  ],
  thanks: [
    "You're welcome!",
    "Anytime!",
    "Happy to help!"
  ],
  tired: [
    "Maybe you should rest a bit.",
    "Don't forget to take a break."
  ]
};

// 🔹 Test input
const testInput = "pls tell me more joke";

// Predict intent
const intent = net.run(testInput);

// Pick random response based on intent
let reply;

if (responses[intent]) {
  const replyList = responses[intent];
  reply = replyList[Math.floor(Math.random() * replyList.length)];
} else {
  reply = "Sorry, I didn't understand that.";
}

console.log(intent);
console.log(reply);
