import express from 'express';
import { countWordFreq } from './utils.js';

const app = express();
app.use(express.json());

app.get('/count', (req, res) => {
  const smth = req.body;
  const wordFreq = countWordFreq(smth.text);

  res.json({
    counts: wordFreq,
  });
});

app.listen(process.env.PORT, () => {
  console.log('Server is running on http://localhost:'+process.env.PORT);
});