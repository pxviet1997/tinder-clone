import express from 'express';
import mongoose from 'mongoose';

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connectionUrl = "mongodb+srv://admin:padpxv9697@cluster0.ksgce.mongodb.net/tinderDB?retryWrites=true&w=majority";

// Middlewares

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

// Listener
app.listen(port, () => {
  console.log(`listening on localhost: ${port}`);
})
