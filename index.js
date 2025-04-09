const express = require('express');
const app = express();
const port = 3000;

const jokes = [
  "Why don’t scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "Why don’t skeletons fight each other? They don’t have the guts."
];

app.get('/', (req, res) => {
  res.send('Random Jokes API!');
});

app.get('/api/jokes/random', (req, res) => {
  const rndmIdx = Math.floor(Math.random() * jokes.length);
  const rndmJoke = jokes[rndmIdx];
  res.json({ joke: rndmJoke });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
