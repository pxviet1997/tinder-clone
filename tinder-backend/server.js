import express from 'express';
import mongoose from 'mongoose';

import Cards from './models/dbCards.js';
import Cors from 'cors';

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connectionUrl = "mongodb+srv://admin:padpxv9697@cluster0.ksgce.mongodb.net/tinderDB?retryWrites=true&w=majority";

// Middlewares
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API Endpoints
app.get('/', (req, res) => {
  res.status(200)
    .send('HELLO');
});

app.post('/tinder-cards', (req, res) => {
  const dbCards = req.body;

  Cards.create(dbCards, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    else {
      res.status(201).send(data);
    }
  });
});

app.get('/tinder-cards', (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    else {
      res.status(200).send(data);
    }
  });
});

// Listener
app.listen(port, () => {
  console.log(`listening on localhost: ${port}`);
})
